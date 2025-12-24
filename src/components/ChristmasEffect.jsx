import { useEffect, useState } from "react";

const ITEMS = ["🎅", "❄️", "🎄", "✨"];

export default function ChristmasFall() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prev) => [
        ...prev,
        {
          id: Math.random(),
          left: Math.random() * 100,
          size: Math.random() * 12 + 14,
          item: ITEMS[Math.floor(Math.random() * ITEMS.length)],
          duration: Math.random() * 5 + 6,
        },
      ]);
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-9999 overflow-hidden">
      {items.map((i) => (
        <span
          key={i.id}
          style={{
            left: `${i.left}%`,
            fontSize: `${i.size}px`,
            animationDuration: `${i.duration}s`,
          }}
          className="absolute top-10 animate-fall"
          onAnimationEnd={() =>
            setItems((prev) => prev.filter((x) => x.id !== i.id))
          }
        >
          {i.item}
        </span>
      ))}
    </div>
  );
}
