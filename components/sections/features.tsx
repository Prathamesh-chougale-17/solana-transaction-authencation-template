"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Wallet, Zap } from "lucide-react";
import BackgroundPattern from "../ui/background-pattern";

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Secure Authentication",
    description: "Military-grade encryption for your blockchain transactions"
  },
  {
    icon: <Wallet className="w-8 h-8" />,
    title: "Multi-Wallet Support",
    description: "Connect with various wallet providers seamlessly"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Lightning Fast",
    description: "Execute transactions with minimal latency"
  }
];

export default function Features() {
  return (
    <motion.section
      className="min-h-screen flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-5xl font-bold text-white mb-12 text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Key Features
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/20 backdrop-blur-sm"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-blue-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
