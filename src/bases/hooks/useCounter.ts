import { useEffect, useState, useRef } from 'react';
import { gsap } from "gsap";

export const useCounter = () => {

    const [counter, setCounter] = useState(6);
    const counterElement = useRef<HTMLHeadingElement>(null);

    const MAXIMUM_COUNT = 10;

    const handleClick = () => {
        // counter < MAXIMUM_COUNT && setCounter((prev: number) => prev + 1)
        setCounter((prev) => Math.min(prev + 1, MAXIMUM_COUNT));
    };

    useEffect(() => {
        if (counter > 9) {
            console.log("%c Se llego al valor 10 ", "color:yellow;background:blue;");

            const timeLine = gsap.timeline();

            timeLine
                .to(counterElement.current, {
                    y: -10,
                    duration: 0.2,
                    ease: "ease.out",
                })
                .to(counterElement.current, {
                    y: 0,
                    duration: 1,
                    ease: "bounce.out",
                });
        }
    }, [counter]);

    return {
        counter,
        counterElement,
        handleClick

    }
}