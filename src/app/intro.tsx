"use client";

import classNames from "classnames";
import Image from 'next/image'
import { Carousel, Card } from "./components/ui/apple-cards-carousel";
import MyAccordion from "./components/ui/mui-accordion";
import { useRef } from "react";
import Stack from '@mui/material/Stack';
import { Blockquote } from "flowbite-react";
import { Header } from "./components/header";
import { FatQuote} from "@/app/components/quote";

export function Intro() {

  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: number) => {
    if (containerRef.current) {
      // Find the first image to get its width
      const firstImage = containerRef.current.querySelector('.image');
      if (firstImage) {
        const imageWidth = (firstImage as HTMLDivElement).offsetWidth;
        // Calculate the scroll amount
        const scrollAmount = imageWidth * direction;
        containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
    <Header/>
   <div className="image-slider gallerycontainer">
      <button className="prev" onClick={() => scroll(-1)}>&#10094;</button>
      <div className="wrapper">
        <div className="image-container" ref={containerRef}>
          <div className="image">
            <img src="/assets/head/1.jpg" alt="Image 1" />
          </div>
          <div className="image">
            <img src="/assets/head/2.jpg" alt="Image 2" />
          </div>
          <div className="image">
            <img src="/assets/head/3.jpg" alt="Image 3" />
          </div>
          <div className="image">
            <img src="/assets/head/4.jpg" alt="Image 3" />
          </div>
          <div className="image">
            <img src="/assets/head/5.jpg" alt="Image 3" />
          </div>
          <div className="image">
            <img src="/assets/head/6.jpg" alt="Image 3" />
          </div>
          {/* Add more images here */}
        </div>
      </div>
      <button className="next" onClick={() => scroll(1)}>&#10095;</button>
    </div>

    <section className="profile_container gallerycontainer">
      <Stack>
            <img className="profileImage" src="/assets/me.jpg" alt="Image 1" style={{marginBottom: "10px"}}></img>
            <MyAccordion/>
          </Stack>
      

      <Stack id="aboutMe" className="gallerycontainer">
        <p style={{paddingBottom: "10px"}}>My badminton journey began at Synergy Badminton Academy in Menlo Park. As an adult, my love for the game has guided me back to a place that I love and to this day, I continue competing while giving back to the community I love. </p>
        <p>I started taking photos in my spare time at tournaments while competing but it quickly grew into something more than that. Since then, I’ve worked with USAB events and shot for  10+ tournaments across the States, from the Bay Badminton Championships in Milpitas, CA to the Riaan New Jersey Open in New Jersey, NJ.</p>
      <FatQuote text="It may just be a hobby for you, but it is memories for us."/>
        <p style={{paddingTop: "20px", paddingBottom: "20px"}}>If you’re running a tournament, I’d love to work with you to capture your moments. I look forward to hearing from you - for projects, for feedback, or even just to talk badminton.</p>
      </Stack>
    </section>
    </>
  );
}