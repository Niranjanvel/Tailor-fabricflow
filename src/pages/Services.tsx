import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ServiceCard } from "@/components/ServiceCard";
import { Shirt, Sparkles, Ruler, Scissors, Package, Star } from "lucide-react";

const allServices = [
  {
    title: "Blouse Stitching",
    description: "Custom-fitted blouses with intricate designs, embroidery work, and perfect measurements for all occasions",
    timeframe: "2-3 days",
    priceRange: "500-1500",
    icon: <Shirt size={40} />,
  },
  {
    title: "Saree Falls & Picos",
    description: "Expert saree finishing with traditional techniques, premium materials, and attention to detail",
    timeframe: "1-2 days",
    priceRange: "300-800",
    icon: <Sparkles size={40} />,
  },
  {
    title: "Alterations",
    description: "Professional alterations for perfect fit including length adjustment, size modifications, and repairs",
    timeframe: "1-2 days",
    priceRange: "200-600",
    icon: <Ruler size={40} />,
  },
  {
    title: "Men's Stitching",
    description: "Custom shirts, kurtas, and traditional wear tailored to perfection with quality fabric",
    timeframe: "3-5 days",
    priceRange: "800-2000",
    icon: <Scissors size={40} />,
  },
  {
    title: "Wedding Attire",
    description: "Specialized bridal and wedding garment stitching with intricate embellishments and designs",
    timeframe: "7-10 days",
    priceRange: "2000-5000",
    icon: <Star size={40} />,
  },
  {
    title: "Custom Designs",
    description: "Bring your unique designs to life with our expert tailors and premium quality materials",
    timeframe: "5-7 days",
    priceRange: "1000-3000",
    icon: <Package size={40} />,
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WhatsAppButton />

      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-4">
              Our <span className="text-secondary text-glow">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto">
              From traditional to contemporary, we offer a complete range of tailoring services
              with expert craftsmanship and attention to detail
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                delay={index * 0.1}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 p-8 bg-gradient-to-r from-primary to-accent rounded-2xl text-center"
          >
            <h3 className="text-3xl font-heading font-bold text-primary-foreground mb-4">
              Need Something Specific?
            </h3>
            <p className="text-primary-foreground/90 font-body mb-6 text-lg">
              Contact us for custom requirements and special orders
            </p>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-secondary hover:bg-secondary/90 text-primary font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
