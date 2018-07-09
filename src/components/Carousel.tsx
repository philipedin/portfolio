import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 400px;
  width: 100%;

  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  background-color: #fff;

  position: relative;
  display: flex;
  overflow: hidden;
`;

const ImageDiv = styled.div`
  background-image: url(${(props: {src: string}) => props.src});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  width: 100%;
`;

const HiddenButton = styled.div`
  position: absolute;
  top: 0;
  ${(props: {right?: boolean}) => props.right ? 'right: 0' : 'left: 0'};
  width: 50%;
  height: 100%;
`;

interface IProps {
  imagesSources: string[];
}

interface IState {
  currentImageIndex: number;
}

class Carousel extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      currentImageIndex: 0,
    };
  }

  get currentImage() {
    const { currentImageIndex } = this.state;
    const { imagesSources } = this.props;

    return <ImageDiv src={imagesSources[currentImageIndex]} />;
  }

  nextImage = () => {
    const { currentImageIndex } = this.state;
    const { imagesSources } = this.props;

    if (currentImageIndex < imagesSources.length - 1) {
      this.setState((prevState) => {
        return { currentImageIndex: prevState.currentImageIndex + 1};
      });
    } else {
      this.setState({ currentImageIndex: 0});
    }
  }

  previousImage = () => {
    const { currentImageIndex } = this.state;
    const { imagesSources } = this.props;

    if (currentImageIndex > 0) {
      this.setState((prevState) => {
        return { currentImageIndex: prevState.currentImageIndex - 1};
      });
    } else {
      this.setState({ currentImageIndex: imagesSources.length - 1});
    }
  }

  render() {
    return (
      <Wrapper>
        <HiddenButton onClick={this.previousImage}/>
        {this.currentImage}
        <HiddenButton right onClick={this.nextImage}/>
      </Wrapper>
    );
  }
}

export default Carousel;
