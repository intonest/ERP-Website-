import React from 'react';
import { motion } from 'framer-motion';

const benefits = [
  {
    number: '01',
    title: 'Build any solution',
    description:
      'Easily build an HRM, CRM, ERP, or an application for almost any other use case, with visual building blocks and minimal to zero code components.',
  },
  {
    number: '02',
    title: 'Modern technology',
    description:
      'Embrace progress and adopt the latest technologies, like artificial intelligence, augmented reality, and Web3.',
  },
  {
    number: '03',
    title: 'Faster time to market',
    description:
      'A unified platform with visual building blocks, prebuilt code snippets, and built-in connectors helps you roll out applications faster.',
  },
  {
    number: '04',
    title: 'Upscale',
    description:
      'Transition from online databases and spreadsheets to a scalable low-code solution that can improve operational visibility and adapt to your company’s growth, regardless of its size.',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const ERPBenefits = () => {
  return (
    <div className="bg-white px-6 md:px-16 py-16">
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-semibold text-center mb-12"
      >
        How will <span className="text-orange-500 font-bold">ERP Helps</span> Us?
      </motion.h2>

      {/* Grid of Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {benefits.map((item, index) => (
          <motion.div
            key={index}
            className="relative border border-gray-200 p-6 rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow min-h-[300px]"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {/* Number */}
            <div className="text-5xl font-bold text-gray-200 absolute top-4 left-4 pointer-events-none">
              {item.number}
            </div>

            {/* Content */}
            <div className="relative z-10 mt-10">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">{item.description}</p>

            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ERPBenefits;
