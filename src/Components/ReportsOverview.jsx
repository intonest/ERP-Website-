"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaChartBar, FaFileAlt, FaBell, FaDatabase } from "react-icons/fa";

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
    icon: <FaChartBar className="w-8 h-8 text-pink-500" />,
    title: "Dynamic Dashboards",
    desc: "Interactive, filterable dashboards that give instant snapshots of your KPIs and financial metrics."
  },
  {
    id: 1,
    icon: <FaFileAlt className="w-8 h-8 text-indigo-500" />,
    title: "Automated Report Scheduling",
    desc: "Auto-generate & email critical reports to stakeholders daily, weekly, or monthly."
  },
  {
    id: 2,
    icon: <FaBell className="w-8 h-8 text-yellow-400" />,
    title: "Real-Time Alerts",
    desc: "Set thresholds to get instant notifications on budget deviations or stock levels."
  },
  {
    id: 3,
    icon: <FaDatabase className="w-8 h-8 text-green-500" />,
    title: "Deep Data Drilldowns",
    desc: "Click into any figure to uncover transaction-level details with full audit trails."
  }
];

const ReportsOverview = () => {
  return (
    <section className="relative py-24 px-0 overflow-hidden bg-black text-gray-100 w-full">
      <div className="absolute -bottom-40 right-0 w-[600px] h-[600px] bg-gradient-to-br from-pink-500/20 to-indigo-500/30 rounded-full blur-[120px] -z-10"></div>

      <div className="relative z-10 w-full grid md:grid-cols-2 gap-16 items-center px-6">


        {/* Right side with rotating cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center w-full"
        >
          <CardStack items={CARDS} />
        </motion.div>
                {/* Left side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-white">
            Uncover Insights With Powerful Reports
          </h2>
          <p className="text-lg text-gray-400 max-w-xl">
            Turn raw data into strategic decisions. With our advanced reporting tools, monitor your operations, financials, and sales in real-time, all from one unified dashboard.
          </p>
          <div className="mt-8">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#"
              className="px-8 py-4 rounded-xl bg-gradient-to-r bg-gray-600 transition-colors text-white font-semibold shadow-lg"
            >
              Explore Reports Module
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReportsOverview;
