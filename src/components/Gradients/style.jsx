import styled from '@emotion/styled';

export const FirstGradient = styled.svg`
    position: absolute;
    top: -30px;
    left: -130px;
    width: 870px;
    height: 870px;
    filter: blur(40px);

    @media (max-width: 1024px) {
        top: 145px;
        left: -104px;
        width: 474px;
        height: 321px;
        filter: blur(10px);
    }

    @media (max-width: 480px) {
        top: 165px;
        left: -15px;
        width: 370px;
        height: 370px;
        filter: blur(10px);
    }
`

export const SecondGradient = styled.svg`
    position: absolute;
    top: -30px;
    right: -130px;
    width: 870px;
    height: 870px;
    filter: blur(40px);

    @media (max-width: 1024px) {
        top: -164px;
        right: -148px;
        width: 639px;
        height: 650px;
        filter: blur(10px);
    }

    @media (max-width: 480px) {
        top: 90px;
        right: -80px;
        width: 370px;
        height: 370px;
        filter: blur(10px);
    }
`

export const ThirdGradient = styled.svg`
    position: absolute;
    top: -670px;
    left: -80px;
    width: 1220px;
    height: 1500px;
    z-index: 1;
    filter: blur(10px);

    @media (max-width: 480px) {
        top: -350px;
        left: -100px;
        width: 700px;
        height: 700px;
    }
`

export const FooterGradient = styled.svg`
    position: absolute;
    top: 0;
    right: 0;
    
`