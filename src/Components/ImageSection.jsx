import React from 'react';
import { motion } from 'framer-motion';
import BusinessImage from '../assets/Business.jpg';
import TiltedCard from './TiltedCard'; // Make sure to import the TiltedCard

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.2,
      ease: 'easeOut',
    },
  }),
};

const TrendyUXSection = () => {
  return (
    <section className="w-full bg-white px-6 md:px-16 py-16">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Text */}
        <motion.div
          className="text-center md:text-left md:max-w-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={1}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            No dated user trends here
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Embrace the latest visual trends and provide a better user experience in growing form factors like tablets, foldable phones, smart TVs, and more!
          </p>
        </motion.div>

        {/* Tilted Image Card with Hover Effects */}
        <div className="w-full md:w-[480px] h-[300px] flex items-center justify-center">
          <TiltedCard
            imageSrc={BusinessImage}
            captionText="Business Strategy SVG"
            imageHeight="300px"
            imageWidth="100%"
            scaleOnHover={1.1}
            rotateAmplitude={12}
            showTooltip={true}
            displayOverlayContent={false}
          />
        </div>
      </div>
    </section>
  );
};

export default TrendyUXSection;
