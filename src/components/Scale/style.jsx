import styled from '@emotion/styled';

export const Scale = styled.svg`
    position: absolute;
    z-index: 52;
    right: 0;
    top: 831px;
    pointer-events: none;
    
    @media (max-width: 1024px) {
        top: 440px;
    }

    @media (max-width: 480px) {
        top: 588px;
    }
`

export const CounterContainer = styled.div`
    position: absolute;
    height: 8007px;
    z-index: 52;
    right: 0;
    top: 831px;
    pointer-events: none;

    @media (max-width: 1024px) {
        height: 4380px;
        top: 440px;
    }

    @media (max-width: 480px) {
        height: 5235px;
        top: 582px;
    }
`

export const Counter = styled.div`
    margin-right: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    width: 52px;
    height: 24px;
    background: var(--us_fill-dark_grey);
    font-family: 'Consolas';
    font-weight: 400;
    font-size: 13px;
    line-height: 150%;
    text-align: center;
    color: var(--us_fill-green);

    @media (max-width: 1024px) {
        margin-right: 15px;
        width: 35px;
        height: 18px;
        font-size: 10px;
    }

    @media (max-width: 480px) {
        margin-right: 0;
        width: 30px;
        height: 16px;
        font-size: 10px;
    }
`