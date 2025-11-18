// src/components/TestimonialsCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialsCarousel() {
  const students = [
    {
      name: "Chukwudi Okeke",
      location: "Lagos, Nigeria",
      flag: "🇳🇬",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "I turned ₦180k into ₦2.4M in just 4 months using Virelux strategy. The live mentorship is pure gold!",
      profit: "+1,233%",
    },
    {
      name: "Aisha Yusuf",
      location: "Abuja, Nigeria",
      flag: "🇳🇬",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "As a full-time mom, I now trade 2 hours a day and make more than my husband’s salary. Virelux changed my life.",
      profit: "+890%",
    },
    {
      name: "David Kimani",
      location: "Nairobi, Kenya",
      flag: "🇰🇪",
      avatar: "https://randomuser.me/api/portraits/men/68.jpg",
      text: "Best decision of 2025. From blowing 3 accounts to 12 straight green weeks. The psychology module alone is worth 10× the price.",
      profit: "+1,670%",
    },
    {
      name: "Fatima Bello",
      location: "Kano, Nigeria",
      flag: "🇳🇬",
      avatar: "https://randomuser.me/api/portraits/women/23.jpg",
      text: "I started with ₦75,000. Now I’m funding my brother’s university fees from trading. Thank you Virelux!",
      profit: "+2,180%",
    },
  ];

  return (
    <section className="py-28 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-black text-yellow-400 mb-20 tracking-tight">
          Student Success Stories
        </h2>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          className="testimonials-swiper"
        >
          {students.map((s, i) => (
            <SwiperSlide key={i}>
              <div className="
                group
                bg-gradient-to-br from-white/5 to-white/0
                border border-white/10
                rounded-3xl p-10
                shadow-[0_0_40px_rgba(255,255,255,0.05)]
                backdrop-blur-xl
                transition-all duration-500
                hover:border-yellow-400 hover:shadow-yellow-500/20
              ">
                
                {/* Top section */}
                <div className="flex flex-col items-center mb-6">
                  <img
                    src={s.avatar}
                    alt={s.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-yellow-400 shadow-lg mb-4 transition-all group-hover:scale-105"
                  />
                  <h3 className="text-xl font-bold text-white">{s.name}</h3>
                  <p className="text-gray-400 text-sm flex items-center gap-2">
                    <span className="text-lg">{s.flag}</span> {s.location}
                  </p>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 text-base leading-relaxed italic mb-6">
                  “{s.text}”
                </p>

                {/* Profit */}
                <div className="
                  inline-block
                  bg-yellow-400 text-black 
                  px-6 py-2 
                  font-bold text-lg 
                  rounded-full
                  shadow-[0_0_20px_rgba(250,204,21,0.6)]
                ">
                  {s.profit} Growth
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CTA */}
        <a
          href="#enroll"
          className="
            mt-20 inline-flex items-center gap-3 
            bg-yellow-400 text-black 
            px-10 py-5 
            rounded-full text-xl font-black
            hover:bg-white 
            transition-all hover:scale-105
          "
        >
          Enroll Now & Start Winning
        </a>
      </div>

      {/* Swiper styles */}
      <style jsx>{`
        .testimonials-swiper .swiper-pagination-bullet {
          background: #3a3a3a;
          opacity: 1;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          background: #facc15;
          width: 16px;
          border-radius: 8px;
        }
      `}</style>
    </section>
  );
}
