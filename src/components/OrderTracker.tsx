import { motion } from "framer-motion";
import { Check, Package, Scissors, Shield, Truck } from "lucide-react";
import { Card } from "./ui/card";

interface OrderStage {
  id: number;
  name: string;
  icon: React.ReactNode;
  completed: boolean;
}

const orderStages: OrderStage[] = [
  { id: 1, name: "Received", icon: <Package size={24} />, completed: true },
  { id: 2, name: "In Stitching", icon: <Scissors size={24} />, completed: true },
  { id: 3, name: "Quality Check", icon: <Shield size={24} />, completed: true },
  { id: 4, name: "Shipped", icon: <Truck size={24} />, completed: false },
  { id: 5, name: "Delivery", icon: <Check size={24} />, completed: false },
];

export const OrderTracker = () => {
  return (
    <Card className="p-8 bg-card">
      <h3 className="text-2xl font-heading font-semibold text-center mb-8 text-foreground">
        Track Your Order
      </h3>
      
      <div className="relative">
        {/* Progress line */}
        <div className="absolute top-12 left-0 right-0 h-1 bg-muted">
          <motion.div
            className="h-full bg-secondary"
            initial={{ width: "0%" }}
            whileInView={{ width: "50%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </div>

        {/* Stages */}
        <div className="relative flex justify-between">
          {orderStages.map((stage, index) => (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <motion.div
                className={`w-24 h-24 rounded-full flex items-center justify-center mb-3 ${
                  stage.completed
                    ? "bg-secondary text-primary shadow-lg"
                    : "bg-muted text-muted-foreground"
                }`}
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {stage.icon}
              </motion.div>
              
              <p className="text-sm font-body text-center font-medium text-foreground">
                {stage.name}
              </p>
              
              {stage.completed && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  className="mt-2 w-6 h-6 bg-secondary rounded-full flex items-center justify-center"
                >
                  <Check size={16} className="text-primary" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground font-body">
          <span className="font-semibold">Shipped Date:</span> March 15, 2024
        </p>
        <p className="text-sm text-muted-foreground font-body mt-1">
          <span className="font-semibold">Expected Delivery:</span> March 20, 2024
        </p>
      </div>
    </Card>
  );
};
