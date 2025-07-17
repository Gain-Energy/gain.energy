import styled from '@emotion/styled';
import backgroundImg from '../../img/oil-layer-3.png'

export const IntelegentCoreSection = styled.section`
    position: relative;
    background: #070707;

    ::before {
        content: "";
        position: absolute;
        top: 0;
        left: -15%;
        width: 100%;
        height: 100%;
        background: url(${backgroundImg});
        background-size: cover;
        z-index: 0;
    }

    ::after {
        content: "";
        position: absolute;
        top: 0;
        left: 44%;
        transform: translateX(-50%);
        width: 80px;
        height: 100%;
        background: #070707;
        mask-image: linear-gradient(to right, transparent 0%, black 85%);
        mask-size: 100% 100%;
        mask-repeat: no-repeat;
        z-index: 0;
    }
`

export const Content = styled.div`
    position: relative;
    max-width: 1280px; 
    display: flex;
    gap: 331px;
    margin: 0 auto;
    padding: 107px 30px 106px 30px;

    @media (max-width: 1024px) {
        max-width: 600px; 
        padding: 50px 20px 0 20px;
        gap: 0;
        justify-content: space-between;
    }

    @media (max-width: 480px) {
        padding: 100px 30px 45px 30px;
        flex-direction: column;
        gap: 0;
    }
`

export const LeftContent = styled.div`
    width: 318px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const RightContent = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    gap: 30px 29px;
`

export const Logo = styled.svg`
    width: 257px;
    height: 78px;

    @media (max-width: 1024px) {
        width: 143px;
        height: 42px;
    }
`

export const BackgroundImg = styled.img`
    position: absolute;
    top: 0;
    left: -80px;
    width: 115%;
    height: 100%;
    z-index: 2;

    @media (max-width: 1024px) {
        top: 10px;
        left: -40px;
        width: 700px;
        height: 180px;
    }

    @media (max-width: 480px) {
        top: 145px;
        left: -260px;
        width: 1200px;
        height: 340px;
    }
`

export const Headline = styled.h2`
    width: 386px;
    color: var(--us_fill-white);
    font-family: "PP Nikkei Pacific";
    font-size: 58px;
    font-style: normal;
    font-weight: 300;
    line-height: 89%; 
    text-transform: uppercase;
    z-index: 3;

    @media (max-width: 1024px) {
        width: 143px;
        font-size: 26px;
        font-style: normal;
        font-weight: 300;
        line-height: 90%;
    }
`

export const RightHeader = styled.p`
    width: 100%;
    font-family: "PP Nikkei Pacific";
    font-weight: 300;
    font-size: 28px;
    line-height: 110%;
    color: var(--us_fill-green);
`

export const AdvantagesList = styled.ul`
    width: 310px;
    color: var(--us_fill-white);
    font-family: "JetBrains Mono";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    list-style: none;
    display: flex;
    gap: 15px;
    flex-direction: column;
    text-wrap: wrap;

    li {
        position: relative;
        padding-left: 15px;
    }
        
    li::before {
        content: "•"; 
        position: absolute;
        left: 0;
        top: 0;
        font-size: 15px;
        color: var(--us_fill-white);
    }

    @media (max-width: 1024px) {
        width: 260px;
        gap: 10px;
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%; 
    }
`

export const BigText = styled.p`
    width: 292px;
    font-family: "Inter";
    font-weight: 400;
    font-size: 24px;
    line-height: 120%;
    color: var(--us_fill-green);
    z-index: 3;

    @media (max-width: 1024px) {
        top: 185px;
        width: 260px;
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        line-height: 120%; 
    }

    @media (max-width: 480px) {
        position: static;
        padding-top: 20px;
        width: 300px;
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        line-height: 120%; 
    }
`

export const ChipImg = styled.img`
    position: absolute;
    top: 195px;
    right: -50px;
    width: 431px;
    height: 377px;
    z-index: -1;
`