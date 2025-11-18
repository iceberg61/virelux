// src/components/ProductSection.jsx
import React from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import ForexBasicsIcon from "../assets/icons/forex-basics.svg";
import TechnicalIcon from "../assets/icons/technical-analysis.svg";
import RiskIcon from "../assets/icons/risk-management.svg";
import AdvancedIcon from "../assets/icons/advanced.svg";

export default function ProductSection() {
  const products = [
    {
      icon: ForexBasicsIcon,
      title: "Forex Basics",
      description:
        "Dive into the fundamentals of forex trading, covering currency pairs, pips, lots, and essential market mechanics to build a strong foundation.",
      exploreText: "Explore",
      bgColor: "bg-pink-100",
    },
    {
      icon: TechnicalIcon,
      title: "Technical Analysis",
      description:
        "Master charts, indicators, candlesticks, and patterns with hands-on lessons to identify trends and entry/exit points like a pro.",
      exploreText: "Explore",
      bgColor: "bg-teal-100",
    },
    {
      icon: RiskIcon,
      title: "Risk Management",
      description:
        "Learn proven strategies for position sizing, stop-losses, and risk-reward ratios to protect your capital and trade sustainably.",
      exploreText: "Explore",
      bgColor: "bg-blue-100",
    },
    {
      icon: AdvancedIcon,
      title: "Advanced Strategies",
      description:
        "Unlock scalping, swing trading, and algorithmic techniques, plus live mentorship and community support for ongoing mastery.",
      exploreText: "Explore",
      bgColor: "bg-gray-100",
    },
  ];

  return (
    <section className="w-full py-20 bg-yellow-500">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Core Academy Modules
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div
              key={p.title}
              className="bg-linear-to-b from-yellow-50 to-white rounded-2xl p-6 flex flex-col items-start shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              {/* Image Icon (replaces text circle) */}
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${p.bgColor} mb-4 p-2`}
              >
                <img 
                  src={p.icon} 
                  alt={p.title}
                  className="w-8 h-8 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 flex-1 mb-6">
                {p.description}
              </p>

              {/* Explore Link */}
              <a
                href="#"
                className="group flex items-center gap-1 text-sm font-medium text-yellow-500 hover:text-gray-800 transition"
              >
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gray-800 after:transition-all after:duration-300 group-hover:after:w-full">
                  {p.exploreText}
                </span>
                <BsArrowUpRightCircleFill className="transform transition-transform duration-300 group-hover:rotate-45" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}