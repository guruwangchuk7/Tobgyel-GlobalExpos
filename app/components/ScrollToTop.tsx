"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  // Instant scroll reset on route changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" as ScrollBehavior,
    });
  }, [pathname]);

  // Show floating button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="fixed bottom-6 right-6 z-50 p-3 sm:p-3.5 rounded-full bg-[#03142A] text-[#EAA500] border-2 border-[#EAA500]/80 shadow-2xl hover:bg-[#072448] hover:border-[#EAA500] hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer"
        >
          <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3] group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}
    </>
  );
}
