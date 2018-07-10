export default interface IImage {
  absolutePath: string;
  relativePath: string;
  publicURL: string;
  childImageSharp?: {
    sizes?: {
      aspectRatio: number;
      base64: string;
      sizes: string;
      src: string;
      srcSet: string;
    };
    resolutions: {
      width: number;
      height: number;
      base64: string;
      src: string;
      srcSet: string;
    }
  };
}
