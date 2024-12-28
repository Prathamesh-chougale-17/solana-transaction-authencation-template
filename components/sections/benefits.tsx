"use client";
import { motion } from "framer-motion";

const stats = [
  { number: "99.9%", label: "Uptime" },
  { number: "2M+", label: "Transactions" },
  { number: "<0.1s", label: "Response Time" },
];

export default function Benefits() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900/20 to-purple-900/20 relative">
      <motion.div
        className="container mx-auto px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-white [text-shadow:_0_0_30px_rgb(59_130_246_/_0.5)]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Why Choose Us
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="text-5xl font-bold text-blue-400 mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-gray-300 leading-relaxed">
            Join thousands of users who trust our platform for secure, fast, and reliable blockchain transactions. Experience the future of digital authentication today.
          </p>
        </motion.div>
      </motion.div>

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10"></div>
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
    </section>
        );
}
