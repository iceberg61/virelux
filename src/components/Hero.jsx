import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import hat from "../assets/img/hat.png";
import Slide1 from "../assets/img/in-equity-slide-1.png";
import Bull from "../assets/img/in-equity-decor-1.svg";
import MarketTicker from "./MarketTicker";

// 🎄 Christmas toggle
const isDecember = new Date().getMonth() === 11;

export default function Hero() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => await loadSlim(engine)).then(() =>
      setInit(true)
    );
  }, []);

  return (
    <main className="relative bg-black/90 text-white font-sans overflow-hidden pt-24 sm:pt-28">

      {/* 🎄 TOP CHRISTMAS LIGHTS */}
      {isDecember && (
        <div className="christmas-lights">
          {Array.from({ length: 18 }).map((_, i) => (
            <span key={i} className="light" />
          ))}
        </div>
      )}

      {/* ❄️ SOFT SNOW */}
      {init && isDecember && (
        <Particles
          id="tsparticles"
          options={{
            background: { color: "transparent" },
            particles: {
              number: { value: window.innerWidth < 768 ? 15 : 35 },
              color: { value: "#ffffff" },
              move: {
                enable: true,
                speed: 0.4,
                direction: "bottom",
                random: true,
              },
              opacity: { value: { min: 0.3, max: 0.6 } },
              size: { value: { min: 1, max: 3 } },
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

            <div className="flex items-center gap-2 p-1.5 bg-white/5 rounded-xl md:w-[80%] w-full" >
              <span className="bg-red-600/70 text-xs font-medium px-2 py-1 rounded-md">
                🎄 Live
              </span>
              <p className="text-gray-400 text-xs">
                Expert Mentorship & Trading Education for All Levels
              </p>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold leading-tight">
              Unlock Forex Mastery at{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Virelux</span>

                {/*  SANTA HAT */}
                {isDecember && (
                  <img
                    src={hat}
                    alt="Santa Hat"
                    className="hidden md:block absolute -top-7.5 -left-[-170px] w-20 rotate-25"
                  />
                )}

                <span className="block h-1 w-full bg-red-500 mt-1"></span>
              </span>{" "}
              Forex Academy
            </h1>

            {/*  UPDATED PARAGRAPH */}
            <p className="text-sm sm:text-lg md:text-xl text-gray-400">
              Virelux Forex Academy helps traders master the markets with real-time
              data, expert guidance, and proven strategies.
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

      {/*  STYLES */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .christmas-lights {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: space-evenly;
          padding: 8px 0;
          z-index: 20;
          pointer-events: none;
        }

        .light {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: red;
          animation: glow 2.5s infinite alternate;
          opacity: 0.6;
        }

        .light:nth-child(3n) {
          background: #22c55e;
          animation-delay: 0.5s;
        }

        .light:nth-child(3n + 1) {
          background: #facc15;
          animation-delay: 1s;
        }

        @keyframes glow {
          from {
            opacity: 0.3;
            box-shadow: 0 0 4px currentColor;
          }
          to {
            opacity: 0.8;
            box-shadow: 0 0 12px currentColor;
          }
        }
      `}</style>
    </main>
  );
}
