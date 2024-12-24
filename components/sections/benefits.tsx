"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Benefits() {
  const benefits = [
    "Easy to use interface for all skill levels",
    "Enterprise-grade security protocols",
    "Lightning-fast transaction processing",
  ];

  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="container max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Benefits
        </motion.h2>
        <div className="space-y-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex items-center space-x-4 bg-background rounded-lg p-4 shadow-sm"
            >
              <div className="bg-primary/10 p-2 rounded-full">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <p className="text-lg">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
