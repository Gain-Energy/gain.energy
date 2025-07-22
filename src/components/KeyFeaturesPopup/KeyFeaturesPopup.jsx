import { useState, useEffect } from 'react';
import { usePopup } from '../contexts/PopupProvider';
import { useMediaQuery } from "react-responsive";
import * as S from './style';

const ClipPathSVG = ({ id, pathData }) => (
    <svg width="0" height="0" className="svg">
        <clipPath id={id} clipPathUnits="objectBoundingBox">
            <path d={pathData} />
        </clipPath>
    </svg>
);

function KeyFeaturesPopup({activeFeature}) {
    const pathDataDesktop = "M1,0 V1 H0 V0.1 H0.354 C0.362,0.1,0.371,0.095,0.379,0.086 L0.434,0.015 C0.441,0.005,0.45,0,0.459,0 H1"
    const pathDataTablet = "M0.455,0.001 H1 V1 H0.001 L0.001,0.071 H0.238 C0.283,0.071,0.324,0.053,0.36,0.036 C0.379,0.027,0.396,0.018,0.411,0.012 C0.427,0.005,0.442,0.001,0.455,0.001"
    const pathDataMobile = "M0.436,0.001 H1 V1 H0.002 L0.002,0.074 H0.119 C0.185,0.074,0.245,0.056,0.298,0.037 C0.324,0.028,0.349,0.019,0.372,0.012 C0.395,0.005,0.417,0.001,0.436,0.001"

    const { popupOpen, togglePopup } = usePopup()
    const [activeImg, setActiveImg] = useState(0)

    const handlePrev = () => {
        if (activeImg > 0) {
            setActiveImg(activeImg - 1)
        }
    }

    const handleNext = () => {
        if (activeImg < activeFeature.imageSrc.length - 1) {
            setActiveImg(activeImg + 1)
        }
    }

    const isMobile = useMediaQuery({ query: "(max-width: 480px)" })
    const isTablet = useMediaQuery({ query: "(max-width: 1024px)" })

    useEffect(() => {
            if (popupOpen) {
                document.body.style.overflowY = 'hidden';
                document.documentElement.style.overflowY = 'hidden';
            } else {
                document.body.style.overflowY = 'auto';
                document.documentElement.style.overflowY = 'auto';
            }
            return () => {
                document.body.style.overflowY = 'auto';
                document.documentElement.style.overflowY = 'auto';
            };
        }, [popupOpen]);

    return (
        <S.Wrapper>
            <S.CloseButton onClick={togglePopup}>
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.21837 0.723799C3.25336 -0.241266 1.68877 -0.241266 0.723758 0.723799C-0.241253 1.68886 -0.241253 3.25354 0.723758 4.21861L17.5056 21.0014L0.726485 37.7814C-0.238527 38.7465 -0.238525 40.3111 0.726485 41.2762C1.6915 42.2413 3.25609 42.2413 4.2211 41.2762L21.0002 24.4962L37.7789 41.2758C38.7439 42.2409 40.3085 42.2409 41.2735 41.2758C42.2385 40.3108 42.2385 38.7461 41.2735 37.781L24.4948 21.0014L41.2762 4.21898C42.2413 3.25392 42.2413 1.68924 41.2762 0.724172C40.3112 -0.240893 38.7466 -0.240893 37.7816 0.724172L21.0002 17.5066L4.21837 0.723799Z" fill="#070707" />
                </svg>
            </S.CloseButton>
            <ClipPathSVG id="inner" pathData={isTablet ? pathDataTablet : isMobile ? pathDataMobile : pathDataDesktop} />
            <ClipPathSVG id="outer" pathData={isTablet ? pathDataTablet : isMobile ? pathDataMobile : pathDataDesktop} />
            <S.Inner>
                <S.InnerLeft>
                    <S.Text>{activeFeature.text}</S.Text>
                    <S.Navigation>
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
                    </S.Navigation>
                </S.InnerLeft>
                <S.InnerRight>
                    <S.Heading>{activeFeature.headerPopup}</S.Heading>
                    <S.ImageWrapper>
                        <S.Image src={activeFeature.imageSrc[activeImg]}/>
                    </S.ImageWrapper>
                    <S.ImagePreviewBlock>
                        {activeFeature.imageSrc.map((item, index) => (
                            <S.ImagePreview 
                                key={index} 
                                src={item} 
                                onClick={() => setActiveImg(index)}
                                isActive={activeImg === index}
                            />
                        ))}
                    </S.ImagePreviewBlock>
                </S.InnerRight>
            </S.Inner>
            <S.Outer />
        </S.Wrapper>
    )
}

export default KeyFeaturesPopup;