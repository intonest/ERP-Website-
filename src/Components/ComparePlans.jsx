import React from 'react';
import { motion } from 'framer-motion';

const features = [
  'Number of Users',
  'Core Modules (Finance, HR, CRM)',
  'Advanced Modules (Inventory, Manufacturing, BI)',
  'Cloud Hosting & Daily Backup',
  'API Integrations',
  'Priority Support',
  '24/7 Premium Support',
  'Custom Workflows',
  'Onboarding & Training',
  'Access from Web & Mobile',
];

const plans = {
  base: ['Up to 10', '✓', '—', '✓', '—', 'Email & Chat', '✓', '—', '—', '✓'],
  pro: ['Up to 25', '✓', '✓', '✓', '—', 'Priority Service', '✓', '—', '—', '✓'],
  enterprise: [
    'Unlimited',
    '✓',
    '✓',
    '✓',
    '✓',
    '24/7 Support',
    '✓',
    '✓',
    '✓',
    '✓',
  ],
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const tableFade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.1, ease: 'easeOut', delay: 0.3 },
  },
};

const ComparePlans = () => {
  return (
    <motion.section
      className="w-full bg-black text-white py-20 px-4 md:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Heading */}
      <motion.div
        variants={fadeInUp}
        className="text-center mb-12 max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent">
          Compare And Choose Your Best Plan!
        </h2>
        <p className="text-gray-400 mt-4 text-base md:text-lg leading-relaxed">
          Every business is unique — and so are its needs. Our ERP plans are
          built to scale with you, whether you're just getting started or
          managing operations across multiple regions. Use the comparison below
          to choose the right fit.
        </p>
      </motion.div>

      {/* Table */}
      <motion.div
        className="overflow-auto rounded-xl border border-neutral-800 shadow-2xl"
        variants={tableFade}
      >
        <table className="w-full border-separate border-spacing-0 text-sm md:text-base">
          <thead>
            <tr>
              <th className="bg-black text-left font-semibold p-4 sticky left-0 z-10 shadow-lg">
                Features
              </th>
              <th className="bg-[#2e2e2e] text-center font-semibold p-4 text-white">
                Base
              </th>
              <th className="bg-[#333333] text-center font-semibold p-4 text-white">
                Pro
              </th>
              <th className="bg-[#3a3a3a] text-center font-semibold p-4 text-white">
                Enterprise
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, i) => {
              const rowBg = i % 2 === 0 ? 'bg-[#111]' : 'bg-[#1a1a1a]';
              return (
                <tr
                  key={i}
                  className={`transition-all duration-300 hover:bg-[#222] ${rowBg}`}
                >
                  <td className="text-left px-4 py-4 font-medium text-white sticky left-0 bg-inherit z-0 backdrop-blur-md">
                    {feature}
                  </td>
                  <td className="text-center px-4 py-4 text-gray-300">
                    {plans.base[i]}
                  </td>
                  <td className="text-center px-4 py-4 text-gray-300">
                    {plans.pro[i]}
                  </td>
                  <td className="text-center px-4 py-4 text-gray-300">
                    {plans.enterprise[i]}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </motion.div>
    </motion.section>
  );
};

export default ComparePlans;
