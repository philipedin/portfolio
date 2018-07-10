import * as React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { IImage } from '../models';

const Wrapper = styled.div`
  position: relative;

  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  background-color: #fff;
`;

const HiddenButton = styled.div`
  position: absolute;
  top: 0;
  ${(props: {right?: boolean}) => props.right ? 'right: 0' : 'left: 0'};
  width: 50%;
  height: 100%;
`;

interface IProps {
  images: IImage[];
}

interface IState {
  currentImageIndex: number;
}

class Carousel extends React.Component<IProps, IState> {
  timer = 0;
  interval = 3500;

  constructor(props: IProps) {
    super(props);
    this.state = {
      currentImageIndex: 0,
    };

    this.timer = setInterval(this.nextImage, this.interval);
  }

  componentWillUnmount() {
    this.endTimer();
  }

  get currentImage() {
    const { currentImageIndex } = this.state;
    const { images } = this.props;

    const {
      childImageSharp: {
        sizes,
      },
    } = images[currentImageIndex];

    return <Img sizes={sizes} />;
  }

  endTimer() {
    clearTimeout(this.timer);
  }

  startTimer() {
    this.timer = setInterval(this.nextImage, this.interval);
  }

  nextImage = () => {
    this.endTimer();

    const { currentImageIndex } = this.state;
    const { images } = this.props;

    if (currentImageIndex < images.length - 1) {
      this.setState((prevState) => {
        return { currentImageIndex: prevState.currentImageIndex + 1};
      });
    } else {
      this.setState({ currentImageIndex: 0});
    }

    this.startTimer();
  }

  previousImage = () => {
    this.endTimer();

    const { currentImageIndex } = this.state;
    const { images } = this.props;

    if (currentImageIndex > 0) {
      this.setState((prevState) => {
        return { currentImageIndex: prevState.currentImageIndex - 1};
      });
    } else {
      this.setState({ currentImageIndex: images.length - 1});
    }

    this.startTimer();
  }

  render() {
    return (
      <Wrapper>
        {this.currentImage}
        <HiddenButton onClick={this.previousImage}/>
        <HiddenButton right onClick={this.nextImage}/>
      </Wrapper>
    );
  }
}

export default Carousel;
