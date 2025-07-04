import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from "react-responsive";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as S from './style';

gsap.registerPlugin(ScrollTrigger)

function Counter() {
    const isMobile = useMediaQuery({ query: "(max-width: 480px)" })
    const isTablet = useMediaQuery({ query: "(max-width: 1024px)" })

    const counterRef = useRef(null)
    const containerRef = useRef(null)
    const [counterValue, setCounterValue] = useState(0)

    useEffect(() => {
        const containerHeight = containerRef.current.offsetHeight
        const counterHeight = counterRef.current.offsetHeight

        ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top center",
            end: isMobile ? "bottom+=280px bottom" : isTablet ? "bottom+=260px bottom" : "bottom+=200px bottom", 
            scrub: true, 
            onUpdate: (self) => {
                const progress = self.progress
                const totalScrollableDistance = containerHeight - counterHeight

                const newY = progress * totalScrollableDistance;
                gsap.to(counterRef.current, {
                    y: newY,
                    duration: 0,
                    ease: "linear",
                })

                const newValue = Math.round(progress * totalScrollableDistance)
                setCounterValue(newValue)
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((st) => st.kill())
        }
    }, [isMobile, isTablet])

    return (
        <S.CounterContainer ref={containerRef}>
            <S.Counter ref={counterRef}>
                {counterValue}
            </S.Counter>
        </S.CounterContainer>
    )
}

export default Counter;