import styled from '@emotion/styled';

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 990;
    // opacity: open ? 1 : 0;
    // transition: opacity 0.3s ease;
    overflow: hidden;
`

export const CloseButton = styled.button`
    position: fixed;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 76px;
    height: 76px;
    top: 0px;
    right: 0px;
    background: linear-gradient(to right, #1BD2A3 0%, #39FF3F 100%);
    border: none;
    z-index: 999;
`

export const ZoneBase = styled.div`
    position: absolute;
    background-color: transparent;
    overflow: hidden;
`

export const Inner = styled(ZoneBase)`
    background: #292929;
    width: 1280px;
    height: 628px;
    clip-path: url(#inner);
    background-size: cover;
    z-index: 999;
    display: flex;
    gap: 30px;
`

export const InnerLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 95px 0 30px 30px;
`

export const InnerRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 20px;
    padding: 30px 30px 30px 0;
`

export const Text = styled.p`
    font-family: "JetBrains Mono";
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: var(--us_fill-white);
`

export const Navigation = styled.div`
    display: flex;
    gap: 10px;

    @media (max-width: 480px) {
        display: none;
    }
`

export const LeftButton = styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 128px;
    height: 44px;
    border: none;
    position: relative;
    overflow: hidden;
    background-color: #00AAFF; 
    transition: background-color 0.3s ease;

    @media (max-width: 1024px) {
        width: 70px;
        height: 32px;
    }

    ::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(to right, #00AAFF 0%, #1AD0A7 100%);
        transition: opacity 0.3s ease;
        z-index: 1;
    }

    svg {
        z-index: 1;
    }

    :hover::before {
        opacity: 0; 
    }

    :hover {
        background-color: #FFFFFF; 

        @media (max-width: 1024px) {
            background: linear-gradient(to right, #00AAFF 0%, #1AD0A7 100%);
        }
    }

    span {
        position: relative;
        z-index: 2; 
    }
`;

export const RightButton = styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 128px;
    height: 44px;
    border: none;
    position: relative;
    overflow: hidden;
    background-color: #00AAFF; 
    transition: background-color 0.3s ease;

    @media (max-width: 1024px) {
        width: 70px;
        height: 32px;
    }

    ::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(to right, #1BD2A3 0%, #39FF3F 100%);
        transition: opacity 0.3s ease;
        z-index: 1;
    }

    svg {
        z-index: 1;
    }

    :hover::before {
        opacity: 0; 
    }

    :hover {
        background-color: #FFFFFF; 

        @media (max-width: 1024px) {
            background: linear-gradient(to right, #1BD2A3 0%, #39FF3F 100%);
        }
    }

    span {
        position: relative;
        z-index: 2; 
    }
`;

export const Heading = styled.h4`
    font-family: "PP Nikkei Pacific";
    font-weight: 300;
    font-size: 36px;
    line-height: 120%;
    text-align: right;
    color: var(--us_fill-green);
` 

export const Image = styled.img`
    width: 780px;
    height: 439px;
    margin-top: 2px;
`

export const ImagePreviewBlock = styled.div`
    display: flex;
    gap: 10px;
`

export const ImagePreview = styled.img`
    cursor: pointer;
    width: 77px;
    height: 44px;opacity: ${({ isActive }) => 
        (isActive ? '1' : '0.3')};
`

export const Outer = styled(ZoneBase)`
    background: linear-gradient(45deg, #00AAFF, #1DD59F, #39FF3F);
    width: 1284px;
    height: 632px;
    clip-path: url(#outer);
    background-size: cover;
    z-index: 998;
`
