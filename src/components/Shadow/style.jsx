import styled from '@emotion/styled';

export const Wrapper = styled.div`
    position: absolute;
    top: ${({transform}) => (transform ? "0" : "-80px")};
    width: 100%;
    z-index: 0;
    background: #070707;
    height: 80px;
    mask-image: linear-gradient(to bottom, transparent 0%, black 85%);
    mask-size: 100% 100%;
    mask-repeat: no-repeat;
    transform: ${({transform}) => (transform ? "rotate(180deg)" : "rotate(0deg)")};

    @media (max-width: 480px) {
        z-index: -1;
    }
`