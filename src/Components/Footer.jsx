import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { motion } from "framer-motion"
import { fadeIn, textVariant } from "../Utils/motion"

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About', href: '#' },
      { name: 'Terms of Use', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'How it Works', href: '#' },
      { name: 'Contact Us', href: '#' },
    ],
    getHelp: [
      { name: 'Support Carrer', href: '#' },
      { name: '24h Service', href: '#' },
      { name: 'Quick Chat', href: '#' },
    ],
    support: [
      { name: 'FAQ', href: '#' },
      { name: 'Policy', href: '#' },
      { name: 'Business', href: '#' },
    ],
    contact: [
      { name: 'WhatsApp', href: '#' },
      { name: 'Support 24', href: '#' },
    ],
  }

  return (
    <motion.footer
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="bg-gray-50 w-full"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <motion.div
          variants={fadeIn('up', 0.3)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12"
        >
          {/* Brand Column */}
          <motion.div
            variants={fadeIn('right', 0.4)}
            className="lg:col-span-4"
          >
            <motion.div
              variants={fadeIn('down', 0.5)}
              className="flex items-center gap-1 mb-6"
            >

             <span className="text-xl font-medium ml-1">BeauRoi</span>
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.6)}
              className="text-gray-600  align-text-top"
            >
        
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.7)}
              className="flex gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"
              >
                <FaFacebookF className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-400 hover:text-white transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-700 hover:text-white transition-colors"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Links Columns */}
          <motion.div
            variants={fadeIn('left', 0.4)}
            className="lg:col-span-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                <motion.div
                  key={category}
                  variants={fadeIn('up', 0.2 + categoryIndex * 0.1)}
                >
                  <motion.h3
                    className="text-lg font-semibold mb-4"
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </motion.h3>
                  <ul className="space-y-3">
                    {links.map((link, index) => (
                      <li key={index}>
                        <motion.a
                          whileHover={{ x: 5 }}
                          href={link.href}
                          className="text-gray-600 hover:text-gray-900 transition-all"
                        >
                          {link.name}
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={fadeIn('up', 0.6)}
          className="border-t border-gray-200 mt-16 pt-8"
        >
          <motion.div
            variants={fadeIn('up', 0.7)}
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p className="text-gray-600 text-sm">
              Copyright © {new Date().getFullYear()} BeauRoi
            </p>
            <p className="text-gray-600 text-sm">
              Created by Manoj
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
