
import { useEffect, useRef } from "react";

export default function TradingViewQuote({ symbol }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    ref.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol,
      colorTheme: "dark",
      isTransparent: true,
      locale: "en",
    });

    ref.current.appendChild(script);
  }, [symbol]);

  return (
    <div
      className="overflow-hidden"
      style={{
        width: "110px",        
        height: "60px",        
      }}
    >
      <div
        ref={ref}
        style={{
          transform: "scale(0.75)",     
          transformOrigin: "left top",
          width: "150px",               
        }}
      />
    </div>
  );
}
