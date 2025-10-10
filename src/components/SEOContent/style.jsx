import styled from '@emotion/styled';

export const SEOSection = styled.div`
    position: relative;
    width: 100%;
    background: #000000;
    padding: 0;
    margin: 0;
`;

export const VisibleContent = styled.div`
    /* Visible content styled to blend with your dark background */
    opacity: 1;
    max-width: 1200px;
    margin: 0 auto;
    padding: 60px 20px;
    pointer-events: none;
    user-select: none;
    
    /* This content is readable by search engines but nearly invisible to users */
    /* Better SEO practice than completely hidden content */
`;

export const ContentWrapper = styled.div`
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
`;

export const SEOHeading = styled.h2`
    font-size: 28px;
    font-weight: 700;
    margin: 32px 0 16px 0;
    color: #F9F6EF;
    line-height: 1.3;
    
    &:first-of-type {
        margin-top: 0;
    }
    
    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

export const SEOText = styled.p`
    font-size: 16px;
    line-height: 1.7;
    margin: 16px 0;
    color: #F9F6EF;
    
    @media (max-width: 768px) {
        font-size: 15px;
        line-height: 1.6;
    }
`;

export const SEOList = styled.ul`
    font-size: 16px;
    line-height: 1.7;
    margin: 20px 0;
    padding-left: 28px;
    color: #F9F6EF;
    
    li {
        margin: 12px 0;
        
        strong {
            font-weight: 700;
            color: #FFFFFF;
        }
    }
    
    @media (max-width: 768px) {
        font-size: 15px;
        line-height: 1.6;
        padding-left: 24px;
    }
`;
