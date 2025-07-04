import styled from '@emotion/styled';
import backgroundImg from '../../img/oil-layer-1.jpg'

export const OurProductsSection = styled.section`
    padding-top: 60px;
    background: url(${backgroundImg});
    background-size: cover;

    @media (max-width: 1024px) {
        padding-top: 50px;
    }

    @media (max-width: 480px) {
        padding-top: 60px;
    }
`

export const Top = styled.div`
    display: flex;
    gap: 341px;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 30px 80px 30px;

    @media (max-width: 1024px) {
        max-width: 600px;
        padding: 0 20px 80px 20px;
        gap: 0;
        justify-content: space-between;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        gap: 30px;
        padding: 0 30px 30px 30px;
    }
`

export const Headline = styled.h2`
    color: var(--us_fill-white);
    font-family: "PP Nikkei Pacific";
    font-size: 58px;
    font-style: normal;
    font-weight: 300;
    line-height: 89%; 
    text-transform: uppercase;

    @media (max-width: 1024px) {
        width: 168px;
        font-weight: 300;
        font-size: 26px;
        line-height: 89%;
        text-transform: uppercase;
    }

    @media (max-width: 480px) {
        width: 143px;
        font-size: 26px;
        font-style: normal;
        font-weight: 300;
        line-height: 90%;
    }
`

export const TopText = styled.p`
    width: 563px;
    padding-top: 16px;
    color: var(--us_fill-white);
    font-size: 32px;
    font-style: normal;
    font-weight: 300;
    line-height: 120%;

    @media (max-width: 1024px) {
        padding-top: 30px;
        width: 230px;
        font-weight: 300;
        font-style: normal;
        font-size: 14px;
        line-height: 120%;
    }

    @media (max-width: 480px) {
        padding-top: 0;
        width: 300px;
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        line-height: 120%;
    }
`

export const Content = styled.div`
    max-width: 1280px;
    display: flex;
    gap: 344px;
    margin: 0 auto;
    padding: 0 30px;

    @media (max-width: 1024px) {
        max-width: 600px;
        padding: 0 20px;
        gap: 195px;
        justify-content: space-between;
    }

    @media (max-width: 480px) {
        display: none;
    }
`

export const ContentHeadline = styled.h3`
    width: 257px;
    color: var(--us_fill-white);
    opacity: ${({ isActive }) => 
        (isActive ? '1' : '0.3')};
    font-family: "PP Nikkei Pacific";
    font-size: 22px;
    font-style: normal;
    font-weight: 300;
    line-height: 70%; 
    text-transform: uppercase;
    transition: opacity .3s ease;

    @media (max-width: 1024px) {
        width: 143px;
        font-size: 10px;
        font-style: normal;
        font-weight: 300;
        line-height: 110%;
    }
`

export const Logo = styled.svg`
    width: 257px;
    height: 78px;

    @media (max-width: 1024px) {
        width: 143px;
        height: 42px;
    }
`

export const ContentRight = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;

    @media (max-width: 480px) {
        gap: 30px;
    }
`

export const Advantages = styled.div`
    display: flex;
    gap: 59px;
    padding-left: 40px;

    @media (max-width: 1024px) {
        flex-direction: column;
        gap: 40px;
        padding-left: 0;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        padding-left: 0;
        gap: 30px;
    }
`

export const KeyBenefits = styled.div`
    display: flex;
    flex-direction: column;
    width: 310px;
    gap: 25px;

    @media (max-width: 1024px) {
        width: 260px;
        gap: 15px;
    }

    @media (max-width: 480px) {
        width: 100%;
        gap: 15px;
    }
`

export const PerfectFor = styled.div`
    display: flex;
    flex-direction: column;
    width: 270px;
    gap: 25px;

    @media (max-width: 1024px) {
        width: 2600px;
        gap: 15px;
    }

    @media (max-width: 480px) {
        width: 100%;
        gap: 15px;
    }
`

export const AdvantagesTitle = styled.h4`
    color: var(--us_fill-green);
    font-family: "PP Nikkei Pacific";
    font-size: 28px;
    font-style: normal;
    font-weight: 300;
    line-height: 110%; 

    @media (max-width: 1024px) {
        font-size: 15px;
        font-style: normal;
        font-weight: 300;
        line-height: 110%; 
    }
`

export const AdvantagesList = styled.ul`
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

    @media (max-width: 1024px) {
        width: 260px;
        gap: 10px;
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%; 
    }
`

export const AdvantagesDescription = styled.p`
    width: 558px;
    padding: 15px 40px;
    color: var(--us_fill-white);
    font-family: "JetBrains Mono";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    background: var(--us_fill-dark_grey);

    @media (max-width: 1024px) {
        width: 260px;
        padding: 10px;
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%;
    }

    @media (max-width: 480px) {
        width: 95%;
        padding: 10px;
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%;
    }
`

export const DividingLineBlock = styled.div`
    max-width: 1480px;
    display: flex;
    justify-content: flex-end;
    margin: 0 auto;
    padding: 60px 30px;

    @media (max-width: 480px) {
        display: none;
    }
`

export const DividingLine = styled.div`
    width: 779px;
    height: 1px;
    background: linear-gradient(90deg, #0AF 6.98%, #1DD59F 53.41%, #39FF3F 99.84%);

    @media (max-width: 1024px) {
        width: 45%;
    }
`

export const ContentMobile = styled.div`
    display: none;

    @media (max-width: 480px) {
        max-width: 1280px;
        display: flex;
        flex-direction: column;
        gap: 30px;
        margin: 0 auto;
        padding: 0 30px;
    }
`

export const HeadlinesBlock = styled.div`
    display: flex;
    gap: 15px;
`

export const DividingLineBlockMobile = styled.div`
    max-width: 1480px;
    display: flex;
    margin: 0;
    padding: 0;
`