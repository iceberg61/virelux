// src/components/Footer.jsx
import React from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { HiPhone, HiEnvelope, HiMapPin } from "react-icons/hi2";
import Logo from "../assets/img/bull-removebg-preview.png";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <img src={Logo} alt="Virelux" className="w-20 mb-6" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Nigeria's #1 Forex Academy. Live mentorship, real results, lifetime access.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-yellow-400 mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {["Home", "Courses", "Live Trading", "Success Stories", "Contact"].map((link) => (
                <li key={link}><a href="#" className="hover:text-yellow-400 transition">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-yellow-400 mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-3"><HiPhone /> +234 901 234 5678</li>
              <li className="flex items-center gap-3"><HiEnvelope /> support@vireluxacademy.com</li>
              <li className="flex items-center gap-3"><HiMapPin /> Lagos • Abuja • PH</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-yellow-400 mb-4">Join Now</h4>
            <a href="#enroll" className="inline-flex items-center gap-2 bg-yellow-500 text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-400 transition">
              Enroll Today <BsArrowUpRightCircleFill />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-xs">
          © 2025 Virelux Academy. Made with passion in Lafia, Nigeria.
        </div>
      </div>
    </footer>
  );
}