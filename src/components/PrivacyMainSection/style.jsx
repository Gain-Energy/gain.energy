import styled from '@emotion/styled';

export const Provider = styled.div`
  position: relative;
  width: 100%;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  gap: 8px;
  padding-bottom: 40px;
  
  @media (max-width: 1024px) {
    gap: 16px;
  }
`

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 30px;
  display: flex;
  gap: 16px;

  @media (max-width: 1024px) {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
  }
`

export const Ul = styled.ul`
  padding-inline-start: 1.625rem;
  list-style-type: disc;
`

export const Li = styled.li`
  font-weight: 200;
  font-size: 24px;
  padding-top: 3px;
`

export const Bold = styled.span`
  font-weight: 500;
`

export const Header = styled.div`
  font-weight: 400;
  font-size: 36px;
`

export const Content = styled.div`
  font-weight: 200;
  font-size: 24px;
`

export const ContentItalic = styled.div`
  font-weight: 200;
  font-size: 24px;
  font-style: italic;
`

export const IContent = styled.div`
  font-weight: 300;
  font-size: 28px;
`

export const SHeader = styled.div`
  padding-top: 12px;
  font-weight: 400;
  font-size: 20px;
`