"use client";
import { ParallaxScroll } from "../components/ui/parallax-scroll";
import { Header } from "../components/header";
import { CldImage } from 'next-cloudinary';

interface QuoteProps {
  text: String;
}
export function Gallery() {
  const imagePublicIds = [
    "gallery/bbcagain",
    "gallery/bbcs",
    "gallery/bbcdee",
    "gallery/A9_09528",
    "gallery/bbc3",
    "gallery/riaan", // repeat for development's sake
    "gallery/bbcagain",
    "gallery/bbcs",
    "gallery/bbcdee",
    "gallery/A9_09528",
    "gallery/bbc3",
    "gallery/riaan",
  ];

  return (
    <>
      <Header />
      <ParallaxScroll images={imagePublicIds} />
    </>
  );
}
