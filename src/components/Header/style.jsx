import styled from '@emotion/styled';

export const Header = styled.header`
    position: absolute;
    top: 24px;
    left: 0;
    right: 0;
    z-index: 99;
    background: transparent;

    @media (max-width: 1024px) {
        top: 10px;
    }

    @media (max-width: 480px) {
        top: 10px;
    }
`

export const HeaderContainer = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;

    @media (max-width: 1024px) {
        max-width: 600px;
        padding: 0 20px;
    }

    @media (max-width: 480px) {
        padding: 0 30px;
    }
`

export const Logo = styled.svg`
    cursor: pointer;
    width: 163px;
    height: 44px;

    @media (max-width: 1024px) {
        width: 72px;
        height: 20px;
    }
`

export const MenuButton = styled.button`
    cursor: pointer;
    padding-top: 6px;
    color: var(--us_fill-white);
    leading-trim: both;
    text-edge: cap;
    font-family: 'PP Nikkei Pacific';
    background: transparent;
    border: none;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; 
    text-transform: uppercase;
    transition: color 0.3s ease;

    :hover {
        color: #31ED37;
    }

    @media (max-width: 1024px) {
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
    }
`
