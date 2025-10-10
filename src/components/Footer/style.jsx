import styled from '@emotion/styled';

export const Footer = styled.footer`
    position: relative;
    background: #070707;
`

export const Content = styled.div`
    position: relative;
    overflow: visible;
    display: flex;
    max-width: 1280px;
    margin: 0 auto;
    padding: 39px 30px 11px 30px;

    @media (max-width: 1024px) {
        max-width: 600px;
        padding: 39px 20px 11px 20px;
        gap: 50px;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        padding: 45px 30px 15px 30px;
        gap: 30px;
    }
`

export const FooterGradient = styled.img`
    position: absolute;
    width: 100%;
    height: 200%;
    bottom: 0;
    right: 0;
    pointer-events: none;

    @media (max-width: 1024px) {
        width: 250%;
        height: 150%;
    }

    @media (max-width: 480px) {
        width: 250%;
        height: 150%;
    }
`

export const ContactUsBlock = styled.div`    
    display: flex;
    flex-direction: column;
`

export const ContactUsHeadline = styled.h2`
    width: 301px;
    padding-top: 11px;   
    color: var(--us_fill-white);
    font-family: "PP Nikkei Pacific";
    font-size: 58px;
    font-style: normal;
    font-weight: 300;
    line-height: 89%; 
    text-transform: uppercase;

    @media (max-width: 1024px) {
        width: 142px;
        font-size: 26px;
        font-style: normal;
        font-weight: 300;
        line-height: 89%;
    }
`

export const ContactUsSubline = styled.h2`
    width: 301px;
    padding-top: 11px;   
    color: var(--us_fill-white);
    font-family: "PP Nikkei Pacific";
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: 140%; 

    @media (max-width: 1024px) {
        width: 142px;
        font-size: 20px;
        font-style: normal;
        font-weight: 300;
        line-height: 140%;
    }

    @media (max-width: 480px) {
        width: 100%;
    }
`

export const LinkItemsBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 480px) {
        gap: 10px;
    }
`

export const LinkItem = styled.svg`
    cursor: pointer;
    width: 70px;
    height: 70px;

    path {
        transition: fill 0.3s ease;
    }

    &:hover path {
        fill: #31ED37; 
    }

    @media (max-width: 1024px) {
        width: 50px;
        height: 50px;
    }

    @media (max-width: 480px) {
        width: 40px;
        height: 40px;
    }
`

export const NavigationBlock = styled.div`
    display: flex;
    margin-left: 83px;

    @media (max-width: 1024px) {
        margin-left: 0;
    }
`

export const NavigationHeadline = styled.p`
    padding-top: 40px;
    padding-left: 138px;
    color: var(--us_fill-white);
    font-family: "PP Nikkei Pacific";
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: 105%; 

    @media (max-width: 1024px) {
        display: none;
    }
`

export const NavigationList = styled.div`
    display: flex;
    padding-left: 38px;
    flex-direction: column;
    padding-top: 46px;
    gap: 10px;
    width: 87px;

    @media (max-width: 1024px) {
        padding-top: 0;
    }

    @media (max-width: 480px) {
        padding-left: 118px;
        padding-top: 0;
    }
`

export const NavigationLink = styled.a`
    cursor: pointer;
    text-wrap: nowrap;
    color: var(--us_fill-white, #F9F6EF);
    font-family: "PP Nikkei Pacific";
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 105%; 
    text-decoration: none;
    transition: color 0.3s ease;

    :hover { 
        color: var(--us_fill-green);
    }

    @media (max-width: 1024px) {
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        line-height: 130%;
    }

    @media (max-width: 480px) {
        font-size: 12px;
        font-style: normal;
        font-weight: 300;
        line-height: 130%;
    }
`

export const LogoAndCopyright = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 304px;
    padding-top: 12px;

    @media (max-width: 1640px) {
        margin-left: 280px;
    }

    @media (max-width: 1600px) {
        margin-left: 260px;
    }

    @media (max-width: 1560px) {
        margin-left: 240px;
    }

    @media (max-width: 1640px) {
        margin-left: 280px;
    }

    @media (max-width: 1600px) {
        margin-left: 260px;
    }

    @media (max-width: 1560px) {
        margin-left: 240px;
    }

    @media (max-width: 1520px) {
        margin-left: 220px;
    }

    @media (max-width: 1480px) {
        margin-left: 200px;
    }

    @media (max-width: 1440px) {
        margin-left: 180px;
    }

    @media (max-width: 1024px) {
        margin-left: 0;
        padding-top: 0;
    }

    @media (max-width: 480px) {
        margin-left: 0;
        padding-top: 0;
    }
`

export const Logo = styled.svg`
    width: 172px;
    height: 47px;

    @media (max-width: 1024px) {
        width: 112px;
        height: 30px;
    }

    @media (max-width: 480px) {
        width: 72px;
        height: 20px;
    }
`

export const Copyright = styled.p`
    width: 308px;
    padding-top: 220px;
    color: var(--us_fill-bg);
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; 

    @media (max-width: 1024px) {
        width: 300px;
        padding-top: 150px;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
    }

    @media (max-width: 480px) {
        width: 300px;
        padding-top: 15px;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
    }
`