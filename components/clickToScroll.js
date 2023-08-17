import React, { useState, useEffect } from "react";
import { LiaArrowDownSolid } from "react-icons/lia";

const ClickToScroll = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const listenToScroll = () => {
      let heightToHidden = 200;
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      if (winScroll < heightToHidden) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", listenToScroll);

    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, []);

  const downFunction = () => {
    window.scrollTo({ top: 600, left: 0, behavior: "smooth" });
  };

  return (
    <div>
      {isVisible && (
        <div
          onClick={downFunction}
          className="animate-bounce fixed bottom-4 right-4 z-50 text-lg border-2 outline-none text-white cursor-pointer p-2 rounded-full md:hidden"
          title="Go to top"
        >
          <LiaArrowDownSolid />
        </div>
      )}
    </div>
  );
};

export default ClickToScroll;
