import React from "react";
import { HiPlay, HiOutlineBookOpen, HiOutlineVideoCamera, HiOutlineDocumentText, HiOutlineMicrophone, HiCheckCircle } from "react-icons/hi2";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

import videoImage from "../assets/img/in-equity-16-image.jpg"; 

export default function EducationSection() {
  const features = [
    {
      title: "Forex Glossary",
      desc: "Master 500+ trading terms in minutes",
      icon: <HiOutlineBookOpen className="text-yellow-400 text-4xl" />,
    },
    {
      title: "Step-by-Step Video Courses",
      desc: "From zero to profitable trader",
      icon: <HiOutlineVideoCamera className="text-yellow-400 text-4xl" />,
    },
    {
      title: "Pro Trading E-Books",
      desc: "Downloadable PDFs & cheat sheets",
      icon: <HiOutlineDocumentText className="text-yellow-400 text-4xl" />,
    },
    {
      title: "Live Market Commentary",
      desc: "Trade alongside expert mentors daily",
      icon: <HiOutlineMicrophone className="text-yellow-400 text-4xl" />,
    },
  ];

  return (
    <section className="w-full py-20 bg-linear-to-b from-yellow-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl  font-bold text-gray-900">
            <span className="relative inline-block">
              Master
              <span className="absolute left-0 -bottom-1 w-full h-1.5 bg-yellow-400 rounded-full"></span>
            </span>{" "}
            Forex Trading with Virelux Academy
          </h1>

          <p className="text-gray-500 mt-4 text-lg max-w-3xl mx-auto">
            Go from complete beginner to confident, consistently profitable trader — with free tools, live mentorship, and a proven roadmap used by thousands.
          </p>
        </div>

        {/* FEATURE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-20">
          {features.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-gray-200 rounded-xl py-8 px-4 flex justify-center flex-col items-center shadow-sm hover:shadow-md transition hover:-translate-y-1"
            >
              <div className="mb-3">{item.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* VIDEO + CONTENT */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* VIDEO WITH SLANTED BACK PANEL */}
          <div className="relative mx-auto w-full max-w-xl">

            {/* Slanted background shape */}
            <div
              className="absolute inset-0 bg-yellow-400/70 rounded-2xl"
              style={{ transform: "rotate(-6deg)", transformOrigin: "center" }}
            ></div>

            <div
              className="absolute inset-0 bg-yellow-400/70 rounded-2xl"
              style={{ transform: "rotate(4deg)", transformOrigin: "center" }}
            ></div>

            {/* Video thumbnail */}
            <div className="rounded-2xl overflow-hidden shadow-2xl relative group">
              <img
                src={videoImage}
                alt="Virelux Forex Academy Training"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />

              {/* Play Button */}
              <a
                href="https://youtu.be/XkDaS3Pi0Kc" 
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-white/95 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition">
                  <HiPlay className="text-yellow-500 text-4xl ml-1" />
                </div>
              </a>
            </div>

          </div>

          {/* TEXT CONTENT */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What You’ll Master at Virelux Academy
            </h2>

            <ul className="space-y-5 text-gray-700 text-lg">
              {[
                "Complete Forex Foundations & Currency Pairs",
                "Professional Chart Reading & Technical Analysis",
                "Fundamental Analysis + Economic News Trading",
                "Precise Entry/Exit Rules That Actually Work",
                "Bank-Level Risk Management & Position Sizing",
                "Bulletproof Trading Psychology & Discipline",
              ].map((item) => (
                <li key={item} className="flex items-center gap-4">
                  <HiCheckCircle className="text-yellow-400 text-3xl shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#enroll" 
              className="group mt-10 inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-yellow-500 hover:text-black transition-all"
            >
              Start Your Free Training Now
              <BsArrowUpRightCircleFill className="text-2xl transform transition-transform duration-300 group-hover:rotate-45" />
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}