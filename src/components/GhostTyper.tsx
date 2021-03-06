import * as React from 'react';
import styled from 'styled-components';
import Cursor from './Cursor';

const Wrapper = styled.span`
  word-break: break-all;
`;

interface IProps {
  text: string;
}

interface IState {
  output: string;
  index: number;
  interval: number;
}

class GhostTyper extends React.Component<IProps, IState> {
  timer = 0;

  constructor(props: IProps) {
    super(props);
    this.state = {
      output: '',
      index: 0,
      interval: 150,
    };

    this.timer = setTimeout(this.addNextCharacter, this.state.interval);
  }

  componentWillUnmount() {
    this.endTimer();
  }

  get randomInterval() {
    return Math.floor(Math.random() * (20 + 100 + 1));
  }

  addNextCharacter = () => {
    const { text } = this.props;
    const { output } = this.state;
    if (output === text) {
      this.endTimer();
      return;
    }
    this.setState((prevState) => {
      return {
        output: `${prevState.output}${text[prevState.index]}`,
        index: prevState.index + 1,
        interval: this.randomInterval,
      };
    }, () => {
      this.timer = setTimeout(this.addNextCharacter, this.state.interval);
    });

  }

  endTimer() {
    clearTimeout(this.timer);
  }

  render() {
    const { output } = this.state;
    const { text } = this.props;
    return (
      <Wrapper>
        {output}<Cursor>|</Cursor>
      </Wrapper>
    );
  }
}

export default GhostTyper;
