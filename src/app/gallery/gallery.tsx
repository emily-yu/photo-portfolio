"use client";
import { ParallaxScroll } from "../components/ui/parallax-scroll";
import { Header } from "../components/header";
import { CldImage } from 'next-cloudinary';

interface QuoteProps {
  text: String;
}
export function Gallery() {
  // const images = [
  //   "/assets/gallery/bbc.jpg",
  //   "/assets/gallery/bbc2.jpg",
  //   "/assets/gallery/bbc3.jpg",
  //   "/assets/head/1.jpg",
  //   "/assets/head/2.jpg",
  //   "/assets/head/3.jpg",
  //   "/assets/head/4.jpg",
  //   "/assets/head/5.jpg",
  //   "/assets/head/6.jpg",
  //   "/assets/head/7.jpg",
  //   "/assets/head/8.jpg",
  // ];
  const imagePublicIds = [
    "cld-sample-5", 
    "cld-sample-2", 
    "cld-sample-3", 
    "cld-sample-4",
    "cld-sample-5", 
    "cld-sample-2", 
    "cld-sample-3", 
    "cld-sample-4",
    "cld-sample-5", 
    "cld-sample-2", 
    "cld-sample-3", 
    "cld-sample-4",
  ];

  return (
    <>
      <Header />
      <ParallaxScroll images={imagePublicIds} />
    </>
  );
}
