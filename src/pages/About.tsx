import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { Award, Clock, Heart, Users } from "lucide-react";

const About = () => {
  const stats = [
    { icon: <Users size={40} />, value: "1000+", label: "Happy Customers" },
    { icon: <Clock size={40} />, value: "10+", label: "Years Experience" },
    { icon: <Award size={40} />, value: "5000+", label: "Orders Completed" },
    { icon: <Heart size={40} />, value: "100%", label: "Satisfaction Rate" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WhatsAppButton />

      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-4">
              About <span className="text-secondary text-glow">Abi Tailors</span>
            </h1>
            <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto">
              Crafting elegance with traditional techniques and modern precision
            </p>
          </motion.div>

          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-muted/30">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground font-body text-lg leading-relaxed">
                <p>
                  For over a decade, Abi Tailors has been a trusted name in traditional and contemporary tailoring. 
                  What started as a small workshop has grown into a beloved destination for custom stitching and alterations.
                </p>
                <p>
                  Our journey is built on the foundation of quality craftsmanship, attention to detail, and a deep 
                  understanding of traditional tailoring techniques passed down through generations. We blend these 
                  time-honored methods with modern precision to create garments that fit perfectly and last a lifetime.
                </p>
                <p>
                  Every piece that leaves our workshop carries with it our commitment to excellence and our passion 
                  for the art of tailoring. We take pride in transforming fabric into beautiful, well-fitted garments 
                  that our customers cherish.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 bg-card">
                  <div className="text-secondary mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-heading font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground font-body">
                    {stat.label}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-8">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Quality First",
                  desc: "We never compromise on the quality of materials or craftsmanship",
                },
                {
                  title: "Customer Satisfaction",
                  desc: "Your happiness and comfort are our top priorities",
                },
                {
                  title: "Traditional Excellence",
                  desc: "Preserving and honoring time-tested tailoring techniques",
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="p-6 h-full bg-card hover:shadow-xl transition-all duration-300">
                    <h3 className="text-xl font-heading font-semibold text-secondary mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground font-body">
                      {value.desc}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="p-8 bg-gradient-to-r from-primary to-accent rounded-2xl text-center"
          >
            <h3 className="text-3xl font-heading font-bold text-primary-foreground mb-4">
              Visit Our Workshop
            </h3>
            <p className="text-primary-foreground/90 font-body mb-6 text-lg">
              Experience our craftsmanship firsthand or get in touch for any queries
            </p>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-secondary hover:bg-secondary/90 text-primary font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
