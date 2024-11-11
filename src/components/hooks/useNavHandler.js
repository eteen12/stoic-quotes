import { useEffect, useState } from "react";

export function useNavHandler() {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [shadow, setShadow] = useState("none");
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll <= 0) {
        setScrollingDown(false);
        setLastScrollTop(currentScroll);
        setShadow("none");
        setOpacity(1);
        return;
      }

      setScrollingDown(currentScroll > lastScrollTop);
      setLastScrollTop(currentScroll);

      if (currentScroll > 10) {
        setOpacity(0.97);
        setShadow("0px 2px 4px rgba(0, 0, 0, 0.2)");
      } else {
        setShadow("none");
        setOpacity(0.55);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return { scrollingDown, shadow, opacity };
}
