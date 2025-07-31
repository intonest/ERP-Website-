"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaFingerprint, FaClock, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

let interval;

const CardStack = ({ items, offset = 10, scaleFactor = 0.06 }) => {
  const [cards, setCards] = useState(items);

  useEffect(() => {
    startFlipping();
    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop());
        return newArray;
      });
    }, 4000);
  };

  return (
    <div className="relative h-60 w-60 md:h-72 md:w-96">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute dark:bg-black bg-white h-60 w-60 md:h-72 md:w-96 rounded-3xl p-6 shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
          style={{ transformOrigin: "top center" }}
          animate={{
            top: index * -offset,
            scale: 1 - index * scaleFactor,
            zIndex: cards.length - index,
          }}
        >
          <div className="flex items-center mb-4 space-x-4">
            <div className="text-3xl">{card.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{card.title}</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300">{card.desc}</p>
        </motion.div>
      ))}
    </div>
  );
};

const CARDS = [
  {
    id: 0,
    icon: <FaFingerprint className="text-indigo-500 w-8 h-8" />,
    title: "Biometric & RFID Integration",
    desc: "Eliminate manual errors with seamless automated check-ins."
  },
  {
    id: 1,
    icon: <FaClock className="text-pink-500 w-8 h-8" />,
    title: "Real-Time Tracking",
    desc: "Live dashboards to monitor in/out, absentees, and late entries."
  },
  {
    id: 2,
    icon: <FaCalendarAlt className="text-yellow-500 w-8 h-8" />,
    title: "Smart Shift & Leave Sync",
    desc: "Handle shifts, rotations, and auto-sync approved leaves."
  },
  {
    id: 3,
    icon: <FaMapMarkerAlt className="text-green-500 w-8 h-8" />,
    title: "Geo-Tagged Remote Attendance",
    desc: "Empower your hybrid & field staff with GPS-based check-ins."
  },
];

const AttendanceOverview = () => {
  return (
    <section className="relative py-24 px-0 overflow-hidden bg-black text-gray-100 w-full">
      {/* Glow background full width */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gray-600 rounded-full blur-[120px] -z-10"></div>

      <div className="relative z-10 w-full grid md:grid-cols-2 gap-16 items-center px-6">
        
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-white">
            Smart Attendance For A Modern Workforce
          </h2>
          <p className="text-lg text-gray-400 max-w-xl">
            Automate attendance, track insights in real-time, and empower your teams with a seamless experience. Built for efficiency and total transparency.
          </p>
          <div className="mt-8">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#"
              className="px-8 py-4 rounded-xl bg-gradient-to-r bg-gray-600 transition-colors text-white font-semibold shadow-lg"
            >
              Explore Attendance Module
            </motion.a>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center w-full"
        >
          <CardStack items={CARDS} />
        </motion.div>

      </div>
    </section>
  );
};

export default AttendanceOverview;
