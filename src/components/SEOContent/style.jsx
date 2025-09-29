import styled from '@emotion/styled';

export const SEOSection = styled.div`
    position: relative;
    width: 100%;
`;

export const HiddenContent = styled.div`
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
    
    /* Alternative approach - visible but styled to blend with background */
    /* 
    opacity: 0.01;
    font-size: 1px;
    line-height: 1px;
    color: transparent;
    */
`;

export const SEOHeading = styled.h2`
    font-size: 1rem;
    font-weight: 600;
    margin: 1rem 0 0.5rem 0;
    color: #F9F6EF;
`;

export const SEOText = styled.p`
    font-size: 0.875rem;
    line-height: 1.4;
    margin: 0.5rem 0;
    color: #F9F6EF;
`;

export const SEOList = styled.ul`
    font-size: 0.875rem;
    line-height: 1.4;
    margin: 0.5rem 0;
    padding-left: 1.5rem;
    color: #F9F6EF;
    
    li {
        margin: 0.25rem 0;
    }
`;
