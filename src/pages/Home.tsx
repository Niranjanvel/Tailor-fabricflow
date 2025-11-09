import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Scissors, Shirt, Sparkles, Ruler, Package } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-tailoring.jpg";

const featuredServices = [
  {
    title: "Blouse Stitching",
    description: "Custom-fitted blouses with intricate designs and perfect measurements",
    timeframe: "2-3 days",
    priceRange: "500-1500",
    icon: <Shirt size={40} />,
  },
  {
    title: "Saree Falls & Picos",
    description: "Expert saree finishing with traditional techniques and premium materials",
    timeframe: "1-2 days",
    priceRange: "300-800",
    icon: <Sparkles size={40} />,
  },
  {
    title: "Alterations",
    description: "Professional alterations for the perfect fit on any garment",
    timeframe: "1-2 days",
    priceRange: "200-600",
    icon: <Ruler size={40} />,
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.4)',
          }}
        />
        
        {/* Fabric texture overlay */}
        <div className="absolute inset-0 z-0 fabric-texture opacity-20" />

        {/* Floating elements */}
        <div className="absolute inset-0 z-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 180, 360],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              <Scissors size={24} className="text-secondary/30" />
            </motion.div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-heading font-bold text-secondary text-glow mb-6"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(212, 175, 55, 0.5)",
                  "0 0 40px rgba(212, 175, 55, 0.8)",
                  "0 0 20px rgba(212, 175, 55, 0.5)",
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Abi Tailors
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-primary-foreground mb-8 font-body"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              Custom, Traditional, Perfect Fit
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/services">
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-primary font-semibold px-8 py-6 text-lg rounded-xl shadow-2xl hover:shadow-secondary/50 transition-all duration-300 hover:scale-105"
                >
                  Explore Services
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              
              <Link to="/track">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-secondary text-primary-foreground hover:bg-secondary/20 font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <Package className="mr-2" size={20} />
                  Place Order
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-secondary rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-secondary rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Our <span className="text-secondary text-glow">Premium</span> Services
            </h2>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              Expert tailoring with traditional techniques and modern precision
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                delay={index * 0.2}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/services">
              <Button
                variant="outline"
                className="border-2 border-secondary text-foreground hover:bg-secondary/20 font-semibold px-6 py-3 rounded-lg"
              >
                View All Services
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">
              Why Choose <span className="text-secondary text-glow">Abi Tailors</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                { title: "Expert Craftsmanship", desc: "Years of traditional tailoring experience" },
                { title: "Perfect Fit", desc: "Custom measurements for every customer" },
                { title: "Quick Turnaround", desc: "Fast delivery without compromising quality" },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="p-6"
                >
                  <h3 className="text-2xl font-heading font-semibold text-secondary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-primary-foreground/80 font-body">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
