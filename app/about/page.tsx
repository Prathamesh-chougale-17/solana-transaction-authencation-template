"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutPage = () => {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Solana",
    "Web3",
    "Smart Contracts",
    "Blockchain",
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen px-4 py-16">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="space-y-8"
        >
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <motion.h1
              className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              About Me
            </motion.h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              Web3 Developer & Blockchain Enthusiast
            </p>
          </div>

          {/* About Section */}
          <Card className="p-6 md:p-8 backdrop-blur-sm bg-background/80">
            <motion.div
              variants={fadeIn}
              className="prose prose-gray dark:prose-invert max-w-none"
            >
              <h2 className="text-2xl font-bold mb-4">Hi there! 👋</h2>
              <p className="text-muted-foreground">
                I&apos;m a passionate Web3 developer focused on building
                decentralized applications and blockchain solutions. With
                expertise in Solana ecosystem and modern web technologies, I
                create seamless user experiences that bridge the gap between
                Web2 and Web3.
              </p>
            </motion.div>
          </Card>

          {/* Skills Section */}
          <Card className="p-6 md:p-8 backdrop-blur-sm bg-background/80">
            <h2 className="text-2xl font-bold mb-6">Skills & Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Badge variant="secondary" className="px-3 py-1 text-sm">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </Card>

          {/* CTA Section */}
          <motion.div className="text-center" variants={fadeIn}>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get in Touch
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
