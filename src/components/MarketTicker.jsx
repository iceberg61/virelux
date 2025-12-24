
import TradingViewQuote from "./TradingViewQuote";

const symbols = [
  "FX:EURUSD",
  "FX:GBPUSD",
  "FX:USDJPY",
  "FX:USDCHF",
  "FX:AUDUSD",
  "OANDA:XAUUSD",
  "SKILLING:US100",
];

export default function MarketTicker() {
  return (
    <div className="relative w-full overflow-hidden">
      
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-linear-to-r   z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-linear-to-l   z-10" />

      <div className="ticker-track flex gap-3 w-max">
        {/* Duplicate for seamless loop */}
        {[...symbols, ...symbols].map((symbol, i) => (
          <div
            key={i}
            className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-xl border border-white/10"
          >
            <TradingViewQuote symbol={symbol} />
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          </div>
        ))}
      </div>

      <style>{`
        .ticker-track {
          animation: ticker 30s linear infinite;
        }

        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
