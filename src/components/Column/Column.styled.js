import styled from 'styled-components';

const breakpoints = {
  tablet: '1199px',
  mobile: '768px',
};

export const ColumnWrapper = styled.div`
  width: 20%;
  margin: 0 auto;
  display: block;

  /*
  &.column {
    border: 1px solid red;
  }
  */

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`;

export const ColumnTitle = styled.div`
  padding: 0 10px;
  margin: 15px 0;
  p {
    color: #94a6be;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
  }
`;

export const Cards = styled.div`
  width: 100%;
  display: block;
  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    display: flex;
    overflow-y: auto;
  }
`;
