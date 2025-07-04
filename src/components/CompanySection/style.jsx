import styled from '@emotion/styled';
import backgroundImg from '../../img/company.png'

export const CompanySection = styled.section`
    position: relative;
    height: 800px;
    background: url(${backgroundImg});
    background-size: cover;
    z-index: 51;

    @media (max-width: 1024px) {
        height: 320px;
        background-position-y: 80%;
    }

    @media (max-width: 480px) {
        height: 320px;
        background-position-x: 80%;
    }
`

export const Content = styled.div`
    max-width: 1280px; 
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin: 0 auto;
    padding: 80px 30px 0 30px;

    @media (max-width: 1024px) {
        gap: 20px;
        padding: 20px 30px 0 30px;
    }

    @media (max-width: 480px) {
        gap: 20px;
        padding: 20px 30px 0 30px;
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
        font-size: 26px;
        font-style: normal;
        font-weight: 300;
        line-height: 90%; 
    }
`

export const Text = styled.p`
    width: 577px;
    color: var(--us_fill-white);
    font-family: "PP Nikkei Pacific";
    font-size: 36px;
    font-style: normal;
    font-weight: 300;
    line-height: 120%; 

    @media (max-width: 1024px) {
        width: 260px;
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        line-height: 120%;
    }

    @media (max-width: 480px) {
        width: 190px;
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        line-height: 120%;
    }
`