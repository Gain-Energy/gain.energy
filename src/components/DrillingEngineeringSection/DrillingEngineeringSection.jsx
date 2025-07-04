import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
import * as S from './style';

import pathItems from '../../data/pathItems';

gsap.registerPlugin(ScrollTrigger)

function DrillingEngineeringSection() {
    const [activeStates, setActiveStates] = useState(Array(pathItems.length).fill(false))
    const itemsRef = useRef([])
    const finishRef = useRef(null)
    const headlineRef = useRef(null)
    const headlineMobRef = useRef(null)

    const isMobile = useMediaQuery({ query: "(max-width: 480px)" })
    const isTablet = useMediaQuery({ query: "(max-width: 1024px)" })

    useEffect(() => {
        setTimeout(() => {
            ScrollTrigger.refresh();
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
        gsap.fromTo(
            headlineRef.current,
            {
                opacity: 0,
                y: '20%' 
            }, 
            {
                opacity: 1, 
                y: '0%', 
                duration: 1, 
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: headlineRef.current,
                    start: isMobile ? 'top-=30% 50%' : isTablet ? 'top-=30% 60%' : 'top-=30% 50%', 
                    toggleActions: 'play none none none', 
                    // markers: true
                }
            }
        )

        gsap.fromTo(
            headlineMobRef.current,
            {
                opacity: 0,
                y: '20%' 
            }, 
            {
                opacity: 1, 
                y: '0%', 
                duration: 1, 
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: headlineMobRef.current,
                    start: 'top-=30% 50%', 
                    toggleActions: 'play none none none', 
                    // markers: true
                },
                onComplete: () => {
                    itemsRef.current.forEach((el, index) => {
                        if (el) {
                            gsap.to(el, {
                                scrollTrigger: {
                                    trigger: el,
                                    start: isMobile ? "top+=10px center+=80px" : isTablet ? "top+=10px center+=30px" : "top+=10px center+=80px",
                                    onEnter: () => handleActivate(index),
                                    onLeaveBack: () => handleDeactivate(index),
                                    // markers: true
                                },
                            })
                        }
                    })
            
                    gsap.to(finishRef.current, {
                        scrollTrigger: {
                            trigger: finishRef.current,
                            start: isMobile ? "top+=10px center+=80px" : isTablet ? "top+=10px center+=30px" : "top+=10px center+=80px",  
                            toggleActions: "play reverse play reverse",
                        },
                        color: "#FFFFFF",               
                        duration: 0.3,                   
                    })
                }
            }
        )
    }, [isMobile, isTablet])

    const handleActivate = (index) => {
        setActiveStates((prev) => {
            const updated = [...prev]
            updated[index] = true
            return updated
        })
    }

    const handleDeactivate = (index) => {
        setActiveStates((prev) => {
            const updated = [...prev];
            updated[index] = false;
            return updated;
        })
    }

    return (
        <S.DrillingEngineeringSection>
            <S.Content>
                <S.Headline ref={headlineRef}>
                    We started with Drilling Engineering, but we have
                    <br />
                    <span>BIG plans</span>
                </S.Headline>
                <S.HeadlineMob ref={headlineMobRef}>
                    We started with Drilling Engineering, but we have <span>BIG plans</span>
                </S.HeadlineMob>
                <S.PathBlock>
                    <S.PathStart>
                        <S.PathStartBottom>Drilling Engineering</S.PathStartBottom>
                    </S.PathStart>
                    <S.PathList>
                        {pathItems.map((item, index) => (
                            <S.PathItem
                                key={index}
                                ref={(el) => (itemsRef.current[index] = el)}
                                isActive={activeStates[index]}
                            >
                                <S.PathItemText 
                                    isActive={activeStates[index]}
                                >
                                    {item.text}
                                </S.PathItemText>
                                <S.PathCircle 
                                    isActive={activeStates[index]} 
                                    xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                    <circle cx="8" cy="8.5" r="8" fill="#4E4E4E"/>
                                    <circle cx="8" cy="8.5" r="6" fill="black"/>
                                </S.PathCircle>
                                <S.PathNumber 
                                    isActive={activeStates[index]}
                                >
                                    {item.number}
                                </S.PathNumber>
                            </S.PathItem>
                        ))}
                    </S.PathList>
                    <S.PathEnd ref={finishRef}>AND SO ON…</S.PathEnd>
                </S.PathBlock>
            </S.Content>
        </S.DrillingEngineeringSection>
    )
}

export default DrillingEngineeringSection;