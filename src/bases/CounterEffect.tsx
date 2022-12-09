import { useEffect, useState } from "react";
import { gsap } from "gsap";

const MAXIMUM_COUNT = 10;

export const CounterEffect = () => {
  const [counter, setCounter] = useState(6);

  useEffect(() => {
    if (counter > 9) {
      console.log("%c Se llego al valor 10 ", "color:yellow;background:blue;");
      gsap.to("h2", { y: -10, duration: 0.2, ease: "ease.out" }).then(() => {
        gsap.to("h2", { y: 0, duration: 1, ease: "bounce.out" });
      });
    }
  }, [counter]);

  const handleClick = () => {
    // counter < MAXIMUM_COUNT && setCounter((prev: number) => prev + 1)
    setCounter((prev) => Math.min(prev + 1, MAXIMUM_COUNT));
  };

  return (
    <>
      <h1>CounterEffect : </h1>
      <h2>{counter}</h2>

      <button onClick={handleClick}> +1 </button>
    </>
  );
};
