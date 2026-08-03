import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as S from './style';

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger)

function PathDrilling() {
    const unionRef = useRef(null)
    const pathRef = useRef(null)
    const filledPathRef = useRef(null)

    useEffect(() => {
        setTimeout(() => {
            ScrollTrigger.refresh()
        }, 500)
    }, [])

    useEffect(() => {
        const handleResize = () => {
            ScrollTrigger.refresh()
        };
    
        window.addEventListener('resize', handleResize)
    
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {
        const union = unionRef.current
        const path = pathRef.current
        const filledPath = filledPathRef.current

        if (union && path && filledPath) {
            const pathLength = path.getTotalLength()

            gsap.set(union, { transformOrigin: "50% 50%" })

            gsap.set(filledPath, {
                strokeDasharray: `${pathLength} ${pathLength}`, 
                strokeDashoffset: pathLength, 
            })

            gsap.to(union, {
                scrollTrigger: {
                    trigger: path,
                    start: "top center",
                    end: "bottom+=300px bottom",
                    scrub: true,
                    // markers: true,
                    // onUpdate: (self) => {
                    //     const progress = self.progress

                    //     if (progress >= 0.987) {
                    //         gsap.to(union, { motionPath: { path: path, align: path, alignOrigin: [0.25, 0.25], autoRotate: -90, end: 0.987 }, duration: 0 })
                    //     }

                    //     if (progress > 0.705 && progress <= 0.715) {
                    //         gsap.to(union, { opacity: 0, duration: 0.2 });
                    //     } else {
                    //         gsap.to(union, { opacity: 1, duration: 0.2 });
                    //     }
                    // },
                },
                motionPath: {
                    path: path,
                    align: path,
                    alignOrigin: [0.25, 0.25], 
                    autoRotate: -90,
                    smooth: true,
                },
                ease: "linear",
            });

            gsap.to(filledPath, {
                scrollTrigger: {
                    trigger: path,
                    start: "top center",
                    end: "bottom+=300px bottom",
                    scrub: true,
                },
                strokeDashoffset: 0, 
                ease: "linear",
            })
        }
    }, [])

    return (
        <S.PathDrillingContainer>
            <S.Union
                ref={unionRef}
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M6 15.4714V1.99966L9 0L12 1.99966V15.4714H6Z" fill="#31ED37" />
                <path d="M3.44118 16.2638V18.9053H14.5588V16.2638H3.44118Z" fill="#31ED37" />
                <path d="M6.61765 24.8487H11.3824L18 31.4525V24.0563L15.3529 19.6978H2.64706L0 24.0563V31.4525L6.61765 24.8487Z" fill="#31ED37" />
                <path d="M5.55882 34.094L9 29.7355L12.4412 34.094L9 36.9997L5.55882 34.094Z" fill="#31ED37" />
                <path d="M10.8171 25.5091C10.453 25.8648 10.0358 26.3096 9.88369 26.8182C9.73169 27.3268 9.69615 27.8892 9.77913 28.4733C9.86223 29.0575 10.0622 29.6518 10.3679 30.2225C10.6734 30.7932 11.0785 31.3291 11.5601 31.7995C12.0417 32.2699 12.5903 32.6656 13.1745 32.9641C13.7588 33.2626 14.3673 33.458 14.9653 33.5392C15.5634 33.6203 16.139 33.5856 16.6598 33.437C17.1804 33.2884 17.6359 33.0289 18 32.6732L10.8171 25.5091Z" fill="#31ED37" />
                <path d="M8.11631 26.8182C7.96418 26.3096 7.54696 25.8648 7.18286 25.5091L0 32.6732C0.3641 33.0289 0.81958 33.2884 1.3402 33.437C1.86095 33.5856 2.43664 33.6203 3.03468 33.5392C3.63273 33.458 4.24124 33.2626 4.82545 32.9641C5.40967 32.6656 5.95834 32.2699 6.43993 31.7995C6.92152 31.3291 7.32659 30.7932 7.63214 30.2225C7.93782 29.6518 8.13777 29.0575 8.22088 28.4733C8.30385 27.8892 8.26831 27.3268 8.11631 26.8182Z" fill="#31ED37" />
            </S.Union>
            <S.PathDrilling 
                width="254" 
                height="7886.4" 
                viewBox="0 0 254 7886.4" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path 
                    ref={pathRef}
                    d="M222.019 -9.63885e-06L222.019 103.857C222.019 115.542 217.927 126.858 210.453 135.839L198.585 150.1C191.111 159.082 187.019 170.398 187.019 182.083L187.019 797.861C187.019 809.402 191.011 820.587 198.318 829.519L237.72 877.687C245.027 886.62 249.019 897.805 249.019 909.345L249.019 2342.94C249.019 2355.16 244.547 2366.95 236.448 2376.09L199.59 2417.71C191.491 2426.85 187.019 2438.64 187.019 2450.86L187.017 3919.58C187.017 3930.8 183.245 3941.69 176.307 3950.51L149.716 3984.29C142.778 3993.11 139.005 4004 139.005 4015.22L139.005 4473.4L139.005 4540.4L139.005 4644.72C139.005 4656.16 142.93 4667.25 150.124 4676.15L241.887 4789.65C249.081 4798.55 253.005 4809.64 253.005 4821.08L253.011 6203.33C253.011 6213.16 250.116 6222.77 244.687 6230.96L145.335 6380.84C139.906 6389.03 137.01 6398.64 137.01 6408.47L137.01 7008.9L137.01 7068.9L137.009 7258.71C137.009 7270.16 133.081 7281.26 125.882 7290.15L12.6355 7430.15C5.43623 7439.04 1.50854 7450.15 1.50854 7461.59L1.50816 7885.9" 
                    stroke="#6D6D6D" 
                    strokeWidth="1.5" 
                    strokeDasharray="3 3"
                />
                <path 
                    ref={filledPathRef}
                    d="M222.019 -9.63885e-06L222.019 103.857C222.019 115.542 217.927 126.858 210.453 135.839L198.585 150.1C191.111 159.082 187.019 170.398 187.019 182.083L187.019 797.861C187.019 809.402 191.011 820.587 198.318 829.519L237.72 877.687C245.027 886.62 249.019 897.805 249.019 909.345L249.019 2342.94C249.019 2355.16 244.547 2366.95 236.448 2376.09L199.59 2417.71C191.491 2426.85 187.019 2438.64 187.019 2450.86L187.017 3919.58C187.017 3930.8 183.245 3941.69 176.307 3950.51L149.716 3984.29C142.778 3993.11 139.005 4004 139.005 4015.22L139.005 4473.4L139.005 4540.4L139.005 4644.72C139.005 4656.16 142.93 4667.25 150.124 4676.15L241.887 4789.65C249.081 4798.55 253.005 4809.64 253.005 4821.08L253.011 6203.33C253.011 6213.16 250.116 6222.77 244.687 6230.96L145.335 6380.84C139.906 6389.03 137.01 6398.64 137.01 6408.47L137.01 7008.9L137.01 7068.9L137.009 7258.71C137.009 7270.16 133.081 7281.26 125.882 7290.15L12.6355 7430.15C5.43623 7439.04 1.50854 7450.15 1.50854 7461.59L1.50816 7885.9"                     stroke="#31ED37"
                    strokeWidth="1.5"
                />
            </S.PathDrilling>
            <S.DrillingFinish>
                Target Depth
            </S.DrillingFinish>
        </S.PathDrillingContainer>
    );
}

export default PathDrilling;