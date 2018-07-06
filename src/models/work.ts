import { IImage } from '.';

export default interface IIWork {
  path: string;
  title: string;
  technologies: [string];
  images: {
    logo: IImage;
    screenshots: [IImage]
  };
}
