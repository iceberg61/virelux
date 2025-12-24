import { FaQuoteLeft } from "react-icons/fa";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const testimonials = [
  {
    name: "Angela Nannenhorn",
    country: "United Kingdom",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "The academy helped me understand market structure and risk management properly. My trading is now more consistent than ever.",
  },
  {
    name: "Wade Palmer",
    country: "Germany",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "One of the best forex education platforms I’ve used. Clear lessons, live market breakdowns, and strong mentorship.",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900">
          More than <span className="relative inline-block">
            23,000 traders
            <span className="absolute left-0 -bottom-1 w-full h-1 bg-yellow-400 rounded-full"></span>
          </span>{" "}
          joined
        </h2>

        {/* Testimonials */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative bg-yellow-50 rounded-[40px] px-8 py-10 text-left"
            >
              {/* Quote icon */}
              <FaQuoteLeft className="text-yellow-400 text-4xl absolute top-8 right-8 opacity-30" />

              {/* Avatar */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full border-4 border-yellow-400"
                />
                <div>
                  <p className="font-semibold text-gray-900">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    from {item.country}
                  </p>
                </div>
              </div>

              {/* Text */}
              <p className="text-gray-700 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Link */}
        <div className="mt-12">
          <a
            href="#"
            className="text-yellow-400 hover:text-black  inline-flex items-center gap-2 group relative"
          >
            See more trader stories from around the world
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>

            <BsArrowUpRightCircleFill
                className="transform transition-transform duration-300 group-hover:rotate-45"
              /> 
          </a>
        </div>
      </div>
    </section>
  );
}
