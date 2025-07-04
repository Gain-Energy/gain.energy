import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as S from './style';

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

function PathDrillingMob() {
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
                    //         gsap.to(union, { motionPath: { path: path, align: path, alignOrigin: [0.55, 0.5], autoRotate: -90, end: 0.987 }, duration: 0 })
                    //     }
                    // },
                },
                motionPath: {
                    path: path,
                    align: path,
                    alignOrigin: [0.55, 0.5], 
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
                width="12" 
                height="25" 
                viewBox="0 0 12 25" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M4 10.4537V1.35113L6 0L8 1.35113V10.4537H4Z" fill="#31ED37" />
                <path d="M2.29412 10.9892V12.774H9.70588V10.9892H2.29412Z" fill="#31ED37" />
                <path d="M4.41177 16.7898H7.58824L12 21.2519V16.2544L10.2353 13.3094H1.76471L0 16.2544V21.2519L4.41177 16.7898Z" fill="#31ED37" />
                <path d="M3.70588 23.0367L6 20.0917L8.29412 23.0367L6 25L3.70588 23.0367Z" fill="#31ED37" />
                <path d="M7.21143 17.236C6.96869 17.4763 6.69055 17.7769 6.58913 18.1206C6.48779 18.4642 6.4641 18.8442 6.51942 19.2389C6.57482 19.6336 6.70812 20.0352 6.91191 20.4208C7.11561 20.8064 7.38566 21.1685 7.70672 21.4864C8.02778 21.8042 8.39356 22.0716 8.78303 22.2733C9.17251 22.475 9.57818 22.607 9.97688 22.6618C10.3756 22.7166 10.7594 22.6932 11.1065 22.5928C11.4536 22.4924 11.7573 22.317 12 22.0767L7.21143 17.236Z" fill="#31ED37" />
                <path d="M5.41087 18.1206C5.30946 17.7769 5.03131 17.4763 4.78857 17.236L0 22.0767C0.242733 22.317 0.546387 22.4924 0.893469 22.5928C1.24064 22.6932 1.62443 22.7166 2.02312 22.6618C2.42182 22.607 2.82749 22.475 3.21697 22.2733C3.60645 22.0716 3.97223 21.8042 4.29329 21.4864C4.61434 21.1685 4.88439 20.8064 5.08809 20.4208C5.29188 20.0352 5.42518 19.6336 5.48058 19.2389C5.5359 18.8442 5.51221 18.4642 5.41087 18.1206Z" fill="#31ED37" />
            </S.Union>
            <S.PathDrilling 
                width="2" 
                height="5628" 
                viewBox="0 0 2 5628" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path 
                    ref={pathRef}
                    d="M1 0.5L1 1588.5L1 2268.5L1 3960L1 4445L1 5628" 
                    stroke="#6D6D6D" 
                    strokeWidth="1.5" 
                    strokeDasharray="3 3" 
                />
                <path 
                    ref={filledPathRef}
                    d="M1 0.5L1 1588.5L1 2268.5L1 3960L1 4445L1 5628" 
                    stroke="#31ED37"
                    strokeWidth="1.5" 
                />
            </S.PathDrilling>
            <S.DrillingFinish>
                Target Depth
            </S.DrillingFinish>
        </S.PathDrillingContainer>
    )
}

export default PathDrillingMob;