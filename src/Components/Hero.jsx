import React from 'react'
import { motion } from "framer-motion";
import heroImage from '../assets/hero-image.png'
import { fadeIn, textVariant } from "../Utils/motion";
import { HiArrowRight, HiPlay } from 'react-icons/hi';

const Hero = () => {
  return (
    <section id="home" className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 pt-30 pb-16 container mx-auto">
      
      
      {/* Left Column */}

      <div className="w-full md:w-1/2 space-y-8 flex flex-col items-start text-left">
        <motion.div variants={fadeIn('right', 0.2)} initial="hidden" whileInView="show">
          {/* Star badge */}
           <div className="flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group">
            <span className="text-blue-600 group-hover:scale-110 transition-transform">★</span>
            <span className="text-sm font-medium">Low-code-based ERP alternative</span>
          </div>
        </motion.div>

        <motion.h1 
          variants={textVariant(0.3)}
          initial="hidden"
          whileInView="show"
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          Infinite Integrations{' '}
          <span className="text-black relative inline-block">
            Zero Limits.
            </span>
        </motion.h1>

        <motion.p 
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          className="text-gray-600 text-lg md:text-xl max-w-xl"
        >
          Unleash your business potential with an ERP that adapts, automates, and accelerates — perfectly tailored to your vision.Join us now!
        </motion.p>

        <motion.div 
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView="show"
          className="flex gap-3 max-w-md"
        >
         
         <div className="flex flex-wrap gap-2">
        <button className="bg-yellow-500  text-white px-6 sm:px-10 lg:px-14 py-5 rounded-xl hover:bg-yellow-600 cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-100 active:scale-95">
         Book Demo
         </button>

         <button className="flex items-center gap-2 text-black px-6 sm:px-10 lg:px-14 py-5 rounded-xl hover:bg-yellow-500 cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-100 active:scale-95 whitespace-nowrap">
         <HiPlay className="w-6 h-6 text-red-500" />
        Play Demo
         </button> 
         </div>

        </motion.div>
      </div>


      {/* Right Column - Images */}
      <motion.div 
        variants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView="show"
        className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 "
      >
        <div className="relative">
          <img
            src={heroImage}
            alt="Team meeting"
            className="rounded-lg w-full h-auto max-w-[1200px] relative z-10 hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero