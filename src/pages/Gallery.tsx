import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";

const Gallery = () => {
  // Placeholder gallery items
  const galleryItems = Array(9).fill(null).map((_, i) => ({
    id: i + 1,
    title: `Work ${i + 1}`,
    category: i % 3 === 0 ? "Blouse" : i % 3 === 1 ? "Saree" : "Custom Design",
  }));

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
              Our <span className="text-secondary text-glow">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto">
              Browse through our collection of beautifully crafted garments
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  z: 50,
                }}
                className="perspective-1000"
              >
                <Card className="overflow-hidden group cursor-pointer">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden">
                    {/* Placeholder pattern */}
                    <div className="fabric-texture absolute inset-0 opacity-30" />
                    
                    <div className="relative z-10 text-center p-8">
                      <h3 className="text-2xl font-heading font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground font-body">
                        {item.category}
                      </p>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <p className="text-primary-foreground font-body text-sm">
                        Click to view details
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 p-8 bg-gradient-to-r from-primary to-accent rounded-2xl text-center"
          >
            <h3 className="text-3xl font-heading font-bold text-primary-foreground mb-4">
              Want Your Design Featured?
            </h3>
            <p className="text-primary-foreground/90 font-body mb-6 text-lg">
              Share your completed orders with us on WhatsApp
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
