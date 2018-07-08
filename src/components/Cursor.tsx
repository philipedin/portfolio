import styled from 'styled-components';

const Cursor = styled.span`
  animation: 1s blink step-end infinite;
  font-weight: bold;
  animation-timing-function: ease-in-out;

  @keyframes blink {
    from, to {
      color: transparent;
    }

    0% {
      color: rgba(51, 91, 224, 1);
    }

    50% {
      color: rgba(51, 91, 224, 0.0);
    }

    100% {
      color: rgba(51, 91, 224, 1);
    }
  }
`;

export default Cursor;
