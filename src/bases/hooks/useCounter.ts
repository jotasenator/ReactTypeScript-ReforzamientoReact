import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

export const useCounter = ({ maxCount = 10 }) => {
  const [counter, setCounter] = useState(6);
  const elementToAnimate = useRef<any>(null); //HTMLHeadingElement

  const timeline = useRef(gsap.timeline());

  const handleClick = () => {
    // counter < MAXIMUM_COUNT && setCounter((prev: number) => prev + 1)
    setCounter((prev) => Math.min(prev + 1, maxCount));
  };

  useLayoutEffect(() => {
    console.log(elementToAnimate.current);
    timeline.current
      .to(elementToAnimate.current, {
        y: -10,
        duration: 0.2,
        ease: "ease.out",
      })
      .to(elementToAnimate.current, {
        y: 0,
        duration: 1,
        ease: "bounce.out",
      })
      .pause();
  }, []);

  useEffect(() => {
    // if (counter < maxCount) return;
    timeline.current.play(0);
  }, [counter]);

  return {
    counter,
    elementToAnimate,
    handleClick,
  };
};
