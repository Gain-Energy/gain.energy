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
                    onUpdate: (self) => {
                        const progress = self.progress

                        if (progress >= 0.987) {
                            gsap.to(union, { motionPath: { path: path, align: path, alignOrigin: [0.25, 0.25], autoRotate: -90, end: 0.987 }, duration: 0 })
                        }

                        if (progress > 0.705 && progress <= 0.715) {
                            gsap.to(union, { opacity: 0, duration: 0.2 });
                        } else {
                            gsap.to(union, { opacity: 1, duration: 0.2 });
                        }
                    },
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
                width="338" 
                height="9814" 
                viewBox="0 0 338 9814" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path 
                    ref={pathRef}
                    d="M222.02 -9.63904e-06L222.02 103.857C222.02 115.542 217.927 126.858 210.453 135.839L198.586 150.1C191.112 159.082 187.02 170.398 187.02 182.083L187.02 797.861C187.02 809.402 191.012 820.587 198.319 829.519L237.721 877.687C245.028 886.62 249.02 897.805 249.02 909.345L249.02 2411.04C249.02 2423.26 244.548 2435.05 236.449 2444.19L199.59 2485.81C191.491 2494.95 187.02 2506.74 187.02 2518.96L187.018 4457.18C187.018 4468.4 183.246 4479.29 176.308 4488.11L149.716 4521.89C142.778 4530.71 139.006 4541.6 139.006 4552.82L139.006 6114.42C139.006 6129.64 145.934 6144.03 157.828 6153.51L204.184 6190.49C216.078 6199.97 223.006 6214.36 223.006 6229.58L223.006 6652.82C223.006 6664.26 226.93 6675.35 234.124 6684.25L325.887 6797.75C333.081 6806.65 337.006 6817.74 337.006 6829.18L337.006 7745.5C337.006 7757.44 332.736 7768.98 324.969 7778.04L199.043 7924.96C191.275 7934.02 187.006 7945.56 187.006 7957.5L187.007 8742.9C187.007 8754.59 182.906 8765.92 175.417 8774.91L148.595 8807.09C141.107 8816.08 137.006 8827.41 137.006 8839.1L137.005 8918.31C137.005 8929.76 133.077 8940.86 125.878 8949.75L12.6315 9089.75C5.43218 9098.64 1.50449 9109.75 1.50449 9121.19L1.5043 9814" 
                    stroke="#6D6D6D" 
                    strokeWidth="1.5" 
                    strokeDasharray="3 3"
                />
                <path 
                    ref={filledPathRef}
                    d="M222.02 -9.63904e-06L222.02 103.857C222.02 115.542 217.927 126.858 210.453 135.839L198.586 150.1C191.112 159.082 187.02 170.398 187.02 182.083L187.02 797.861C187.02 809.402 191.012 820.587 198.319 829.519L237.721 877.687C245.028 886.62 249.02 897.805 249.02 909.345L249.02 2411.04C249.02 2423.26 244.548 2435.05 236.449 2444.19L199.59 2485.81C191.491 2494.95 187.02 2506.74 187.02 2518.96L187.018 4457.18C187.018 4468.4 183.246 4479.29 176.308 4488.11L149.716 4521.89C142.778 4530.71 139.006 4541.6 139.006 4552.82L139.006 6114.42C139.006 6129.64 145.934 6144.03 157.828 6153.51L204.184 6190.49C216.078 6199.97 223.006 6214.36 223.006 6229.58L223.006 6652.82C223.006 6664.26 226.93 6675.35 234.124 6684.25L325.887 6797.75C333.081 6806.65 337.006 6817.74 337.006 6829.18L337.006 7745.5C337.006 7757.44 332.736 7768.98 324.969 7778.04L199.043 7924.96C191.275 7934.02 187.006 7945.56 187.006 7957.5L187.007 8742.9C187.007 8754.59 182.906 8765.92 175.417 8774.91L148.595 8807.09C141.107 8816.08 137.006 8827.41 137.006 8839.1L137.005 8918.31C137.005 8929.76 133.077 8940.86 125.878 8949.75L12.6315 9089.75C5.43218 9098.64 1.50449 9109.75 1.50449 9121.19L1.5043 9814" 
                    stroke="#31ED37"
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