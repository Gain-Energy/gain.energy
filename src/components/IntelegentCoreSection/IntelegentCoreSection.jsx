import { useEffect, useRef } from 'react';
import { useScroll } from '../contexts/ScrollProvider';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import * as S from './style';
import backgroundImg from '../../img/chip.jpg'

gsap.registerPlugin(ScrollTrigger);

function IntelegentCoreSection({name}) {
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
        <S.IntelegentCoreSection ref={scrollToRef} id="core">
            <S.Content ref={contentRef}>
                <S.BackgroundImg src={backgroundImg} alt='Чип'/>
                <S.Headline>Intelligent Core</S.Headline>
                <S.BigText>
                    Upstrima is an end-to-end, sovereign AI platform designed for industry-grade value chains of any production scale.
                </S.BigText>
                <S.Text>
                    We are excited to introduce our latest breakthrough: <span>OGAI 3.1 Engineer</span>, a customized Large Language Model (LLM) 
                    framework tailored specifically for the complexities of oil and gas engineering. Its proprietary, bespoke architecture 
                    is augmented by advanced multimodal Agentic AI. This exceptional combination places us at the forefront of AI 
                    implementation in the oil and gas industry.
                </S.Text>
            </S.Content>
        </S.IntelegentCoreSection>
    )
}

export default IntelegentCoreSection;