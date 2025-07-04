import { useState, useEffect, useRef } from 'react';
import { useScroll } from '../contexts/ScrollProvider';
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useMediaQuery } from "react-responsive";
import partner1 from '../../img/partner-1.svg';
import partner2 from '../../img/partner-2.svg';
import partner3 from '../../img/partner-3.svg';
import partner1mob from '../../img/partner-1-mob.svg'
import partner2mob from '../../img/partner-2-mob.svg'
import partner3mob from '../../img/partner-3-mob.svg'
import * as S from './style';

import news from '../../data/news';

gsap.registerPlugin(ScrollTrigger);

function PartnersAndNewsSection() {
    const [isVisible, setIsVisible] = useState(true)
    const isMobile = useMediaQuery({ query: "(max-width: 480px)" })
    const isTablet = useMediaQuery({ query: "(max-width: 1024px)" })
    const [currentSlide, setCurrentSlide] = useState(0)
    const [sliderRef, instanceRef] = useKeenSlider({
        slides: {
            perView: 1.2,
            spacing: 40,
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        breakpoints: {
            "(max-width: 1024px)": {
                slides: {
                    perView: 1.2,
                    spacing: 10,
                },
            },
            "(max-width: 480px)": {
                slides: {
                    perView: 'auto',
                    spacing: 30,
                },
            },
        },
    })

    const scrollToPartners = useRef(null)
    const partners = useRef(null)
    const scrollToNews = useRef(null)

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
        registerSection('Partners', scrollToPartners)
        registerSection('News', scrollToNews)

        gsap.fromTo(
            partners.current,
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
                    trigger: partners.current,
                    start: 'top-=30% 50%',
                    toggleActions: 'play none none none',
                    // markers: true
                },
            }
        )

        gsap.fromTo(
            scrollToNews.current,
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
                    trigger: scrollToNews.current,
                    start: 'top-=30% 50%',
                    toggleActions: 'play none none none',
                    // markers: true
                },
            }
        )
    }, [registerSection])

    useEffect(() => {
        if (!isMobile) {
            function handleResize() {
                setIsVisible(false)
                setTimeout(() => {
                    setIsVisible(true);
                }, 0)
            }

            window.addEventListener('resize', handleResize)

            return () => {
                window.removeEventListener('resize', handleResize)
            }
        }
    }, [instanceRef, isMobile])

    const handlePrev = () => {
        if (instanceRef.current) {
            instanceRef.current.prev()
        }
    }

    const handleNext = () => {
        if (instanceRef.current) {
            instanceRef.current.next()
        }
    }

    return (
        <S.PartnersAndNewsSection ref={scrollToPartners}>
            <S.PartnersBlock ref={partners}>
                <S.PartnersHeadline>Our Partners</S.PartnersHeadline>
                <S.PartnersShowcase>
                    <img src={isTablet ? partner1mob : partner1} alt="Партнер 1" />
                    <img src={isTablet ? partner2mob : partner2} alt="Партнер 2" />
                    <img src={isTablet ? partner3mob : partner3} alt="Партнер 3" />
                </S.PartnersShowcase>
            </S.PartnersBlock>
            <S.NewsBlock ref={scrollToNews}>
                <S.LeftSide>
                    <S.NewsHeadline>News</S.NewsHeadline>
                    <S.NewsNavigation>
                        <S.LeftButton onClick={handlePrev}>
                            <svg xmlns="http://www.w3.org/2000/svg" width={isTablet ? "7" : "12"} height={isTablet ? "10" : "17"} viewBox="0 0 12 17" fill="none">
                                <path d="M3.40949e-07 8.5L12 5.7161e-07L12 17L3.40949e-07 8.5Z" fill="#070707" />
                            </svg>
                        </S.LeftButton>
                        <S.RightButton onClick={handleNext}>
                            <svg xmlns="http://www.w3.org/2000/svg" width={isTablet ? "7" : "12"} height={isTablet ? "10" : "17"} viewBox="0 0 12 17" fill="none">
                                <path d="M12 8.5L2.71777e-07 5.7161e-07L9.53674e-07 17L12 8.5Z" fill="#070707" />
                            </svg>
                        </S.RightButton>
                    </S.NewsNavigation>
                </S.LeftSide>
                <S.Pagination>
                    {news.map((item, index) => (
                        <S.PaginationItem
                            key={index}
                            isActive={index === currentSlide}
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="7.5" cy="7.5" r="7.5" fill="#4E4E4E" />
                            <circle cx="7.5" cy="7.5" r="5.625" fill="#070707" />
                        </S.PaginationItem>
                    ))}
                </S.Pagination>
                <S.RightSide>
                    {isVisible &&
                        <S.NewsShowcase ref={sliderRef} className="keen-slider">
                            {news.map((item, index) =>
                                <S.NewsItem
                                    key={index}
                                    className="keen-slider__slide"
                                    isActive={index === currentSlide}
                                >
                                    <div
                                        style={{ aspectRatio: "1920/1080", display: 'flex', alignItems: "center", overflow: "hidden" }}
                                    >
                                        <S.NewsItemImg
                                            isActive={index === currentSlide}
                                            src={item.imageSrc}
                                            alt='News image'
                                        />
                                    </div>
                                    <S.NewsItemHeadline>
                                        {item.date}
                                    </S.NewsItemHeadline>
                                    <S.NewsItemText
                                        dangerouslySetInnerHTML={{ __html: item?.text }}
                                        isActive={index === currentSlide}
                                    >
                                        {/* {item.text} */}
                                    </S.NewsItemText>
                                </S.NewsItem>
                            )}
                        </S.NewsShowcase>
                    }
                </S.RightSide>
            </S.NewsBlock>
        </S.PartnersAndNewsSection>
    )
}

export default PartnersAndNewsSection;