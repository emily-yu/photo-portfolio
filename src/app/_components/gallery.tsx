"use client";
import { ParallaxScroll } from "./parallax-scroll";
import { Blockquote } from "flowbite-react";

export function Gallery() {
  return (
    <>
    <section>
    <div style={{textAlign: "center", padding: "5%"}}>

      <h2 className="text-5xl font-bold">Emily Yu</h2>
      <div style={{textAlign: "center"}}>
      <div id="nav">
        <a href="/">Home</a>
        {/* <a href="/login">Login</a> */}
        <a href="/gallery">Gallery</a>
        <a href="/events">Events</a>
        <a href="/contact">Contact</a>
        </div>
        <Blockquote>
      <svg
        className="mb-4 h-8 w-8 text-gray-400 dark:text-gray-600"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 14"
      >
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
      </svg>
      As an athlete turned photographer, I see with the players.
    </Blockquote>        </div>
        </div>
        </section>
        <div className="gallerycontainer">
        <ParallaxScroll images={images} />   

        </div>
        </>
);
}

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
    // "/assets/head/9.jpg",
];
