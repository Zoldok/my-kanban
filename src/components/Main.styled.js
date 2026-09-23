import styled from 'styled-components';
import { breakpoints } from '../assets/variables';

export const Main = styled.main`
  width: 100%;
  background-color: #eaeef6;
  height: calc(100vh - 70px);

  @media (max-width: ${breakpoints.tablet}) {
  }
`;

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    margin: 0 auto;
    padding: 40px 0 64px;
  }
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`;

