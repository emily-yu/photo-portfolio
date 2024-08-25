"use client";

import { CMS_NAME } from "@/lib/constants";
import classNames from "classnames";
import Image from 'next/image'
import { Carousel, Card } from "./apple-cards-carousel";
import MyAccordion from "./mui-accordion";
import { useRef } from "react";
// src/app/_components/ui/apple-cards-carousel.tsx
import Stack from '@mui/material/Stack';


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
        {/* <TracingBeam> */}

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
    
    {/* todo */}
    {/* <section className="back">
    <div className="main-container">
        <div className="topcorner-absolute">
          <p>Bay Badminton Championships</p>
          <p>USAB Sanctioned Event</p>
          <p>Bay Badminton Center | Milpitas, CA</p>
        </div>
        <div id="icons-container">
            <div className="single-icon-container" id="one">
            <Image width={400} height={500} src="/assets/middle1.png" alt=""/>
            </div>
            <div className="single-icon-container" id="two">
            <Image width={900} height={500} src="/assets/middle2.jpg" alt=""/>
            </div>
            <div className="single-icon-container" id="three">
            <Image width={600} height={500} src="/assets/middle3.jpg" alt=""/>
            </div>
        </div>
        <div className="botcorner-absolute">
          <p>Riaan New Jersey Open</p>
          <p>USAB Sanctioned Event</p>
          <p>New Jersey Badminton Club | Montville, NJ</p>
        </div>
    </div>
    </section> */}

   <div className="image-slider">
      <button className="prev" onClick={() => scroll(-1)}>&#10094;</button>
      <div className="wrapper">
        <div className="image-container" ref={containerRef}>
          <div className="image">
            <img src="/assets/middle1.png" alt="Image 1" />
          </div>
          <div className="image">
            <img src="/assets/middle2.jpg" alt="Image 2" />
          </div>
          <div className="image">
            <img src="/assets/middle3.jpg" alt="Image 3" />
          </div>
          <div className="image">
            <img src="/assets/middle3.jpg" alt="Image 3" />
          </div>
          <div className="image">
            <img src="/assets/middle3.jpg" alt="Image 3" />
          </div>
          <div className="image">
            <img src="/assets/middle3.jpg" alt="Image 3" />
          </div>
          {/* Add more images here */}
        </div>
      </div>
      <button className="next" onClick={() => scroll(1)}>&#10095;</button>
    </div>

    <section style={{display:"flex"}}>
      {/* a expand */}
      <Stack>
            <img src="/assets/me.jpg" alt="Image 1" />
            <MyAccordion/>

          </Stack>
      

      {/* info section */}
      <div style={{padding: "50px", backgroundColor: "lightgrey"}}>
        <p>My badminton journey began at Synergy Badminton Academy in Menlo Park. As an adult, my love for the game has guided me back to a place that I love and to this day, I continue competing while giving back to the community I love. </p>
        <p>I started taking photos in my spare time at tournaments while competing but it quickly grew into something more than that. Since then, I’ve worked with USAB events and shot for  10+ tournaments across the States, from the Bay Badminton Championships in Milpitas, CA to the Riaan New Jersey Open in New Jersey, NJ.</p>
        <h3>“It may be a hobby for you, but it is memories for us.”</h3>
        <p>If you’re running a tournament, I’d love to work with you to capture your moments.</p>
        <p>I look forward to hearing from you - for projects, for feedback, or even just to talk badminton.</p>
        <p>emilyyu1030[at]gmail[dot]com</p>
        <p>Portfolio @ Facebook / Contact @ Instagram </p>
      </div>
    </section>


    {/* </TracingBeam> */}
    </>
  );
}




const ImageSlider: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: number) => {
    if (containerRef.current) {
      const far = containerRef.current.offsetWidth / 2 * direction;
      const pos = containerRef.current.scrollLeft + far;
      containerRef.current.scrollTo({ left: pos, behavior: 'smooth' });
    }
  };

  return (
    <div className="main">
      {/* <h1 className="title">Scrolling Image Slider</h1> */}
      <div className="wrapper">
        <button className="prev" onClick={() => scroll(-1)}>&#10094;</button>
        <div className="image-container asdf" ref={containerRef}>
          {[...Array(10)].map((_, index) => (
            <div className="image" key={index}>{index + 1}</div>
          ))}
        </div>
        <button className="next" onClick={() => scroll(1)}>&#10095;</button>
      </div>
    </div>
  );
};