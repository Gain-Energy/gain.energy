import styled from '@emotion/styled';

export const PathDrillingContainer = styled.div`
    display: none;

    @media (max-width: 480px) {
        display: block;
        position: relative;
        max-width: 1280px;
        width: 100%;
        margin: 0 auto;
        padding: 0 30px;
        pointer-events: none;
    }
`

export const Union = styled.svg`
    position: absolute;
    z-index: 51;
`

export const PathDrilling = styled.svg`
    position: absolute;
    z-index: 50;
    left: 15px;
    top: 585px;
`

export const DrillingFinish = styled.p`
    position: absolute;
    left: 10px;
    top: 6228px;
    font-family: 'Inter';
    font-weight: 400;
    font-size: 12px;
    line-height: 120%;
    text-align: center;
    color: var(--us_fill-green);
    z-index: 99;
`