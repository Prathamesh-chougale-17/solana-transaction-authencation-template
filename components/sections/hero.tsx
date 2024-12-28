"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <motion.section 
      className="min-h-screen flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h1
          className="text-7xl font-bold text-white mb-8 text-center [text-shadow:_0_0_30px_rgb(59_130_246_/_0.5)]"
          initial={{ y: 100, opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.5, 
            ease: [0.19, 1.0, 0.22, 1.0]
          }}
        >
          Welcome to the Future
        </motion.h1>
        
        <motion.p
          className="text-2xl text-blue-100 text-center max-w-2xl mx-auto font-light [text-shadow:_0_0_20px_rgb(59_130_246_/_0.5)]"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 1.2, 
            delay: 1, 
            ease: [0.19, 1.0, 0.22, 1.0] 
          }}
        >
          Experience secure blockchain transactions with cutting-edge authentication
        </motion.p>

        <motion.div
          className="mt-12 flex justify-center gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 rounded-xl shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105"
          >
            Get Started
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 rounded-xl border-2 hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            Learn More
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
