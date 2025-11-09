import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Calendar as CalendarIcon, Clock, MessageCircle, Package } from "lucide-react";
import { format, addDays } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const serviceOptions = [
  { value: "blouse", label: "Blouse Stitching", standardDays: 3, urgentDays: 1 },
  { value: "saree", label: "Saree Falls & Picos", standardDays: 2, urgentDays: 1 },
  { value: "alterations", label: "Alterations", standardDays: 2, urgentDays: 1 },
  { value: "mens", label: "Men's Stitching", standardDays: 4, urgentDays: 2 },
  { value: "kids", label: "Kids Wear", standardDays: 3, urgentDays: 1 },
];

const Track = () => {
  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [urgency, setUrgency] = useState<"standard" | "urgent">("standard");
  const [pickupDate, setPickupDate] = useState<Date>();
  const [deliveryDate, setDeliveryDate] = useState<Date>();

  const handleServiceChange = (value: string) => {
    setSelectedService(value);
    if (pickupDate) {
      calculateDeliveryDate(value, urgency, pickupDate);
    }
  };

  const handleUrgencyChange = (value: "standard" | "urgent") => {
    setUrgency(value);
    if (selectedService && pickupDate) {
      calculateDeliveryDate(selectedService, value, pickupDate);
    }
  };

  const handlePickupDateChange = (date: Date | undefined) => {
    setPickupDate(date);
    if (date && selectedService) {
      calculateDeliveryDate(selectedService, urgency, date);
    }
  };

  const calculateDeliveryDate = (service: string, priority: "standard" | "urgent", pickup: Date) => {
    const serviceConfig = serviceOptions.find(s => s.value === service);
    if (serviceConfig) {
      const days = priority === "urgent" ? serviceConfig.urgentDays : serviceConfig.standardDays;
      setDeliveryDate(addDays(pickup, days));
    }
  };

  const handleWhatsAppOrder = () => {
    if (!customerName || !phoneNumber || !selectedService || !pickupDate || !deliveryDate) {
      alert("Please fill in all fields");
      return;
    }

    const serviceName = serviceOptions.find(s => s.value === selectedService)?.label;
    const message = `Hi Abi Tailors! I'd like to place an order:

📝 Name: ${customerName}
📞 Phone: ${phoneNumber}
👗 Service: ${serviceName}
⚡ Priority: ${urgency === "urgent" ? "Urgent" : "Standard"}
📅 Pickup Date: ${format(pickupDate, "PPP")}
🚚 Expected Delivery: ${format(deliveryDate, "PPP")}

Please confirm my order. Thank you!`;

    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WhatsAppButton />

      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-4">
              Place Your <span className="text-secondary text-glow">Order</span>
            </h1>
            <p className="text-xl text-muted-foreground font-body">
              Schedule your pickup and get an instant delivery estimate
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-8 bg-card">
              <div className="space-y-6">
                {/* Customer Details */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="bg-background border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      placeholder="Your contact number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="bg-background border-border"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div className="space-y-2">
                  <Label>Select Service *</Label>
                  <Select value={selectedService} onValueChange={handleServiceChange}>
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="Choose a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border z-50">
                      {serviceOptions.map((service) => (
                        <SelectItem key={service.value} value={service.value}>
                          {service.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Urgency Selection */}
                <div className="space-y-2">
                  <Label>Priority *</Label>
                  <Select value={urgency} onValueChange={handleUrgencyChange}>
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border z-50">
                      <SelectItem value="standard">Standard Delivery</SelectItem>
                      <SelectItem value="urgent">Urgent Delivery (Extra Charge)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Pickup Date */}
                <div className="space-y-2">
                  <Label>Pickup Date *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal bg-background border-border",
                          !pickupDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {pickupDate ? format(pickupDate, "PPP") : "Select pickup date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-card border-border z-50" align="start">
                      <Calendar
                        mode="single"
                        selected={pickupDate}
                        onSelect={handlePickupDateChange}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Delivery Date Display */}
                {deliveryDate && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-secondary/10 rounded-lg border-2 border-secondary/30"
                  >
                    <div className="flex items-center gap-3">
                      <Clock className="text-secondary" size={24} />
                      <div>
                        <p className="font-semibold text-foreground">Expected Delivery Date</p>
                        <p className="text-2xl font-heading text-secondary">
                          {format(deliveryDate, "PPP")}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Submit Button */}
                <Button
                  onClick={handleWhatsAppOrder}
                  className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105"
                  size="lg"
                >
                  <MessageCircle className="mr-2" size={24} />
                  Confirm via WhatsApp
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  We'll pick up your dress from your location on the selected date
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 grid md:grid-cols-2 gap-6"
          >
            <Card className="p-6 bg-muted/30">
              <div className="flex items-start gap-3">
                <Package className="text-secondary mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Free Pickup & Delivery</h3>
                  <p className="text-sm text-muted-foreground">
                    We'll collect your dress from your location and deliver it back when ready
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-muted/30">
              <div className="flex items-start gap-3">
                <Clock className="text-secondary mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Flexible Scheduling</h3>
                  <p className="text-sm text-muted-foreground">
                    Choose any available date for pickup and we'll meet your deadline
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Track;
