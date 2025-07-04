import styled from '@emotion/styled';
import backgroundImg from '../../img/oil-layer-4.jpg'

export const DrillingEngineeringSection = styled.section`
    padding-top: 185px;
    padding-bottom: 60px;
    background: url(${backgroundImg});
    background-size: cover;

    @media (max-width: 1024px) {
        padding-top: 0;
    }

    @media (max-width: 480px) {
        padding-top: 45px;
    }
`

export const Content = styled.div`
    position: relative;
    max-width: 1280px; 
    height: 875px;
    display: flex;
    margin: 0 auto;
    padding: 0 30px;

    @media (max-width: 1024px) {
        max-width: 600px; 
        padding: 0 20px;
        height: 445px;
    }

    @media (max-width: 480px) {
        height: 626px;
    }
`

export const Headline = styled.h2`
    width: 599px;
    color: var(--us_fill-white);
    font-family: "PP Nikkei Pacific";
    font-size: 58px;
    font-style: normal;
    font-weight: 300;
    line-height: 89%; 
    text-transform: uppercase;

    span {
        color: var(--us_fill-green);
    }

    @media (max-width: 1024px) {
        width: 260px;
        font-weight: 300;
        font-size: 26px;
        line-height: 89%;
        text-transform: uppercase;
    }

    @media (max-width: 480px) {
        display: none;
    }
`

export const HeadlineMob = styled.h2`
    display: none;

    @media (max-width: 480px) {
        display: block;
        width: 300px;
        color: var(--us_fill-white);
        font-family: "PP Nikkei Pacific";
        font-size: 26px;
        font-style: normal;
        font-weight: 300;
        line-height: 90%;
        text-transform: uppercase;
    }

    span {
        color: var(--us_fill-green);
    }
`

export const PathBlock = styled.div`
    position: absolute;
    padding-left: 495px;
    display: flex;
    flex-direction: column;
    gap: 78px;

    @media (max-width: 1024px) {
        padding-left: 85px;
        gap: 30px;
    }

    @media (max-width: 480px) {
        top: 129px;
        padding-left: 0;
        left: 50%;
        transform: translateX(-50%);
        gap: 30px;
    }
`

export const PathStart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 183px;
    gap: 20px;
    z-index: 52;

    @media (max-width: 1024px) {
        padding-left: 174px;
    }

    @media (max-width: 480px) {
        padding-left: 0;
        gap: 10px;
    }
`

export const PathStartTop = styled.p`
    color: var(--us_fill-white);
    text-align: center;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 109%; 
    text-transform: uppercase;

    @media (max-width: 480px) {
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; 
        letter-spacing: 0.3px;
    }
`

export const PathStartBottom = styled.p`
    padding-top: 50px;
    width: 147px;
    color: var(--us_fill-green);
    text-align: center;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;

    @media (max-width: 1024px) {
        padding-top: 35px;
        width: 83px;
        font-size: 15px;
        font-style: normal;
        font-weight: 300;
        line-height: 110%;
    }
`

export const PathList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 19px;
    padding-left: 8px;

    @media (max-width: 1024px) {
        padding-left: 92px;
        gap: 11px;
    }

    @media (max-width: 480px) {
        padding-left: 0;
        padding-right: 95px;
        gap: 21px;
    }
`

export const PathItem = styled.div`
    height: 60px;
    display: flex;
    gap: 30px;

    @media (max-width: 1024px) {
        height: 24px;
        gap: 15px;
    }
`

export const PathItemText = styled.p`
    width: 215px;
    text-align: right;
    color: ${({ isActive }) => 
        (isActive ? 'var(--us_fill-white)' : 'var(--us_fill-grey)')};
    font-family: "JetBrains Mono";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; 
    transition: all .3s ease;

    @media (max-width: 1024px) {
        width: 102px;
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; 
    }

    @media (max-width: 480px) {
        width: 102px;
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; 
    }
`

export const PathCircle = styled.svg`
    padding-top: 7px;
    width: 16px;
    height: 16px;
    z-index: 50;

    circle:first-of-type {
        fill: ${({ isActive }) => 
        (isActive ? '#31ED37' : '#4E4E4E')};
        transition: all .3s ease;
    }

    @media (max-width: 1024px) {
        width: 15px;
        height: 15px;
        padding-top: 0;
    }
`

export const PathNumber = styled.p`
    color: ${({ isActive }) => 
        (isActive ? 'var(--us_fill-white)' : 'var(--us_fill-grey)')};
    text-align: center;
    font-family: "JetBrains Mono";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    transition: all .3s ease;

    @media (max-width: 1024px) {
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; 
    }
`

export const PathEnd = styled.p`
    position: absolute;
    bottom: -80px;
    right: 175px;
    color: var(--us_fill-grey);
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 109%;
    font-family: "PP Nikkei Pacific";
    text-transform: uppercase;

    @media (max-width: 1024px) {
        right: 12px;
        font-size: 10px;
        font-style: normal;     
        font-weight: 400;
        line-height: 120%; 
        letter-spacing: 0.3px;
        bottom: -38px;
    }

    @media (max-width: 480px) {
        font-size: 10px;
        font-style: normal;     
        font-weight: 400;
        line-height: 120%; 
        letter-spacing: 0.3px;
        bottom: -60px;
        left: 50%;
        right: auto;
        transform: translateX(-50%);
    }
`