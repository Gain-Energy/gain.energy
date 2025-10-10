import styled from '@emotion/styled';

export const OurPerspectiveSection = styled.section`
    position: relative;
    margin-top: 243px;
    padding: 40px 0 60px 0;
    background: #000;
    background-size: cover;

    @media (max-width: 1024px) {
        margin-top: 0;
    }

    @media (max-width: 480px) {
        margin-top: 0;
        padding: 53px 0 60px 0;
    }
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1280px; 
    gap: 140px;
    margin: 0 auto;
    padding-left: 30px;
    padding-right: 30px;
    
    @media (max-width: 1024px) {
        gap: 0;
        max-width: 600px; 
        padding-left: 20px;
        padding-right: 20px;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        gap: 30px;
    }
`

export const HeaderImg = styled.div`
    display: flex;
    flex-direction: column;
    width: 501px;
    gap: 47px;

    @media (max-width: 1024px) {
        width: 260px;
    }

    @media (max-width: 480px) {
        gap: 30px;
        width: 100%;
    }
`

export const ContentHeader = styled.h2`
    width: 428px;
    color: var(--us_fill-white);
    leading-trim: both;
    text-edge: cap;
    font-family: "PP Nikkei Pacific";
    font-size: 58px;
    font-style: normal;
    font-weight: 300;
    line-height: 89%; 
    text-transform: uppercase;

    span {
        color: var(--us_fill-green);
        white-space: nowrap;
    }

    @media (max-width: 1024px) {
        font-size: 26px;
        font-style: normal;
        font-weight: 300;
        line-height: 90%;
    }
`

export const Img = styled.div`
    position: relative;
    width: 501px;
    aspect-ratio: 16/9;
    overflow: hidden;
    
    video {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        object-fit: cover;
    }

    @media (max-width: 1024px) {
        width: 100%;
    }

    @media (max-width: 480px) {
        width: 100%;
    }
`

export const PlayButton = styled.button`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.7);
    border: 2px solid var(--us_fill-green);
    border-radius: 10px;
    padding: 15px 20px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease;
    z-index: 15;

    &:hover {
        background: rgba(0, 0, 0, 0.9);
        transform: translate(-50%, -50%) scale(1.05);
    }

    @media (max-width: 480px) {
        padding: 10px 15px;
        gap: 5px;
    }
`

export const PlayIcon = styled.span`
    color: var(--us_fill-green);
    font-size: 24px;
    font-weight: bold;

    @media (max-width: 480px) {
        font-size: 18px;
    }
`

export const PlayText = styled.span`
    color: var(--us_fill-white);
    font-family: "JetBrains Mono";
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;

    @media (max-width: 480px) {
        font-size: 14px;
    }
`

export const PreviewOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #1a4a72 0%, #2d5aa0 30%, #4472b8 60%, #5b8dd1 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 5;
    transition: opacity 0.5s ease;

    &.fade-out {
        opacity: 0;
    }
`

export const PreviewLogo = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    color: var(--us_fill-white);
    font-family: "PP Nikkei Pacific";
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 2px;

    @media (max-width: 1024px) {
        top: 15px;
        right: 15px;
        font-size: 12px;
    }

    @media (max-width: 480px) {
        top: 10px;
        right: 10px;
        font-size: 12px;
    }
`

export const PreviewTitle = styled.h3`
    color: var(--us_fill-white);
    font-family: "PP Nikkei Pacific";
    font-size: 36px;
    font-weight: 300;
    line-height: 110%;
    text-align: center;
    text-transform: uppercase;
    max-width: 80%;

    span {
        color: var(--us_fill-green);
    }

    @media (max-width: 1024px) {
        font-size: 24px;
        max-width: 90%;
    }

    @media (max-width: 480px) {
        font-size: 18px;
        max-width: 95%;
    }
`

export const TopLeft = styled.div`
    position: absolute;
    width: 15px; 
    height: 15px;
    border: 2px solid var(--us_fill-green);
    top: 15px;
    left: 15px;
    border-right: none;
    border-bottom: none;

    @media (max-width: 1024px) {
        width: 8px; 
        height: 8px;
        top: 7px;
        left: 7px;
    }
`

export const TopRight = styled.div`
    position: absolute;
    width: 15px; 
    height: 15px;
    border: 2px solid var(--us_fill-green);
    top: 15px;
    right: 15px;
    border-left: none;
    border-bottom: none;

    @media (max-width: 1024px) {
        width: 8px; 
        height: 8px;
        top: 7px;
        right: 7px;
    }
`

export const BottomLeft = styled.div`
    position: absolute;
    width: 15px; 
    height: 15px;
    border: 2px solid var(--us_fill-green);
    bottom: 15px;
    left: 15px;
    border-top: none;
    border-right: none;

    @media (max-width: 1024px) {
        width: 8px; 
        height: 8px;
        bottom: 7px;
        left: 7px;
    }
`

export const BottomRight = styled.div`
    position: absolute;
    width: 15px; 
    height: 15px;
    border: 2px solid var(--us_fill-green);
    bottom: 15px;
    right: 15px;
    border-top: none;
    border-left: none;

    @media (max-width: 1024px) {
        width: 8px; 
        height: 8px;
        bottom: 7px;
        right: 7px;
    }
`

export const PerspectivesBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-top: 82px;
    gap: 60px 99px;

    @media (max-width: 1024px) {
        max-width: 260px;
        padding-top: 46px;
        gap: 40px 20px;
    }

    @media (max-width: 480px) {
        padding-top: 0;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 15px;
        row-gap: 30px;
    }
`

export const Perspective = styled.div`
    width: 270px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 1024px) {
        width: 120px;
        gap: 15px;
    }

    @media (max-width: 480px) {
        width: 100%;
        gap: 15px;
    }
`

export const PerspectiveHeader = styled.h3`
    align-self: stretch;
    color: var(--us_fill-green);
    font-family: "PP Nikkei Pacific";
    font-size: 28px;
    font-style: normal;
    font-weight: 300;
    line-height: 110%; 

    @media (max-width: 1024px) {
        font-size: 16px;
        font-style: normal;
        font-weight: 300;
        line-height: 130%;
    }
`

export const PerspectiveText = styled.p`
    align-self: stretch;
    color: var(--us_fill-white);
    leading-trim: both;
    text-edge: cap;
    font-family: "JetBrains Mono";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; 

    @media (max-width: 1024px) {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
    }
`