

import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import contactImg from "../assets/img/9642.jpg";

export default function ContactPage() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  return (
    <div className="relative min-h-screen bg-black/90 overflow-hidden">
      {/* 🌌 PARTICLES — FIXED TO VIEWPORT */}
      {init && (
        <Particles
          id="contact-particles"
          className="fixed inset-0 z-0 pointer-events-none"
          options={{
            background: { color: "transparent" },
            fullScreen: false,
            particles: {
              number: {
                value: window.innerWidth < 768 ? 15 : 40,
              },
              color: { value: "#ffffff" },
              opacity: { value: 0.45 },
              size: { value: 2 },
              move: {
                enable: true,
                speed: 0.6,
                direction: "none",
                random: true,
                straight: false,
                outModes: "out",
              },
            },
          }}
        />
      )}

      {/* CONTENT */}
      <div className="relative z-10 flex min-h-screen">
        {/* LEFT IMAGE */}
        <div className="hidden lg:block w-1/2">
          <img
            src={contactImg}
            alt="Contact"
            className="h-full w-full object-cover"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="w-full lg:w-1/2  flex items-center justify-center px-6">
          <div className="w-full max-w-md text-white">
            {/* TITLE */}
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-semibold">Get in touch</h2>
              <p className="text-gray-400 mt-2">
                We’d love to hear from you
              </p>
            </div>

            {/* FORM */}
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-yellow-500"
              />

              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-yellow-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-yellow-500"
              />

              <textarea
                rows="4"
                placeholder="Your message"
                className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-sm resize-none focus:outline-none focus:border-yellow-500"
              />

              <button
                type="submit"
                className="w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-yellow-400 transition"
              >
                Send message
              </button>
            </form>

            <p className="text-center text-gray-400 text-sm mt-6">
              We usually reply within 24 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
