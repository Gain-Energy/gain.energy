import styled from '@emotion/styled';

export const PathDrillingContainer = styled.div`
    position: relative;
    display: flex;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 30px;
    pointer-events: none;

    @media (max-width: 1024px) {
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
    left: 449px;
    top: 812px;

    // mask-image: linear-gradient(
    //     to bottom,
    //     black 69.6%,
    //     transparent 71.18%,
    //     transparent 71.75%,
    //     black 75%,
    // black 98.69%,
    // transparent 98.7%  
    // );
    // -webkit-mask-image: linear-gradient(
    //     to bottom,
    //     black 69.6%,
    //     transparent 71.18%,
    //     transparent 71.75%,
    //     black 75%,
    // black 98.69%,
    // transparent 98.7%
    // );

    @media (max-width: 1024px) {
        height: 7200px;
        left: 60px;
        top: 575px;
    }
`

export const DrillingFinish = styled.p`
    position: absolute;
    left: 380px;
    top: 10520px;
    font-family: 'Inter';
    font-weight: 400;
    font-size: 24px;
    line-height: 120%;
    text-align: center;
    color: var(--us_fill-green);
    z-index: 99;

    @media (max-width: 1024px) {
        display: none;
    }
`