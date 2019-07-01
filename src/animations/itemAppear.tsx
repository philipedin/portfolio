import { keyframes } from 'styled-components';

const swoopIn = keyframes`
  0% {
    top: -50px;
    right: -30px;
    opacity: 0;
  }

  100% {
    top: 0px;
    right: 0px;
    opacity: 1;
  }
`;

const style = `
  opacity: 1;
  position: relative;
  animation-name: ${swoopIn};
  animation-duration: 200ms;
  animation-timing-function: cubic-bezier(0.42, 0, 0.57, 1.37);
  animation-fill-mode: backwards;
`;

export default style;
