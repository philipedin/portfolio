import { Image } from '.';

export default interface Work {
  path: string;
  title: string;
  technologies: [string];
  images: {
    logo: Image;
  };
};