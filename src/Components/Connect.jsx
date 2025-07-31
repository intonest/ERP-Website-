import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  { value: 50, suffix: "+", label: "Projects completed" },
  { value: 16, suffix: "+", label: "Awards Received" },
  { value: 12, suffix: "+", label: "Years of experience" },
  { value: 20, suffix: "+", label: "Team members" },
];

const StatsSection = () => {
  return (
    <section className="w-full bg-black text-white py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold mb-2"
        >
          Get help from our experts to
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold mb-6"
        >
          customize your <span className="text-[#E86942]">ERP Template</span>
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto mb-12"
        >
          We are a team of ERP specialists helping businesses achieve operational
          excellence through digital transformation. With 10 years of experience
          across industries, we provide tailored ERP implementations that adapt to
          your business — not the other way around.
        </motion.p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#1c1c1c] p-6 rounded-xl shadow-md"
            >
              <div className="text-3xl md:text-4xl font-bold text-white">
                <CountUp
                  end={stat.value}
                  suffix={stat.suffix}
                  duration={5}
                  enableScrollSpy
                />
              </div>
              <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-[#ff7d5a] to-[#e5533c] px-6 py-3 text-white rounded-full font-semibold text-base shadow-lg hover:shadow-xl transition duration-300"
        >
          Connect Us →
        </motion.button>
      </div>
    </section>
  );
};

export default StatsSection;
