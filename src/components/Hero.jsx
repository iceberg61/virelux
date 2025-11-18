import React, { useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import Slide1 from "../assets/img/in-equity-slide-1.png";
import Bull from "../assets/img/in-equity-decor-1.svg";

function Hero() {
  const [init, setInit] = useState(false);

  const slide = {
    id: 1,
    badge: "Live",
    title: "Unlock Forex Mastery at Virelux Academy",
    description: "Expert Mentorship & Trading Education for All Levels",
    paragraph:
      "Trade smarter, not harder. Elevate your skills with proven strategies, live sessions, and a global community – conquer the forex markets from anywhere.",
    stocks: [
      { symbol: "EURUSD", name: "EUR/USD", change: "+0.45%", price: "1.0850", color: "green" },
      { symbol: "GBPUSD", name: "GBP/USD", change: "-0.23%", price: "1.3025", color: "red" },
      { symbol: "USDJPY", name: "USD/JPY", change: "+1.12%", price: "150.75", color: "green" },
    ],
    image: Slide1,
  };

  // Particles init
  useEffect(() => {
    initParticlesEngine(async (engine) => await loadSlim(engine)).then(() =>
      setInit(true)
    );
  }, []);

  return (
    <main className="relative bg-black/90 text-white font-sans overflow-hidden pt-24 sm:pt-28 ">

      {/* Particles */}
      {init && (
        <Particles
          id="tsparticles"
          options={{
            background: { color: "transparent" },
            particles: {
              number: { value: window.innerWidth < 768 ? 15 : 40 },
              color: { value: "#ffffff" },
              move: { enable: true, speed: 0.6 },
              opacity: { value: 0.5 },
              size: { value: 2 },
            },
          }}
          className="absolute inset-0 z-0"
        />
      )}

      {/* Bull Illustration */}
      <img
        src={Bull}
        alt="Bull"
        className="hidden md:block md:absolute right-0 top-0 w-[90%] pointer-events-none z-0"
      />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        <div className="flex flex-col lg:flex-row items-center gap-10">

          {/* Text Section */}
          <div className="flex flex-col gap-4 w-full lg:w-1/2">

            {/* Badge Section */}
            <div className="flex items-center gap-2 md:gap-3 p-1.5 bg-white/5 rounded-2xl w-full md:w-[80%]">
              <span className="bg-blue-600/60 text-[10px] sm:text-xs font-medium px-2 py-1 rounded-full">
                {slide.badge}
              </span>
              <p className="text-gray-400 text-xs sm:text-sm">{slide.description}</p>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold leading-tight">
              {slide.title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="inline-block">
                {slide.title.split(" ").pop()}
                <span className="block h-1 w-full bg-yellow-500 mt-1"></span>
              </span>
            </h1>

            {/* Paragraph */}
            <p className="text-sm sm:text-lg md:text-xl text-gray-400">
              {slide.paragraph}
            </p>

            {/* Stocks */}
            <div className="flex flex-wrap gap-2 sm:gap-3 pt-2 sm:pt-4">
              {slide.stocks.map((stock) => (
                <div
                  key={stock.symbol}
                  className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-2 rounded-full border border-white/10 text-[9px] sm:text-xs"
                >
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gray-600 rounded-full"></div>
                  <div>
                    <div className="font-medium text-white">{stock.name}</div>
                    <div
                      className={`font-medium ${
                        stock.color === "green" ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      {stock.change}
                    </div>
                  </div>
                  <div className="font-semibold text-white text-[10px] sm:text-xs">
                    {stock.price}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Image Section */}
          <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end mt-4">
            <img
              src={slide.image}
              alt="Trading"
              className="w-full sm:w-[70%] md:w-full object-contain animate-float z-50"
            />
          </div>
        </div>
      </div>

      {/* Floating Animation */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}
      </style>
    </main>
  );
}

export default Hero;