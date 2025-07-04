import { useEffect, useRef } from 'react';
import { useScroll } from '../contexts/ScrollProvider';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import * as S from './style';

gsap.registerPlugin(ScrollTrigger);

function CompanySection({name}) {
    const scrollToRef = useRef(null)
    const contentRef = useRef(null)

    const { registerSection } = useScroll()

    useEffect(() => {
        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 500)
    }, [])

    useEffect(() => {
        const handleResize = () => {
            ScrollTrigger.refresh();
        };
    
        window.addEventListener('resize', handleResize)
    
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {
        registerSection(name, scrollToRef)

        gsap.fromTo(
            contentRef.current,
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
                    trigger: contentRef.current,
                    start: 'top-=20% 50%', 
                    toggleActions: 'play none none none', 
                    // markers: true
                },
            }
        )
    }, [name, registerSection])

    return (
        <S.CompanySection ref={scrollToRef} id="company">
            <S.Content ref={contentRef}>
                <S.Headline>Company</S.Headline>
                <S.Text>
                    We are a highly motivated team with a perfect blend of AI/IT and drilling/petroleum engineering skills, 
                    striving to deliver impactful solutions to the hardworking oil and gas community
                </S.Text>
            </S.Content>
        </S.CompanySection>
    )
}

export default CompanySection;