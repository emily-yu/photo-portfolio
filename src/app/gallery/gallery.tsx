"use client";
import { ParallaxScroll } from "../components/ui/parallax-scroll";
import { Header } from "../components/header";
import { CldImage } from 'next-cloudinary';

interface QuoteProps {
  text: String;
}
export function Gallery() {
  const images = [
    "/assets/gallery/bbc.jpg",
    "/assets/gallery/bbc2.jpg",
    "/assets/gallery/bbc3.jpg",
    "/assets/head/1.jpg",
    "/assets/head/2.jpg",
    "/assets/head/3.jpg",
    "/assets/head/4.jpg",
    "/assets/head/5.jpg",
    "/assets/head/6.jpg",
    "/assets/head/7.jpg",
    "/assets/head/8.jpg",
  ];
  return (
    <>
      <Header />
      <ParallaxScroll images={images} />
      <CldImage
          src="cld-sample-5" // Use this sample image or upload your own via the Media Explorer
          width="500" // Transform the image: auto-crop to square aspect_ratio
          height="500"
          crop={{
              type: 'auto',
              source: true
          }} alt={''}    />
    </>
  );
}
