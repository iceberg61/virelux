
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { HiLightningBolt, HiChartBar, HiUserGroup } from "react-icons/hi";

export default function ProductSection() {
  return (
    <section className="w-full py-24  overflow-hidden bg-yellow-400">

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-10">

          {/* MAIN CTA */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            {/* Left text */}
            <div className="max-w-xl">

              <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                Ready to trade the markets <br className="hidden sm:block" />
                with confidence?
              </h2>

              <p className="mt-4 text-gray-800 text-lg">
                Learn market structure, liquidity concepts, and execution
                models used by professional traders.
              </p>

              {/* Forex feature badges */}
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="flex items-center gap-2 bg-white/80 text-black px-3 py-1.5 rounded-md text-sm">
                  <HiChartBar /> Market Structure
                </span>
                <span className="flex items-center gap-2 bg-white/80 text-black px-3 py-1.5 rounded-md text-sm">
                  <HiLightningBolt /> Live Trading Sessions
                </span>
                <span className="flex items-center gap-2 bg-white/80 text-black px-3 py-1.5 rounded-md text-sm">
                  <HiUserGroup /> 1-on-1 Mentorship
                </span>
              </div>
            </div>

            {/* Right CTA button */}
            <a
              href="#enroll"
              className="group relative mt-6 inline-flex items-center gap-3 bg-black text-white px-6 py-4 rounded-xl font-medium transition-all hover:bg-white hover:text-black"
            >
              Join the Academy
              <BsArrowUpRightCircleFill
                className="transform transition-transform duration-300 group-hover:rotate-45"
              />

              {/* subtle pulse */}
              <span className="absolute inset-0 rounded-xl ring-2 ring-black/10 animate-pulse pointer-events-none"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
