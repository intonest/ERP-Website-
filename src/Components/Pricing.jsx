import React, { useState } from 'react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Demo',
    price: 'Free',
    description: 'Choose the best that fits your scale.',
    features: [
      'Attachment & Post Scheduling',
      'Set your rates',
      'Exclusive Deals',
      'Advanced Statistics',
    ],
    disabled: [false, false, false, false],
    button: 'Choose',
    color: 'white',
  },
  {
    name: 'Base',
    price: '$63',
    description: 'Up to 5 Users',
    features: [
      'Core Modules: Finance, HR, CRM',
      'Cloud Hosting & Backup',
      'Exclusive Deals',
      'Advanced Statistics',
    ],
    disabled: [false, true, true, true],
    button: 'Choose',
    color: 'white',
  },
  {
    name: 'Pro',
    price: '$89',
    description: 'Up to 25 Users',
    features: [
      'All Core + Advanced Modules',
      'API Integrations & Role-Based Access',
      'Dedicated Account Manager',
      'Priority Support (Email & Chat)',
    ],
    disabled: [false, false, false, true],
    button: 'Try 1 month',
    tag: 'Save $40',
    color: 'purple-700',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: '$103',
    description: 'Unlimited Users',
    features: [
      'All Core + Advanced Modules',
      'API Integrations & Role-Based Access',
      'Exclusive Deals',
      'Advanced Statistics',
    ],
    disabled: [false, false, false, false],
    button: 'Choose',
    color: 'white',
  },
];

const Pricing = () => {
  const [selected, setSelected] = useState(null);
  const [isMonthly, setIsMonthly] = useState(true);

  return (
   <section className="w-full bg-black text-white px-6 md:px-16 py-20 text-center">


      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        The Right Plan for Your Business
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto mb-8">
        We have several powerful plans to showcase your business and get discovered
        as a creative entrepreneur. Everything you need.
      </p>

      {/* Billing Toggle */}
      <div className="flex justify-center items-center gap-4 mb-12">
        <span className="text-sm text-white">Bill Monthly</span>
        <div
          onClick={() => setIsMonthly(!isMonthly)}
          className="relative w-14 h-7 bg-gray-700 rounded-full cursor-pointer"
        >
          <motion.div
            className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full"
            layout
            transition={{ type: 'spring', stiffness: 700, damping: 30 }}
            style={{
              left: isMonthly ? '4px' : '32px',
            }}
          />
        </div>
        <span className="text-sm text-white">Bill Annually</span>
      </div>

      {/* Pricing Boxes */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
  {plans.map((plan, index) => (
    <motion.div
      key={index}
      onClick={() => setSelected(index)}
      whileHover={{ scale: 1.04 }}
      animate={{
        y: plan.highlight ? -20 : selected === index ? -10 : 0,
        scale: selected === index ? 1.05 : 1,
      }}
      transition={{ type: 'spring', stiffness: 300 }}
      className={`rounded-2xl p-6 text-left cursor-pointer ${
        plan.highlight
          ? 'bg-purple-700 text-white shadow-xl'
          : 'bg-white text-black'
      }`}
    >
            {/* Plan Title */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              {plan.tag && (
                <span className="bg-white text-purple-700 text-xs px-2 py-1 rounded-full font-medium">
                  {plan.tag}
                </span>
              )}
            </div>

            <p className="text-sm mb-4">{plan.description}</p>

            {/* Price */}
            <h4 className="text-3xl font-bold mb-4">
              {plan.price}
              <span className="text-sm font-medium ml-1 text-gray-400">
                {plan.price !== 'Free' && '/month'}
              </span>
            </h4>

            {/* Features */}
            <ul className="text-sm mb-6 space-y-2">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className={`flex items-center gap-2 ${
                    plan.disabled[i] ? 'text-gray-400 line-through' : ''
                  }`}
                >
                  <span className="text-lg">
                    {plan.disabled[i] ? '✕' : '✓'}
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Button */}
            <button
              className={`w-full py-2 text-sm font-semibold rounded-lg ${
                plan.highlight
                  ? 'bg-white text-purple-700 hover:bg-gray-200'
                  : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
              }`}
            >
              {plan.button}
            </button>
          </motion.div>
        ))}
      </div>
    
    </section>
  );
};

export default Pricing;
