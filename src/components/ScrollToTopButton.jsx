import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-50
        bg-yellow-400 text-black
        p-3 rounded-xl shadow-lg
        transition-all duration-300
        hover:bg-black hover:text-white
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}
      `}
      aria-label="Scroll to top"
    >
      <HiArrowUp size={22} />
    </button>
  );
}
