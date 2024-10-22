import { useEffect, useState } from "react";

export function useNavHandler() {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [background, setBackground] = useState("transparent");
  const [text, setText] = useState("#0d0d0d");
  const [shadow, setShadow] = useState("none");

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll <= 0) {
        setScrollingDown(false);
        setLastScrollTop(currentScroll);
        setBackground("transparent");
        setText("#0d0d0d");
        setShadow("none");
        return;
      }

      setScrollingDown(currentScroll > lastScrollTop);
      setLastScrollTop(currentScroll);

      if (currentScroll > 10) {
        setBackground("#0d0d0d");
        setText("white");
        setShadow("0px 2px 4px rgba(0, 0, 0, 0.8)");
      } else {
        setBackground("transparent");
        setShadow("none");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return { scrollingDown, shadow, background, text };
}
