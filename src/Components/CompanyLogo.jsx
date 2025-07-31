import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../Utils/motion';

import slack from '../assets/slack.png';
import amazon from '../assets/amazon.png';
import woocommerce from '../assets/woocommerce.png';
import meundies from '../assets/meundies.png';
import sitepoint from '../assets/sitepoint.png';

const CompanyLogo = () => {
  const logos = [slack, amazon, woocommerce, meundies, sitepoint];

  return (
    <section className="w-full bg-white py-20">
      {/* Heading & Description */}
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4"
      >
        <motion.div
          variants={fadeIn('up', 0.3)}
          className="text-center mb-16"
        >
          <motion.h2
            variants={textVariant(0.2)}
            className="text-3xl font-bold mb-4"
          >
            The best ERP alternative chosen by 5,000+ brands
          </motion.h2>
          
        </motion.div>
      </motion.div>

      {/* Logo strip section */}
      <div className="w-full container mx-auto overflow-hidden flex flex-col sm:flex-row sm:items-center items-start gap-10 px-4">
        {/* Side Text */}
        <div className="w-[300px] shrink-0 px-8 text-gray-600 border-l-4 border-blue-500 bg-white py-2 z-10 text-xl font-semibold">
          Proud partner at <br /> Hubspot & Segment
        </div>

        {/* Logo Marquee */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Company Logo ${index + 1}`}
                className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogo;
