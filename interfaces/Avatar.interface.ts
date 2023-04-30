import { StaticImageData } from "next/image";

export interface Avatar {
  id: string;
  title: string;
  description: string;
  rating: number;
  likes: number;
  liked: boolean;
  image: StaticImageData;
  publisher: {
    name: string,
    image: StaticImageData;
  };
  price: number;
  polygonCount: number;
  autoUploadSupport: boolean;
  category: string;
  content: string[];
}