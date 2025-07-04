import styled from '@emotion/styled';

export const BlackLayer = styled.div`
    height: ${({ position }) =>
        position === 'first' ? '105px' : '128px'};
    background: #070707 ;

    @media (max-width: 1024px) {
        height: ${({ position }) =>
        position === 'first' ? '105px' : '177px'};
    }

    @media (max-width: 480px) {
        display: none;
    }
`