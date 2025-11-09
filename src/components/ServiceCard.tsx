import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Clock, IndianRupee } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  timeframe: string;
  priceRange: string;
  icon: React.ReactNode;
  delay?: number;
}

export const ServiceCard = ({
  title,
  description,
  timeframe,
  priceRange,
  icon,
  delay = 0,
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
      className="perspective-1000"
    >
      <Card className="p-6 h-full bg-card hover:shadow-2xl transition-all duration-500 gold-border group cursor-pointer relative overflow-hidden">
        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-secondary/10 rounded-bl-full" />
        
        <div className="relative z-10">
          <div className="mb-4 text-secondary group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          
          <h3 className="text-2xl font-heading font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
            {title}
          </h3>
          
          <p className="text-muted-foreground mb-4 font-body text-sm">
            {description}
          </p>
          
          <div className="flex items-center gap-4 text-sm">
            <Badge variant="secondary" className="flex items-center gap-1">
              <Clock size={14} />
              {timeframe}
            </Badge>
            
            <Badge variant="outline" className="flex items-center gap-1">
              <IndianRupee size={14} />
              {priceRange}
            </Badge>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
