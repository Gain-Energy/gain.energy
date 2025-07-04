import { useEffect, useRef } from "react";
import { useScroll } from '../contexts/ScrollProvider';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Cases from './Cases';
import ThirdGradient from '../Gradients/ThirdGradient';
import JoinButton from './JoinButton';
import * as S from './style';

gsap.registerPlugin(ScrollTrigger);

function UseCasesSection({name}) {
    const scrollToRef = useRef(null)
    const topRef = useRef(null)
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
            topRef.current,
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
                    trigger: topRef.current,
                    start: 'top-=30% 50%', 
                    toggleActions: 'play none none none', 
                    // markers: true
                },
            }
            
        )
    }, [name, registerSection])

    return (
        <S.UseCasesSection ref={scrollToRef} id="cases">
            <S.Top ref={topRef}> 
                <ThirdGradient/>
                <S.LogoHeadline>
                    <S.Logo width="257" height="78" viewBox="0 0 257 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M142.151 55.6348H138.113V37.3824L132.262 55.6348H126.763L120.911 37.3824V55.6348H116.873V33.5156H123.582L129.529 52.2621L135.443 33.5156H142.151V55.6348ZM159.905 47.1275L156.091 36.6402L152.308 47.1275H159.905ZM161.178 50.623H151.035L149.223 55.6348H144.867L153.388 33.5156H158.857L167.346 55.6348H162.991L161.178 50.623ZM0 51.8304V33.5156H4.07093V51.1795C4.07093 51.49 4.13388 51.7056 4.26183 51.8304C4.38825 51.9537 4.59963 52.0156 4.89801 52.0156H13.8634C14.1597 52.0156 14.3716 51.9537 14.4995 51.8304C14.626 51.7056 14.6899 51.49 14.6899 51.1795V33.5156H18.7593V51.8304C18.7593 52.8811 18.42 53.778 17.7424 54.5218C17.0647 55.264 16.0785 55.6348 14.7856 55.6348H3.97573C2.6829 55.6348 1.69665 55.264 1.01748 54.5218C0.339841 53.778 0 52.8811 0 51.8304ZM36.0339 44.3738C36.3302 44.3738 36.5416 44.3129 36.6696 44.1881C36.796 44.0649 36.86 43.8492 36.86 43.5393V38.0014C36.86 37.6726 36.796 37.4448 36.6696 37.3215C36.5416 37.1967 36.3093 37.1364 35.9694 37.1364H26.4319V44.3738H36.0339ZM22.3609 33.5156H36.732C38.0893 33.5156 39.1273 33.8865 39.8484 34.6302C40.569 35.3724 40.9294 36.2694 40.9294 37.3215V44.1881C40.9294 45.2403 40.59 46.1373 39.9124 46.8795C39.2348 47.6232 38.2485 47.9941 36.9557 47.9941H26.4319V55.6348H22.3609V33.5156ZM44.9179 52.0156H57.2213C57.5611 52.0156 57.7935 51.9537 57.9214 51.8304C58.0478 51.7056 58.1123 51.4793 58.1123 51.1491V47.0347C58.1123 46.4361 57.816 46.1373 57.2213 46.1373H48.0962C46.8034 46.1373 45.8171 45.7664 45.1395 45.0247C44.4619 44.281 44.122 43.384 44.122 42.3334V37.3215C44.122 36.2694 44.4828 35.3724 45.2035 34.6302C45.9246 33.8865 46.9631 33.5156 48.3199 33.5156H61.2594V37.1364H49.0825C48.4878 37.1364 48.1914 37.4245 48.1914 38.0014V41.7144C48.1914 42.0229 48.2559 42.2405 48.3823 42.3638C48.5108 42.4866 48.7222 42.5495 49.0185 42.5495H58.0478C59.3622 42.5495 60.3791 42.9203 61.1003 43.662C61.8214 44.4058 62.1817 45.3027 62.1817 46.3549V51.8304C62.1817 52.9029 61.8368 53.8049 61.1489 54.537C60.459 55.2685 59.4364 55.6348 58.0791 55.6348H44.9179V52.0156ZM72.7281 37.1364H65.5735V33.5156H83.952V37.1364H76.7974V55.6348H72.7281V37.1364ZM101.892 38.0014C101.892 37.6726 101.828 37.4448 101.702 37.3215C101.575 37.1967 101.341 37.1364 101.001 37.1364H91.4638V43.5088H101.066C101.362 43.5088 101.575 43.4464 101.702 43.3232C101.828 43.1983 101.892 42.9827 101.892 42.6723V38.0014ZM101.988 47.1275H101.32L105.899 55.6348H101.415L96.9008 47.1275H91.4638V55.6348H87.4569V33.5156H101.766C103.121 33.5156 104.161 33.8865 104.88 34.6302C105.602 35.3724 105.962 36.2694 105.962 37.3215V43.3232C105.962 44.3738 105.624 45.2708 104.944 46.0145C104.267 46.7567 103.28 47.1275 101.988 47.1275ZM109.111 33.5156H113.181V55.6348H109.111V33.5156Z" fill="#F9F6EF"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M223.494 0C196.786 84.2764 164.695 70.0287 175.297 11.1414H189.984C151.892 103.941 222.187 99.3627 257.004 0H223.494Z" fill="url(#paint0_linear_451_2409)"/>
                        <defs>
                            <linearGradient id="paint0_linear_451_2409" x1="173.219" y1="77.7523" x2="173.219" y2="0" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#00AAFF"/>
                                <stop offset="0.5" stopColor="#1DD59F"/>
                                <stop offset="1" stopColor="#39FF3F"/>
                            </linearGradient>
                        </defs>
                    </S.Logo>
                    <S.Headline>
                        Use Case Examples
                    </S.Headline>
                </S.LogoHeadline>
                <S.Text>
                    We start with specific use cases and build custom AI/ML solutions or agents to solve each of them impeccably. Users can expand that list by adding their own AI Agents to execute any other tasks. 
                </S.Text>
            </S.Top>
            <Cases/>
            <S.JoinButtonContainer>
                <JoinButton />
            </S.JoinButtonContainer>
        </S.UseCasesSection>
    )
}

export default UseCasesSection;