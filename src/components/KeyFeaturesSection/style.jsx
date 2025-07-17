import styled from '@emotion/styled';
import backgroundImg from '../../img/oil-layer-1.png'

export const KeyFeaturesSection = styled.section`
    position: relative;
    padding-top: 60px;
    padding-bottom: 60px;
    background: #000000;

    ::before {
        content: "";
        position: absolute;
        top: -152px;
        left: 0;
        width: 100%;
        height: 1139px;
        background: url(${backgroundImg});
        background-size: cover;
        z-index: 0;
    }

    @media (max-width: 1024px) {
        padding-bottom: 50px;
    }

    @media (max-width: 480px) {
        padding-top: 60px;
        padding-bottom: 60px;
    }
`

export const Top = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 0 30px;

    @media (max-width: 1024px) {
        max-width: 600px;
        padding: 0 20px;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        gap: 30px;
    }
`

export const TopLeft = styled.div`
    display: flex;
    gap: 31px;

    @media (max-width: 1024px) {
        gap: 15px;
        flex-wrap: wrap;
    }

    @media (max-width: 480px) {
        gap: 15px;
    }
`

export const Logo = styled.svg`
    width: 257px;
    height: 78px;
    padding-top: 14px;

    @media (max-width: 1024px) {
        width: 135px;
        height: 40px;
        padding-top: 0;
    }

    @media (max-width: 480px) {
        width: 143px;
        height: 42px;
        padding-top: 0;
    }
`

export const Header = styled.h2`
    width: 326px;
    color: var(--us_fill-white);
    font-family: "PP Nikkei Pacific";
    font-size: 58px;
    font-style: normal;
    font-weight: 300;
    line-height: 89%;
    text-transform: uppercase;

    @media (max-width: 1024px) {
        width: 150px;
        font-size: 26px;
        font-style: normal;
        font-weight: 300;
        line-height: 90%;
    }

    @media (max-width: 480px) {
        width: 142px;
        font-size: 26px;
        font-style: normal;
        font-weight: 300;
        line-height: 90%;
    }
`

export const BigText = styled.p`
    width: 563px;
    padding-top: 74px;
    color: var(--us_fill-white);
    font-family: "PP Nikkei Pacific";
    font-size: 32px;
    font-style: normal;
    font-weight: 300;
    line-height: 120%;
    visibility: hidden;

    @media (max-width: 1024px) {
        padding-top: 30px;
        width: 232px;
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        line-height: 120%;
    }

    @media (max-width: 480px) {
        padding-top: 0;
        width: 300px;
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        line-height: 120%;
    }
`

export const Pagination = styled.div`
    display: none;

    @media (max-width: 480px) {
        display: flex;
        max-width: 1280px;
        margin: 0 auto;
        padding: 30px;
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

export const FeaturesBlock = styled.div`
    position: relative;
    display: flex;
    gap: 77px;
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    padding-top: 80px;
    padding-left: 30px;
    padding-right: 30px;
    z-index: 2;

    @media (max-width: 1024px) {
        max-width: 600px;
        padding-top: 60px;
        padding-left: 20px;
        padding-right: 20px;
        gap: 20px;
    }

    @media (max-width: 480px) {
        padding-top: 0;
        gap: 20px;
        flex-direction: column;
    }
`

export const FeaturesList = styled.div`
    display: flex;
    flex-direction: column;
    width: 450px;
    padding-left: 192px;
    gap: 50px;
    z-index: 3;

    @media (max-width: 1024px) {
        padding-left: 70px;
        width: 185px;
        gap: 20px;
    }

    @media (max-width: 480px) {
        display: none;
    }
`

export const FeaturesItem = styled.span`
    cursor: pointer;
    color: ${({isActive}) => (isActive ? 'var(--us_fill-green)' : 'var(--us_fill-white)')};
    text-align: right;
    font-family: "PP Nikkei Pacific";
    font-size: 36px;
    font-style: normal;
    font-weight: 300;
    line-height: 120%; 
    transition: color .3s ease;

    @media (max-width: 1024px) {
        font-size: 15px;
    }
`

export const FeaturesMobileBlock = styled.div`
    display: none;

    &.keen-slider:not([data-keen-slider-disabled]) {
        display: none;
    }
    
    @media (max-width: 480px) {
        display: flex;
        align-items: flex-start;

        &.keen-slider:not([data-keen-slider-disabled]) {
            display: flex;
            overflow: visible;
        }
    }
`

export const FeaturesMobileCard = styled.div`
    max-width: 230px;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 20px;
    overflow: visible !important;

    &.keen-slider:not([data-keen-slider-disabled]) .keen-slider__slide  {
        overflow: visible;
        max-width: 230px;
    }
`

export const FeaturesHeading = styled.h4`
    width: 230px;
    color: var(--us_fill-green);
    font-family: "PP Nikkei Pacific";
    font-size: 15px;
    font-style: normal;
    font-weight: 300;
    line-height: 110%; 
`

export const MobileText = styled.p`
    position: relative;
    width: 230px;
    align-self: start;
    color: ${({ isActive }) => 
        (isActive ? 'var(--us_fill-white)' : 'var(--us_fill-grey)')};
    font-family: "JetBrains Mono";
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    transition: all .3s ease;

    ::after {
        content: "";
        position: absolute;
        opacity: ${({ isActive }) => 
            (isActive ? '1' : '0')};
        top: -10px;
        right: 0;
        width: 10px;
        height: 10px;
        border: 2px solid var(--us_fill-green); 
        border-bottom: none;
        border-left: none;
        transition: all .3s ease;
    }

    ::before {
        content: "";
        position: absolute;
        opacity: ${({ isActive }) => 
            (isActive ? '1' : '0')};
        bottom: -10px;
        right: 0;
        width: 10px;
        height: 10px;
        border: 2px solid var(--us_fill-green);
        border-top: none;
        border-left: none;
        transition: all .3s ease;
    }
`

export const FeaturesContent = styled.div`
    cursor: pointer;
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 15px 0;
    width: 425px;
    right: 167px;
    opacity: 0;
    top: ${props => props.textPosition || '8px'};
    align-self: start;
    transition: top .3s ease;

    @media (max-width: 1024px) {
        width: 260px;
        right: 0;
    }

    @media (max-width: 480px) { 
        display: none;
        width: 230px;
    }

    ::after {
        content: "";
        position: absolute;
        top: -10px;
        right: 0;
        width: 15px;
        height: 15px;
        border: 2px solid var(--us_fill-green); 
        border-bottom: none;
        border-left: none;

        @media (max-width: 1024px) {
            width: 10px;
            height: 10px;
        }

        @media (max-width: 480px) { 
            width: 10px;
            height: 10px;
        }
    }

    ::before {
        content: "";
        position: absolute;
        bottom: -10px;
        right: 0;
        width: 15px;
        height: 15px;
        border: 2px solid var(--us_fill-green);
        border-top: none;
        border-left: none;

        @media (max-width: 1024px) {
            width: 10px;
            height: 10px;
        }

        @media (max-width: 480px) { 
            width: 10px;
            height: 10px;
        }
    }
`

export const FeaturesImage = styled.img`
    width: 425px;
    height: 259px;
`

export const FeaturesText = styled.p`
    color: var(--us_fill-white);
    font-family: "JetBrains Mono";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; 

    display: -webkit-box;      
    -webkit-box-orient: vertical; 
    -webkit-line-clamp: 3;      
    overflow: hidden;          
    text-overflow: ellipsis;    

    @media (max-width: 1024px) {
        font-size: 10px;
    }

    @media (max-width: 480px) { 
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%;
    }
`

export const FeaturesButton = styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 129px;
    height: 44px;
    border: none;
    position: relative;
    overflow: hidden;
    background-color: #00AAFF; 
    transition: background-color 0.3s ease;

    font-family: "PP Nikkei Pacific";
    font-weight: 400;
    font-size: 15px;
    line-height: 105%;
    text-transform: uppercase;

    @media (max-width: 1024px) {
        width: 70px;
        height: 32px;
    }

    ::before {
        content: 'Read more';
        padding: 14px 0;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(to right, #1BD2A3 0%, #39FF3F 100%);
        transition: opacity 0.3s ease;
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
`