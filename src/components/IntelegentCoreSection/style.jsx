import styled from '@emotion/styled';

export const IntelegentCoreSection = styled.section`
    background: #070707;
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

export const BigText = styled.p`
    position: absolute;
    top: 359px;
    width: 428px;
    color: var(--us_fill-white);
    font-family: "PP Nikkei Pacific";
    font-size: 32px;
    font-style: normal;
    font-weight: 300;
    line-height: 120%; 
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

export const Text = styled.p`
    width: 563px;
    color: var(--us_fill-white);
    font-family: "JetBrains Mono";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; 
    z-index: 3;

    span {
        color: var(--us_fill-green);
    }

    @media (max-width: 1024px) {
        width: 230px;
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%;
    }

    @media (max-width: 480px) {
        padding-top: 200px;
        width: 100%;
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
    }
`