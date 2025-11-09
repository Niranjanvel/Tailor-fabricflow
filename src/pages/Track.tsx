import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { OrderTracker } from "@/components/OrderTracker";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

const Track = () => {
  const [orderId, setOrderId] = useState("");
  const [showTracker, setShowTracker] = useState(false);

  const handleTrack = () => {
    if (orderId.trim()) {
      setShowTracker(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WhatsAppButton />

      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-4">
              Track Your <span className="text-secondary text-glow">Order</span>
            </h1>
            <p className="text-xl text-muted-foreground font-body">
              Enter your order ID to see the current status
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Enter Order ID (e.g., ABT-12345)"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                className="text-lg py-6 bg-card border-border"
                onKeyPress={(e) => e.key === 'Enter' && handleTrack()}
              />
              <Button
                onClick={handleTrack}
                className="bg-secondary hover:bg-secondary/90 text-primary px-8"
                size="lg"
              >
                <Search className="mr-2" size={20} />
                Track
              </Button>
            </div>
          </motion.div>

          {showTracker && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <OrderTracker />
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 p-6 bg-muted/30 rounded-xl text-center"
          >
            <p className="text-muted-foreground font-body mb-4">
              Need help with your order? Contact us directly
            </p>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              WhatsApp Us
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Track;
