import styled from '@emotion/styled';
import backgroundImg from '../../img/oil-layer-5.png'

export const PartnersAndNewsSection = styled.section`
    position: relative;
    padding-top: 120px;
    background: #070707;

    ::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url(${backgroundImg});
        background-size: cover;
        z-index: 0;
    }

    @media (max-width: 1024px) {
        padding-top: 100px;
    }
`

export const PartnersBlock = styled.div`
    display: flex;
    gap: 273px;
    max-width: 1280px;
    margin: 0 auto;
    padding: 120px 30px 100px 30px;

    @media (max-width: 1024px) {
        max-width: 600px;
        justify-content: space-between;
        gap: 240px;
        padding: 0 30px 30px 30px;
    }

    @media (max-width: 480px) {
        gap: 30px;
        flex-direction: column;
        padding: 0 30px 50px 30px;
    }
`

export const PartnersHeadline = styled.h2`
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

export const PartnersShowcase = styled.div`
    display: flex;
    gap: 20px;

    img {
        width: 114px;
        height: 34px;
    }

    @media (max-width: 1024px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px 40px;
    }

    @media (max-width: 480px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 33px;
    }
`

export const NewsBlock = styled.div`
    display: flex;
    gap: 234px;
    max-width: 1280px;
    margin: 0 auto;
    padding: 80px 30px 152px 30px;

    @media (max-width: 1024px) {
        max-width: 600px;
        gap: 190px;
        padding: 50px 20px 35px 20px;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        gap: 30px;
        padding: 50px 30px 55px 30px;
    }
`

export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    gap: 80px;

    @media (max-width: 1024px) {
        gap: 15px;
    }
`

export const NewsHeadline = styled.h2`
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

export const NewsNavigation = styled.div`
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

export const Pagination = styled.div`
    display: none;

    @media (max-width: 480px) {
        display: flex;
        max-width: 1280px;
        gap: 10px;
    }
`

export const PaginationItem = styled.svg`
    width: 15px;
    height: 15px;

    circle:first-of-type {
        fill: ${({isActive}) => (isActive ? "#31ED37" : "#4E4E4E")};
        transition: fill .3s ease;
    }
`

export const RightSide = styled.div`
    position: relative;
`

export const NewsShowcase = styled.div`
    display: flex;
    align-items: flex-start;
    overflow: hidden;
    margin-left: 120px;

    @media (max-width: 1024px) {
        margin-left: 50px;
    }

    @media (max-width: 480px) {
        &.keen-slider:not([data-keen-slider-disabled]) {
            overflow: visible;
        }
        margin-left: 10px;
    }
`

export const NewsItem = styled.div`
    cursor: grab;
    position: relative;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 30px;
    padding: 15px 0 15px 15px;

    ::after {
        content: "";
        position: absolute;
        opacity: ${({ isActive }) => 
        (isActive ? '1' : '0')};
        top: 0;
        left: 0;
        width: 15px;
        height: 15px;
        border: 2px solid var(--us_fill-green); 
        border-bottom: none;
        border-right: none;

        @media (max-width: 1024px) {
            width: 7px;
            height: 7px;
            border: 1px solid var(--us_fill-green); 
            border-bottom: none;
            border-right: none;
        }
    }

    ::before {
        content: "";
        position: absolute;
        opacity: ${({ isActive }) => 
        (isActive ? '1' : '0')};
        bottom: 0;
        left: 0;
        width: 15px;
        height: 15px;
        border: 2px solid var(--us_fill-green);
        border-top: none;
        border-right: none;

        @media (max-width: 1024px) {
            width: 7px;
            height: 7px;
            border: 1px solid var(--us_fill-green); 
            border-top: none;
            border-right: none;
        }
    }

    @media (max-width: 1024px) {
        max-width: 230px;
        gap: 15px;
        padding: 7px 0 7px 10px;

        &.keen-slider__slide {
            max-width: 230px;
        }
    }

    @media (max-width: 480px) {
        max-width: 230px;
        gap: 15px;
        padding: 7px 0 7px 10px;

        &.keen-slider__slide {
            max-width: 230px;
        }
    }
`

export const NewsItemImgContainer = styled.div`
    width: 640px;
    height: 360px;
    display: flex;
    align-items: center;
    overflow: hidden;

    @media (max-width: 1024px) {
        width: 230px;
        height: 129px;
    }

    @media (max-width: 480px) {
        width: 230px;
        height: 129px;
    }
`

export const NewsItemImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: ${({ isActive }) => 
        (isActive ? '1' : '0.2')};
    transition: all .3s ease;
`

export const NewsItemHeadline = styled.h3`
    color: var(--us_fill-green);
    font-family: "PP Nikkei Pacific";
    font-size: 28px;
    font-style: normal;
    font-weight: 300;
    line-height: 110%;
    max-width: 640px;

    @media (max-width: 1024px) {
        font-size: 15px;
        font-style: normal;
        font-weight: 300;
        line-height: 110%;
        max-width: 230px;
    }
`

export const NewsItemDate = styled.time`
    color: var(--us_fill-white);
    font-family: "JetBrains Mono";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    display: block;
    margin-bottom: 8px;

    @media (max-width: 1024px) {
        font-size: 12px;
    }
`

export const NewsItemText = styled.p`
    color: ${({ isActive }) => 
        (isActive ? 'var(--us_fill-white)' : 'var(--us_fill-grey)')};
    font-family: "JetBrains Mono";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    transition: all .3s ease;
    max-width: 640px;

    @media (max-width: 1024px) {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%;
        max-width: 230px;
    }
`