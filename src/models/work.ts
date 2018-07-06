import { Image } from '.';

export default interface IWork {
  path: string;
  title: string;
  technologies: [string];
  images: {
    logo: Image;
    screenshots: [Image]
  };
}
