

import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import Slide1 from "../assets/img/in-equity-slide-1.png";
import Bull from "../assets/img/in-equity-decor-1.svg";
import MarketTicker from "./MarketTicker";


export default function Hero() {
  const [init, setInit] = useState(false);



  useEffect(() => {
    initParticlesEngine(async (engine) => await loadSlim(engine)).then(() =>
      setInit(true)
    );
  }, []);

  return (
    <main className="relative bg-black/90 text-white font-sans overflow-hidden pt-24 sm:pt-28">
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

      <img
        src={Bull}
        alt="Bull"
        className="hidden md:block md:absolute right-0 top-0 w-full pointer-events-none z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex flex-col gap-4 w-full lg:w-1/2">
            <div className="flex items-center gap-2 p-1.5 bg-white/5 rounded-xl w-[80%]">
              <span className="bg-blue-600/60 text-xs font-medium px-2 py-1 rounded-md">
                Live
              </span>
              <p className="text-gray-400 text-xs">
                Expert Mentorship & Trading Education for All Levels
              </p>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold leading-tight">
              Unlock Forex Mastery at{" "}
              <span className="inline-block">
                Virelux
                <span className="block h-1 w-full bg-yellow-500 mt-1"></span>
              </span>{" "}
              Academy
            </h1>

            <p className="text-sm sm:text-lg md:text-xl text-gray-400">
              Trade smarter, live smarter. Real market data — updated in real time.
            </p>

            <div className="pt-4">
              <MarketTicker />
            </div>

          </div>

          <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end mt-4">
            <img
              src={Slide1}
              alt="Trading Chart"
              className="w-full sm:w-[70%] md:w-full object-contain animate-float z-50"
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
