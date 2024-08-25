"use client";
import { ParallaxScroll } from "./parallax-scroll";

export function Gallery() {
  return (
    <>
    <section>
    <div style={{textAlign: "center", padding: "5%"}}>

      <h2 className="text-5xl font-bold">Emily Yu</h2>
      <div style={{textAlign: "center"}}>
      <div id="nav">
        <a href="/login">Login</a>
        <a href="/gallery">Gallery</a>
        <a href="/events">Events</a>
        <a href="/contact">Contact</a>
        </div>
        <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">As an athlete turned photographer, I see with the players.</h4>
        </div>
        </div>
        </section>
  <ParallaxScroll images={images} />        </>

);
}

const images = [
    "/assets/gallery/bbc.jpg",
    "/assets/gallery/bbc2.jpg",
    "/assets/gallery/bbc3.jpg",
    "/assets/gallery/bbc.jpg",
    "/assets/gallery/bbc2.jpg",
    "/assets/gallery/bbc3.jpg",
    "/assets/gallery/bbc.jpg",
    "/assets/gallery/bbc2.jpg",
    "/assets/gallery/bbc3.jpg",
    "/assets/gallery/bbc.jpg",
    "/assets/gallery/bbc2.jpg",
    "/assets/gallery/bbc3.jpg",
];
