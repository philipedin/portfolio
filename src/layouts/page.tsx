import styled, { keyframes } from 'styled-components';

const fadeInFromBottom = keyframes`
  from {
    bottom: -30px;
    opacity: 0;
  }

  to {
    bottom: 0px;
    opacity: 1;
  }
`;

const PageLayout = styled.div`
  position: relative;
  animation: ${fadeInFromBottom} 300ms ease-in-out;
`;

export default PageLayout;
