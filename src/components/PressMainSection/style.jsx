import styled from '@emotion/styled';

export const Provider = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: #000;
  display: flex;
  flex-direction: column;
  color: var(--us_fill-white);
  gap: 8px;
  /* Clears the fixed Header, which this page no longer has a hero to sit over. */
  padding-top: 110px;
  padding-bottom: 40px;

  @media (max-width: 1024px) {
    gap: 16px;
    padding-top: 70px;
  }

  @media (max-width: 480px) {
    padding-top: 60px;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 30px;
  gap: 16px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    max-width: 600px;
    padding: 20px;
  }
`

export const Eyebrow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--us_font-text);
  font-size: 13px;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: var(--us_fill-light_grey);

  @media (max-width: 1024px) {
    font-size: 11px;
    gap: 8px;
  }
`

export const EyebrowMark = styled.span`
  width: 32px;
  height: 2px;
  background: var(--us_fill-grad);

  @media (max-width: 1024px) {
    width: 20px;
  }
`

export const Headline = styled.h1`
  font-family: var(--us_font-display);
  font-size: 58px;
  font-weight: 300;
  line-height: 95%;
  text-transform: uppercase;
  color: var(--us_fill-white);

  @media (max-width: 1024px) {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 26px;
  }
`

export const Highlights = styled.div`
  border-left: 2px solid transparent;
  border-image: var(--us_fill-grad) 1;
  background: rgba(255, 255, 255, 0.04);
  padding: 24px 28px;

  @media (max-width: 1024px) {
    padding: 16px 18px;
  }
`

export const HighlightsTitle = styled.div`
  font-family: var(--us_font-text);
  font-size: 13px;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: var(--us_fill-light_grey);
  padding-bottom: 12px;

  @media (max-width: 1024px) {
    font-size: 11px;
  }
`

export const Ul = styled.ul`
  padding-inline-start: 1.625rem;
  list-style-type: disc;
`

export const Li = styled.li`
  font-family: var(--us_font-display);
  font-weight: 300;
  font-size: 22px;
  line-height: 130%;
  padding-top: 6px;
  color: var(--us_fill-white);

  strong {
    font-weight: 400;
    color: var(--us_fill-green);
  }

  a {
    color: var(--us_fill-green);
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  @media (max-width: 1024px) {
    font-size: 17px;
  }
`

export const Header = styled.h2`
  font-family: var(--us_font-display);
  font-weight: 300;
  font-size: 36px;
  line-height: 105%;
  text-transform: uppercase;
  color: var(--us_fill-white);

  @media (max-width: 1024px) {
    font-size: 26px;
  }
`

export const Content = styled.p`
  font-family: var(--us_font-display);
  font-weight: 300;
  font-size: 24px;
  line-height: 130%;
  color: var(--us_fill-white);

  strong {
    font-weight: 400;
  }

  a {
    color: var(--us_fill-green);
    text-decoration: underline;
    text-underline-offset: 3px;
    transition: color 0.3s ease;
  }

  a:hover {
    color: var(--us_fill-white);
  }

  @media (max-width: 1024px) {
    font-size: 18px;
  }
`

export const AboutBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Signature = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-family: var(--us_font-display);
  font-size: 24px;
  font-weight: 300;
  line-height: 130%;

  @media (max-width: 1024px) {
    font-size: 18px;
  }
`

export const SignatureName = styled.span`
  font-weight: 400;
`

export const SignatureTitle = styled.span`
  color: var(--us_fill-light_grey);
`

export const Quote = styled.blockquote`
  border-left: 2px solid transparent;
  border-image: var(--us_fill-grad) 1;
  padding-left: 28px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 1024px) {
    padding-left: 18px;
  }
`

export const QuoteText = styled.p`
  font-family: var(--us_font-display);
  font-weight: 300;
  font-size: 28px;
  line-height: 125%;
  font-style: italic;

  @media (max-width: 1024px) {
    font-size: 20px;
  }
`

export const QuoteAuthor = styled.div`
  font-family: var(--us_font-text);
  font-weight: 400;
  font-size: 15px;
  line-height: 130%;
  color: var(--us_fill-white);

  @media (max-width: 1024px) {
    font-size: 13px;
  }
`

export const QuoteAuthorTitle = styled.span`
  color: var(--us_fill-light_grey);
`

export const SHeader = styled.h3`
  padding-top: 12px;
  font-family: var(--us_font-display);
  font-weight: 300;
  font-size: 28px;
  line-height: 105%;
  text-transform: uppercase;
  color: var(--us_fill-white);

  @media (max-width: 1024px) {
    font-size: 22px;
  }
`

export const Divider = styled.hr`
  width: 100%;
  height: 1px;
  min-height: 1px;
  flex-shrink: 0;
  border: 0;
  background: rgba(249, 246, 239, 0.12);
`

export const Link = styled.a`
  color: var(--us_fill-green);
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.3s ease;

  :hover {
    color: var(--us_fill-white);
  }
`

export const ShareBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-top: 12px;
  flex-wrap: wrap;
`

export const ShareLabel = styled.span`
  font-family: var(--us_font-text);
  font-size: 13px;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: var(--us_fill-light_grey);

  @media (max-width: 1024px) {
    font-size: 11px;
  }
`

export const ShareLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: var(--us_fill-white);
  transition: color 0.3s ease;

  :hover {
    color: var(--us_fill-green);
  }

  svg {
    width: 24px;
    height: 24px;
    fill: currentColor;
  }
`

export const Banner = styled.img`
  display: block;
  width: 100%;
  height: auto;
  border: 1px solid rgba(249, 246, 239, 0.12);
`

export const CtaBlock = styled.div`
  display: flex;
  padding-top: 12px;
`

export const Cta = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  background: var(--us_fill-grad);
  color: #070707;
  font-family: var(--us_font-text);
  font-size: 15px;
  font-weight: 400;
  line-height: 130%;
  text-transform: uppercase;
  text-decoration: none;
  transition: opacity 0.3s ease;

  :hover {
    opacity: 0.85;
  }

  @media (max-width: 1024px) {
    padding: 12px 20px;
    font-size: 13px;
  }
`
