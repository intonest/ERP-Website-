import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X } from "lucide-react";

// Spotlight SVG Component
const Spotlight = ({ className = "", fill = "white", animate = false }) => (
  <motion.svg
    initial={{ opacity: 0, scale: 0.4, x: "-72%", y: "-62%" }}
    animate={animate ? { opacity: 1, scale: 1.1, x: "-50%", y: "-40%" } : {}}
    transition={{ duration: 2.2, delay: 0.4, ease: "easeInOut" }}
    className={`pointer-events-none absolute z-[1] h-[169%] w-[138%] lg:w-[84%] ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 3787 2842"
    fill="none"
  >
    <g filter="url(#filter)">
      <ellipse
        cx="1924.71"
        cy="273.501"
        rx="1924.71"
        ry="273.501"
        transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
        fill={fill}
        fillOpacity="0.35"
      />
    </g>
    <defs>
      <filter
        id="filter"
        x="0.860352"
        y="0.838989"
        width="3785.16"
        height="2840.26"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur stdDeviation="151" result="effect1_foregroundBlur" />
      </filter>
    </defs>
  </motion.svg>
);

// Feature Data
const features = [
  {
    title: "Attendance",
    items: ["Time History", "Leave Management", "Attendance Report"],
  },
  {
    title: "Payroll",
    items: ["Manage Salary", "Payslip", "Advance Salary"],
  },
  {
    title: "Performance",
    items: ["Give Appraisal", "Performance Report", "Employee Awards"],
  },
  {
    title: "Recruitment",
    items: ["Hiring Pipeline", "Job Posting", "Candidate Tracking"],
  },
  {
    title: "Utilities",
    items: ["Announcements", "Holiday Calendar"],
  },
  {
    title: "Finance",
    items: ["Expense", "Receipt", "Balance Sheet"],
  },
  {
    title: "Reports",
    items: ["Tasks Report", "Tickets Report", "Client Report"],
  },
];

// Popup Modal Component
const FeaturePopup = ({ feature, onClose }) => {
  return (
    <AnimatePresence>
      {feature && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative bg-[#111] border border-cyan-500 text-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4"
            initial={{ scale: 0.9, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              {feature.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px", once: true });

  const [selectedFeature, setSelectedFeature] = useState(null);

  return (
    <section
      ref={ref}
      className="relative w-screen min-h-screen ml-[-150px] bg-black text-white py-20 px-4 sm:px-8 overflow-hidden"
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(#404040 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Spotlight */}
      <Spotlight className="top-0 left-0" fill="white" animate={isInView} />

      {/* Section Header */}
      <motion.div
        className="relative z-10 text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-2">HR & CRM Feature Suite</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Streamlined modules for every aspect of workforce & customer management.
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            onClick={() => setSelectedFeature(feature)}
            className="cursor-pointer rounded-xl border border-gray-800 bg-[#111] p-5 shadow hover:shadow-xl transition transform hover:scale-[1.02]"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">
              {feature.title}
            </h3>
            <ul className="space-y-1 text-gray-300">
              {feature.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Feature Popup */}
      <FeaturePopup
        feature={selectedFeature}
        onClose={() => setSelectedFeature(null)}
      />
    </section>
  );
};

export default FeaturesSection;
