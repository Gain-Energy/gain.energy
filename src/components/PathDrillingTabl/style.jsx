import styled from '@emotion/styled';

export const PathDrillingContainer = styled.div`
    display: none;

    @media (max-width: 1024px) {
        position: relative;
        display: flex;
        max-width: 600px;
        margin: 0 auto;
        padding: 0 20px;
        pointer-events: none;
    }

    @media (max-width: 480px) {
        display: none;
    }
`

export const Union = styled.svg`
    position: absolute;
    z-index: 51;
`

export const PathDrilling = styled.svg`
    position: absolute;
    z-index: 50;
    left: 320px;
    top: 431px;

    mask-image: linear-gradient(
        to bottom,
        black 74%,
        transparent 75%,
        transparent 75.8%,
        black 76.5%,
        black 80%,
        transparent 81%,
        black 82%,
    black 98.69%,
    transparent 98.7%  
    );
    -webkit-mask-image: linear-gradient(
        to bottom,
        black 74%,
        transparent 75%,
        transparent 75.8%,
        black 76.5%,
        black 80%,
        transparent 81.2%,
        transparent 81.5%,
        black 83%,
    black 98.69%,
    transparent 98.7%
    );
`

export const DrillingFinish = styled.p`
    position: absolute;
    left: 279px;
    top: 6148px;
    font-family: 'Inter';
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    text-align: center;
    color: var(--us_fill-green);
    z-index: 99;
`