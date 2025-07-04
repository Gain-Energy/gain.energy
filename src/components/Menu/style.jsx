import styled from "@emotion/styled";

export const MenuWrapper = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    display: flex;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    z-index: 999;
`;

export const MenuContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 30px;
    background: var(--us_fill-dark_grey);
    width: 1030px;
    height: 76px;

    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: start;
        width: 132px;
        height: 360px;
        padding: 12px 20px;
        gap: 88px;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: start;
        width: 132px;
        height: 360px;
        padding: 12px 20px;
        gap: 88px;
    }
`;

export const MenuText = styled.p`
    display: none;

    @media (max-width: 1024px) {
        display: block;
        font-family: 'PP Nikkei Pacific';
        font-weight: 400;
        font-size: 12px;
        line-height: 130%;
        text-transform: uppercase;
        color: var(--us_fill-white);
    }

    @media (max-width: 480px) {
        display: block;
        font-family: 'PP Nikkei Pacific';
        font-weight: 400;
        font-size: 12px;
        line-height: 130%;
        text-transform: uppercase;
        color: var(--us_fill-white);
    }
`

export const CloseButton = styled.button`
    position: absolute;
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

export const ItemsBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 44px;

    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }
`

export const MenuItem = styled.a`
    text-decoration: none;
    cursor: pointer;
    font-family: 'JetBrains Mono';
    font-weight: 400;
    font-size: 15px;
    line-height: 130%;
    text-transform: capitalize;
    color: var(--us_fill-white);
    transition: color .3s ease;

    :hover {
        color: var(--us_fill-green);
    }

    @media (max-width: 1024px) {
        font-weight: 400;
        font-size: 15px;
        line-height: 130%;
    }

    @media (max-width: 480px) {
        font-weight: 400;
        font-size: 15px;
        line-height: 130%;
    }
`