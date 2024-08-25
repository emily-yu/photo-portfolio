"use client";

import { CMS_NAME } from "@/lib/constants";
import classNames from "classnames";
import Image from 'next/image'
import { Carousel, Card } from "./apple-cards-carousel";
import MyAccordion from "./mui-accordion";
import { useRef } from "react";
// src/app/_components/ui/apple-cards-carousel.tsx
import Stack from '@mui/material/Stack';


export function Events() {

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
        <div>
        <a href="/login">Login</a>
        <a href="/gallery">Gallery</a>
        <a href="/events">Events</a>
        <a href="/contact">Contact</a>
        </div>
        <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">As an athlete turned photographer, I see with the players.</h4>
        </div>
        </div>
        </section>
    

    {/* extra image galery 2 */}
    <section>
          <AppleCardsCarouselDemo/>
    </section>

    <p>interested in workin together bud? CONTACT me here</p>

    {/* </TracingBeam> */}
    </>
  );
}


export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
 
  return (
    <div className="w-full h-full py-20">
      {/* <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Get to know your iSad.
      </h2> */}
      <Carousel items={cards} />
    </div>
  );
}
 
const DummyContent = () => {
  return (
    <>
      {/* {[...new Array(3).fill(1)].map((_, index) => { */}
        {/* return ( */}
          <div
            // key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                In collaboration with Seattle Badminton Club.
              </span>{" "}
              beep bope
            </p>
            <Image
              src="/assets/middle1.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        {/* ); */}
      {/* })} */}
    </>
  );
};
 
const data = [
  {
    category: "Seattle, WA",
    title: "Washington Open 2024",
    src: "/assets/middle1.png",
    content: <DummyContent />,
  },
  {
    category: "Sacramento, CA",
    title: "NCBC Spring Open 2024",
    src: "/assets/middle1.png",
    content: <DummyContent />,
  },
  {
    category: "San Jose, CA",
    title: "SJSU Spring Smashoff 2023",
    src: "/assets/middle1.png",
    content: <DummyContent />,
  },
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "/assets/middle1.png",
    content: <DummyContent />,
  },
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "/assets/middle1.png",
    content: <DummyContent />,
  },
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "/assets/middle1.png",
    content: <DummyContent />,
  },
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "/assets/middle1.png",
    content: <DummyContent />,
  },
];


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