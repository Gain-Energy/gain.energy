import styled from '@emotion/styled';
import backgroundImg from '../../img/man-at-work.jpg'

export const FirstSection = styled.section`
    position: relative;
    width: 100%;
    height: 627px;
    background-image: url(${backgroundImg});
    background-size: cover;
    background-position-y: bottom;

    @media (max-width: 1024px) {
        height: 483px;
        background-position-x: 45%;
        background-position-y: -95px;
        background-size: 150%;
    }

    @media (max-width: 815px) {
        background-position-y: -95px;
        background-size: 180%;
    }

    @media (max-width: 640px) {
        background-size: 230%;
    }

    @media (max-width: 480px) {
        height: 627px;
        background-position-x: 45%;
        background-position-y: -95px;
        background-size: 250%;
    }
`

export const BlackOverlay = styled.div`
    position: absolute;
    top: 437px;
    background: #000;
    width: 100%;
    height: 433px;
    mask-image: linear-gradient(to bottom, transparent 0%, black 25%);
    mask-size: 100% 100%;
    mask-repeat: no-repeat;

    @media (max-width: 1024px) {
        top: 50px;
        mask-image: linear-gradient(to bottom, transparent 0%, black 75%);
    }

    @media (max-width: 480px) {
        top: 194px;
        mask-image: linear-gradient(to bottom, transparent 0%, black 25%);
    }
`

export const Content = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    padding-top: 400px;
    max-width: 1280px; 
    margin: 0 auto;
    padding-left: 30px;
    padding-right: 30px;

    @media (max-width: 1024px) {
        max-width: 600px;
        padding-top: 169px;
        margin: 0 auto;
        padding-left: 20px;
        padding-right: 20px;
        justify-content: space-between;
    }

    @media (max-width: 480px) {
        padding-top: 235px;
        flex-direction: column;
    }
`

export const ContentLeft = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 1;
    gap: 50px;

    @media (max-width: 1024px) {
        gap: 20px;
    }

    @media (max-width: 480px) {
        align-items: baseline;
        width: 100%;
        gap: 40px;
    }
`

export const ContentHeader = styled.h1`
    width: 641px;
    color: var(--us_fill-white);
    leading-trim: both;
    text-edge: cap;
    font-family: "PP Nikkei Pacific";
    font-size: 58px;
    font-style: normal;
    font-weight: 300;
    line-height: 89%;
    text-transform: uppercase;

    @media (max-width: 1024px) {
        width: 300px;
        font-size: 26px;
        font-style: normal;
        font-weight: 300;
        line-height: 90%; 
    }

    @media (max-width: 480px) {
        width: 300px;
        font-size: 26px;
        font-style: normal;
        font-weight: 300;
        line-height: 90%; 
    }
`

export const ContentLogo = styled.svg`
    width: 386px;
    height: 117px;

    @media (max-width: 1024px) {
        width: 203px;
        height: 60px;
    }
`

export const ContentRight = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 143px;
    z-index: 1;
    gap: 20px;

    @media (max-width: 1024px) {
        padding-top: 89px;
        gap: 15px;
    }

    @media (max-width: 480px) {
        padding-top: 40px;
        gap: 10px;
    }
`

export const ContentRightHeader = styled.h3`
    width: 534px;
    color: var(--us_fill-white);
    font-family: "JetBrains Mono";
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: 130%; 
    text-transform: uppercase;

    @media (max-width: 1024px) {
        width: 300px;
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        line-height: 130%;
    }
`

export const ContentRightText = styled.p`
    width: 446px;
    color: var(--us_fill-white);
    leading-trim: both;
    text-edge: cap;
    font-family: "JetBrains Mono";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; 

    @media (max-width: 1024px) {
        width: 300px;
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
    }
`

export const Arrow = styled.svg`
    position: absolute;
    top: 150px;
    width: 12px;
    height: 17px;
    left: -32px;

    @media (max-width: 1024px) {
        width: 7px;
        height: 10px;
        top: 95px;
        left: -20px;
    }

    @media (max-width: 480px) {
        width: 7px;
        height: 10px;
        top: 44px;
        left: -18px;
    }
`

export const OilDerrick = styled.svg`
    position: absolute;
    bottom: 58px;
    width: 42px;
    height: 63px;
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: 1024px) {
        width: 28px;
        height: 41px;
        bottom: 54px;
    }

    @media (max-width: 480px) {
        width: 22px;
        height: 34px;
        left: 15px;
        bottom: 45px;
    }
`

export const OilDerrickLineContainer = styled.div`
    position: absolute;
    bottom: 37px;
    left: 50%;
    transform: translateX(-50%);
    max-width: 1540px;
    width: calc(100% - 60px); 
    height: 22px;
    box-sizing: border-box;
    padding: 0 30px; 

    @media (max-width: 480px) {
        display: none;
    }
`

export const OilDerrickLine = styled.svg`
    width: 100%;
    height: 100%;
`

export const OilDerrickLineMob = styled.svg`
    display: none;

    @media (max-width: 480px) {
        display: block;
        position: absolute;
        bottom: 37px;
        left: 0;
    }
`

export const StartDrillingsInscription = styled.p`
    position: absolute;
    bottom: 7px;
    left: 50%;
    transform: translateX(calc(-50% - 65px));
    width: 74px;
    color: var(--us_fill-white);
    text-align: right;
    font-family: "JetBrains Mono";
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; 
    text-transform: uppercase;

    @media (max-width: 480px) {
        width: auto;
        bottom: 20px;
        left: 56px;
        transform: none;
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%;
        text-transform: lowercase;
    }
`

export const ArrowDrillings = styled.svg`
    position: absolute;
    bottom: 12px;
    right: 50%;
    transform: translateX(calc(-50% + 55px));
    width: 16px;
    height: 26px;

    @media (max-width: 480px) {
        bottom: 22px;
        left: 30px;
        right: auto;
        transform: none;
        width: 11px;
        height: 17px;
    }
`