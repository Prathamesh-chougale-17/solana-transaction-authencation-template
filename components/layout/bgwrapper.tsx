"use client"
import { motion } from "framer-motion";
import AnimatedBackground from "../sections/AnimatedBackground";


const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  

interface BGWrapperProps {
    children: React.ReactNode;
}

const BGWrapper: React.FC<BGWrapperProps> = ({ children }) => {
    return (
        <motion.main
      className="min-h-screen relative bg-black overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      variants={containerVariants}
    >
      <AnimatedBackground />
      <div className="relative z-10">
        <div className="relative z-10">{children}</div>
        </div>
        </motion.main>
    );
}

export default BGWrapper;