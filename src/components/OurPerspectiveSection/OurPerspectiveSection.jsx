import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useScroll } from '../contexts/ScrollProvider';
import { useMediaQuery } from "react-responsive";
import ReactPlayer from 'react-player'
import * as S from './style';
import PrevImg from '../../img/prev.png'

gsap.registerPlugin(ScrollTrigger);

function OurPerspectiveSection({ name }) {
    const isMobile = useMediaQuery({ query: "(max-width: 480px)" })

    const scrollToRef = useRef(null)
    const contentRef = useRef(null)
    const playerRef = useRef(null)

    const [playing, setPlaying] = useState(false)
    const [showPlayButton, setShowPlayButton] = useState(true)
    const [muted, setMuted] = useState(true)
    const [showPreview, setShowPreview] = useState(true)
    const [previewFadingOut, setPreviewFadingOut] = useState(false)

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
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    // Handle play button click
    const handlePlayClick = () => {
        setShowPreview(false)
        setPlaying(true)
        setMuted(false)
        setShowPlayButton(false)
    }

    // Auto-start preview and then video when in view
    useEffect(() => {
        if (!playerRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Show preview for 3 seconds, then start video
                        setTimeout(() => {
                            setPreviewFadingOut(true);
                            setTimeout(() => {
                                setShowPreview(false);
                                setPlaying(true); // Start playing muted
                            }, 500); // Wait for fade out animation
                        }, 3000); // Show preview for 3 seconds
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.5 }
        );

        const playerElement = playerRef.current.wrapper;
        if (playerElement) {
            observer.observe(playerElement);
        }

        return () => observer.disconnect();
    }, []);

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
                    {isMobile ?
                        <S.ContentHeader>
                            One task.
                            One AI Agent. <br />
                            <span>Infinite Possibilities.</span>
                        </S.ContentHeader>
                        :
                        <S.ContentHeader>
                            One task. <br />
                            One AI Agent. <br />
                            <span>Infinite Possibilities.</span>
                        </S.ContentHeader>
                    }
                    <S.Img>
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                            <ReactPlayer
                                ref={playerRef}
                                src='/upstrima.mp4'
                                playing={playing}
                                loop={true}
                                muted={muted}
                                controls={true}
                                playsinline={true}
                                preload='auto'
                                width="100%"
                                height="100%"
                                style={{ objectFit: 'cover' }}
                                config={{
                                    file: {
                                        attributes: {
                                            preload: 'auto'
                                        }
                                    }
                                }}
                            />
                            {showPreview && (
                                <img 
                                    src={PrevImg} 
                                    alt="Preview"
                                    className={previewFadingOut ? 'fade-out' : ''}
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                        backgroundColor: '#000',
                                        zIndex: 2
                                    }}
                                    loading="lazy"
                                />
                            )}
                            {showPlayButton && (
                                <S.PlayButton onClick={handlePlayClick}>
                                    <S.PlayIcon>▶</S.PlayIcon>
                                    <S.PlayText>Click to play</S.PlayText>
                                </S.PlayButton>
                            )}
                        </div>
                        <S.TopLeft />
                        <S.TopRight />
                        <S.BottomLeft />
                        <S.BottomRight />
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