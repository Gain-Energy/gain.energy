import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import backgroundImg from '../../img/oil-layer-5.png'

export const UseCasesSection = styled.section`
    position: relative;
    padding-top: 60px;
    padding-bottom: 60px;
    background: #000000;

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
        padding-top: 50px;
        padding-bottom: 50px;
    }

    @media (max-width: 480px) {
        padding-top: 60px;
        padding-bottom: 60px;
    }
`

export const Top = styled.div`
    position: relative;
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin: 0 auto;
    padding: 0 30px;

    @media (max-width: 1024px) {
        max-width: 600px;
        gap: 17px;
        padding: 0 20px;
    }

    @media (max-width: 480px) { 
        gap: 30px;
    }
`

export const LogoHeadline = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;

    @media (max-width: 1024px) { 
        gap: 15px;
    }
`

export const Headline = styled.div`
    width: 354px;
    color: var(--us_fill-white);
    font-family: "PP Nikkei Pacific";
    font-size: 58px;
    font-style: normal;
    font-weight: 300;
    line-height: 89%;
    text-transform: uppercase;
    z-index: 2;

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

export const Logo = styled.svg`
    width: 257px;
    height: 78px;
    z-index: 2;

    @media (max-width: 1024px) {
        width: 135px;
        height: 40px;
        padding-top: 0;
    }

    @media (max-width: 480px) { 
        width: 143px;
        height: 42px;
    }
`

export const Text = styled.p`
    width: 514px;
    color: var(--us_fill-white);
    font-family: "JetBrains Mono";
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; 
    z-index: 2;

    @media (max-width: 1024px) {
        width: 269px;
        font-size: 10px;
        font-style: normal;
        font-weight: 300;
        line-height: 120%;
    }

    @media (max-width: 480px) { 
        width: 300px;
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        line-height: 120%;
    }
`

export const Cases = styled.div`
    position: relative;
    display: flex;
    max-width: 1438px;
    gap: 161px;
    margin: 0 auto;
    padding: 160px 30px 0 30px;
    z-index: 2;

    @media (max-width: 1024px) {
        max-width: 600px;
        gap: 80px;
        justify-content: center;
        padding: 10px 100px 0 80px;
    }

    @media (max-width: 480px) { 
        gap: 31px;
        justify-content: center;
        padding: 45px 30px 0 30px;
    }
`

export const CasesLeft = styled.div`
    display: flex;
    flex-direction: column;
    width: 593px;
    gap: 20px;
    padding-top: 30px;

    @media (max-width: 1024px) {
        width: 200px;
        gap: 10px;
    }

    @media (max-width: 480px) { 
        width: 128px;
    }
` 

export const CasesRight = styled.div`
    display: flex;
    flex-direction: column;
    width: 593px;
    gap: 20px;

    @media (max-width: 1024px) {
        width: 200px;
        gap: 10px;
    }

    @media (max-width: 480px) { 
        width: 127px;
        padding-right: 14px;
    }
`

export const Case = styled.div`
    position: relative;
    width: 593px;
    padding: ${({ position }) =>
        position === 'right' ? '25px 0 15px 15px' : '25px 15px 15px 0'};
    color: ${({ isActive }) => 
        (isActive ? 'var(--us_fill-white)' : 'var(--us_fill-grey)')};
    text-align: ${({ position }) =>
        position === 'left' ? 'right' : 'left'};
    font-family: "PP Nikkei Pacific";
    font-size: 36px;
    font-style: normal;
    font-weight: 300;
    line-height: 120%; 
    transition: all .3s ease;

    @media (max-width: 1024px) {
        font-size: 15px;
        width: 200px;
    }

    @media (max-width: 480px) { 
        padding: ${({ position }) =>
            position === 'right' ? '15px 0 7px 7px' : '15px 7px 7px 0'};
        width: 133px;
        font-size: 11px;
        font-style: normal;
        font-weight: 300;
        line-height: 110%; 
    }

    ::after {
        opacity: ${({ isActive }) => 
            (isActive ? '1' : '0')};
        content: "";
        position: absolute;
        bottom: 0;
        right: ${({ position }) =>
            position === 'right' ? 'auto' : '0'};
        left: ${({ position }) =>
            position === 'left' ? 'auto' : '0'};
        width: 15px;
        height: 15px;
        border-top: none; 
        border-bottom: 2px solid var(--us_fill-green);
        border-left: ${({ position }) =>
            position === 'left' ? 'none' : '2px solid var(--us_fill-green)'};
        border-right: ${({ position }) =>
            position === 'right' ? 'none' : '2px solid var(--us_fill-green)'};
        transition: all .3s ease;

        @media (max-width: 1024px) { 
            width: 7px;
            height: 7px;
            border-bottom: 1px solid var(--us_fill-green);
            border-left: ${({ position }) =>
                position === 'left' ? 'none' : '1px solid var(--us_fill-green)'};
            border-right: ${({ position }) =>
                position === 'right' ? 'none' : '1px solid var(--us_fill-green)'};
            bottom: 5px;
            right: ${({ position }) =>
            position === 'right' ? 'auto' : '5px'};
            left: ${({ position }) =>
                position === 'left' ? 'auto' : '5px'};
        }
    }
`

export const JoinButtonLink = styled.button`
    text-decoration: none;
    color: var(--us_fill-bg);
    background: transparent;
    border: none;
`

export const JoinButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    max-width: 1280px;
    margin: 0 auto;
    padding: 60px 30px 0 30px;

    @media (max-width: 1024px) { 
        max-width: 600px;
        padding: 40px 20px 0 20px;
    }

    @media (max-width: 480px) { 
        justify-content: center;
    }
`

const rotateGreen = keyframes`
    0% {
        transform: rotateY(0) skew(14deg) rotate3d(1.1, 1, 0.9, 0deg);
    }
    50% {
        transform: rotateY(0) skew(14deg) rotate3d(1.1, 1, 0.9, 180deg);
    }
    100% {
        transform: rotateY(0) skew(14deg) rotate3d(1.1, 1, 0.9, 360deg);
    }
`;

const rotateBlue = keyframes`
    0% {
        transform: rotateY(180deg) skew(14deg) rotate3d(1.1, 1, 0.9, 0deg);
    }
    50% {
        transform: rotateY(180deg) skew(14deg) rotate3d(1.1, 1, 0.9, 180deg);
    }
    100% {
        transform: rotateY(180deg) skew(14deg) rotate3d(1.1, 1, 0.9, 360deg);
    }
`;

export const JoinButtonOuter = styled.div`
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 267px;
    height: 267px;
    margin-right: 296px;
    border-radius: 50%;
    background: linear-gradient(90deg, #1DD59F, #39FF3F, 0.3); 
    box-shadow: 0 0 20px 5px rgba(29, 213, 159, 0.3);

    @media (max-width: 1024px) { 
        margin-right: 145px;
        width: 110px;
        height: 110px;
        border-radius: 110px;
    }

    @media (max-width: 480px) { 
        margin-right: 0;
        width: 110px;
        height: 110px;
        border-radius: 110px;
    }
`

export const RainbowContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
`;

export const Blue = styled.div`
    position: absolute;
    top: 15px;
    left: 15px;
    width: calc(100% - 10px);
    height: calc(100% - 20px);
    border-radius: 50%;
    background: linear-gradient(
    to left,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 60%,
    #1DD59F 100%
    );
    animation: ${rotateGreen} 3s infinite linear;
`

export const Green = styled.div`
    position: absolute;
    top: 15px;
    left: 0;
    width: calc(100% - 10px);
    height: calc(100% - 20px);
    border-radius: 50%;
    background: linear-gradient(
    to left,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 50%,
    #39FF3F 100%
    );
    animation: ${rotateBlue} 2s infinite linear;
`

export const JoinButtonInner = styled.div`
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 237px;
    height: 237px;
    border-radius: 50%;
    background: linear-gradient(0deg, #0AF 0%, #1DD59F 50%, #39FF3F 100%);

    @media (max-width: 1024px) { 
        gap: 5px;
        margin-right: 0;
        width: 98px;
        height: 98px;
        border-radius: 98px;
    }

    @media (max-width: 480px) { 
        gap: 5px;
        margin-right: 0;
        width: 98px;
        height: 98px;
        border-radius: 98px;
    }
`

export const UpperText = styled.span`
    padding-top: 40px;
    color: var(--us_fill-bg);
    text-align: center;
    font-family: "PP Nikkei Pacific";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 105%; 
    text-transform: uppercase;

    @media (max-width: 1024px) { 
        padding-top: 18px;
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: 105%;
    }

    @media (max-width: 480px) { 
        padding-top: 18px;
        font-size: 6px;
        font-style: normal;
        font-weight: 400;
        line-height: 105%;
    }
`

export const LowerText = styled.span`
    width: 146px;
    color: var(--us_fill-bg);
    text-align: center;
    font-family: "PP Nikkei Pacific";
    font-size: 30.202px;
    font-style: normal;
    font-weight: 400;
    line-height: 105%; 
    text-transform: uppercase;

    @media (max-width: 1024px) { 
        width: 60.15px;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 105%;
    }

    @media (max-width: 480px) { 
        width: 60.15px;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 105%;
    }
`