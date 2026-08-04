import styled from "@emotion/styled";

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
`;

export const CloseButton = styled.button`
  position: fixed;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  top: 24px;
  right: 24px;
  border-radius: 8px;
  background: linear-gradient(to right, #1bd2a3 0%, #39ff3f 100%);
  border: none;
  z-index: 1001;

  svg {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
    top: 16px;
    right: 16px;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

export const ZoneBase = styled.div`
  position: absolute;
  background-color: transparent;
  overflow: hidden;
`;

export const Inner = styled(ZoneBase)`
  background: #292929;
  width: 1280px;
  height: 628px;
  clip-path: url(#inner);
  background-size: cover;
  z-index: 999;
  display: flex;
  gap: 30px;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    justify-content: flex-end;
    max-width: 480px;
    height: 628px;
    gap: 20px;
  }

  @media (max-width: 480px) {
    width: 326px;
    height: 625px;
    gap: 15px;
  }
`;

export const InnerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 95px 0 30px 30px;

  @media (max-width: 1024px) {
    padding: 0 20px 20px 20px;
    height: 100%;
  }

  @media (max-width: 480px) {
    padding: 0 15px 15px 15px;
  }
`;

export const InnerRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  padding: 30px 30px 30px 0;

  @media (max-width: 1024px) {
    padding: 15px 20px 0 20px;
  }

  @media (max-width: 480px) {
    padding: 15px 15px 0 15px;
    gap: 5px;
  }
`;

export const Text = styled.p`
  font-family: var(--us_font-text);
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: var(--us_fill-white);
  min-height: 0;
  overflow-y: auto;
  padding-right: 10px;
  scrollbar-width: thin;
  scrollbar-color: var(--us_fill-green) transparent;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--us_fill-green);
  }

  @media (max-width: 1024px) {
    font-weight: 400;
    font-size: 13px;
    line-height: 120%;
  }
`;

export const Navigation = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 1024px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const LeftButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 36px;
  border: none;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  background-color: #00aaff;
  transition: background-color 0.3s ease;

  @media (max-width: 1024px) {
    width: 64px;
    height: 32px;

    svg {
      width: 12px;
      height: 17px;
    }
  }

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to right, #00aaff 0%, #1ad0a7 100%);
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
    background-color: #ffffff;

    @media (max-width: 1024px) {
      background: linear-gradient(to right, #00aaff 0%, #1ad0a7 100%);
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
  width: 72px;
  height: 36px;
  border: none;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  background-color: #00aaff;
  transition: background-color 0.3s ease;

  @media (max-width: 1024px) {
    width: 64px;
    height: 32px;

    svg {
      width: 12px;
      height: 17px;
    }
  }

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to right, #1bd2a3 0%, #39ff3f 100%);
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
    background-color: #ffffff;

    @media (max-width: 1024px) {
      background: linear-gradient(to right, #1bd2a3 0%, #39ff3f 100%);
    }
  }

  span {
    position: relative;
    z-index: 2;
  }
`;

export const Heading = styled.h4`
  font-family: var(--us_font-display);
  font-weight: 300;
  font-size: 36px;
  line-height: 120%;
  text-align: right;
  color: var(--us_fill-green);

  @media (max-width: 1024px) {
    width: 230px;
    font-weight: 300;
    font-size: 20px;
    line-height: 110%;
    text-align: right;
  }

  @media (max-width: 480px) {
  }
`;

export const ImageWrapper = styled.div`
  width: 780px;
  aspect-ratio: 2.1;
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 1024px) {
    width: 440px;
    margin-top: 10px;
  }

  @media (max-width: 480px) {
    width: 300px;
  }
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: scale-down;
`;

export const ImagePreviewBlock = styled.div`
  display: flex;
  gap: 10px;
  margin-top: auto;

  @media (max-width: 1024px) {
    overflow: scroll;
    width: 100%;
  }

  @media (max-width: 480px) {
    padding-top: 15px;
    width: 100%;
    gap: 5px;
  }
`;

export const ImagePreview = styled.img`
  cursor: pointer;
  flex: none;
  width: 77px;
  aspect-ratio: 2.1;
  border-radius: 4px;
  object-fit: cover;
  opacity: ${({ isActive }) => (isActive ? "1" : "0.3")};

  @media (max-width: 1024px) {
    width: 53px;
  }
`;

export const Outer = styled(ZoneBase)`
  background: linear-gradient(45deg, #00aaff, #1dd59f, #39ff3f);
  width: 1284px;
  height: 632px;
  clip-path: url(#outer);
  background-size: cover;
  z-index: 998;

  @media (max-width: 1024px) {
    max-width: 484px;
    height: 632px;
  }

  @media (max-width: 480px) {
    width: 330px;
    height: 629px;
  }
`;
