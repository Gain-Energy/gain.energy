import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useScroll } from '../contexts/ScrollProvider';
import * as S from './style';

gsap.registerPlugin(ScrollTrigger);

function OurPerspectiveSection({name}) {
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
                    start: 'top-=30% 50%', 
                    toggleActions: 'play none none none', 
                    // markers: true
                },
            }
        )
    }, [name, registerSection])

    return (
        <S.OurPerspectiveSection ref={scrollToRef} id="perspective">
            <S.Content ref={contentRef}>
                <S.HeaderImg>
                    <S.ContentHeader>
                        One task. <br />
                        One AI Agent. <br />
                        <span>Infinite Possibilities.</span>
                    </S.ContentHeader>
                    <S.Img>
                        <S.TopLeft/>
                        <S.TopRight/>
                        <S.BottomLeft/>
                        <S.BottomRight/>
                    </S.Img>
                </S.HeaderImg>
                <S.PerspectivesBlock>
                    <S.Perspective>
                        <S.PerspectiveHeader>
                        Built By Engineers, <br />For Engineers
                        </S.PerspectiveHeader>
                        <S.PerspectiveText>
                            UPSTRIMA empowers O&G professionals with pragmatic AI tools designed and validated by industry experts who understand daily challenges.
                        </S.PerspectiveText>
                    </S.Perspective>
                    <S.Perspective>
                        <S.PerspectiveHeader>
                            Industry-Specific Intelligence
                        </S.PerspectiveHeader>
                        <S.PerspectiveText>
                            Powered by our proprietary custom-built OGAI LLM framework, UPSTRIMA delivers specialized knowledge and capabilities that generic AI platforms cannot match.
                        </S.PerspectiveText>
                    </S.Perspective>
                    <S.Perspective>
                        <S.PerspectiveHeader>
                            Hyper-Personalized Experience
                        </S.PerspectiveHeader>
                        <S.PerspectiveText>
                            Our AI Agents adapt to each engineer's unique workflows and needs, creating a custom toolkit that grows more valuable over time.
                        </S.PerspectiveText>
                    </S.Perspective>
                    <S.Perspective>
                        <S.PerspectiveHeader>
                            Seamless <br />Integration
                        </S.PerspectiveHeader>
                        <S.PerspectiveText>
                            UPSTRIMA enhances your existing systems and processes with powerful AI capabilities while preserving your established workflows and best practices.
                        </S.PerspectiveText>
                    </S.Perspective>
                </S.PerspectivesBlock>
            </S.Content>
        </S.OurPerspectiveSection>
    )
}

export default OurPerspectiveSection;