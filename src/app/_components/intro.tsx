"use client";

import { CMS_NAME } from "@/lib/constants";
import classNames from "classnames";
import Image from 'next/image'
import { Carousel, Card } from "./apple-cards-carousel";
// src/app/_components/ui/apple-cards-carousel.tsx
export function Intro() {
  return (
    <>
        {/* <TracingBeam> */}

    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      {/* <h2> className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8"> */}
      <h2 className="text-5xl font-bold">
        Emily Yu
      </h2>
    </section>
    <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        {/* A statically generated blog example using{" "} */}
        As an athlete turned photographer, I see with the players.
        {/* <a
          href="https://nextjs.org/"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          Next.js
        </a>{" "}
        and {CMS_NAME}. */}
      </h4>
{/* 
    <section style={{backgroundColor:"lightblue", marginTop: "50px", marginBottom: "50px"}}>
      <h1>image gallery here</h1>
    </section> */}
    
    {/* <section>

    </section>
    <section className="back">
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
    </section>

    <section>

    </section> */}

    <section>
          <AppleCardsCarouselDemo/>
    </section>

    <section style={{display:"flex"}}>
      {/* a expand */}
      <div>
        <Image src="/assets/middle1.png" width={100} height={100} alt=""/>
        <h1>2022</h1>
        <p>UW Husky Open, Dave Freeman, UCI Anteater Collegiate, Riaan NJ Open, UC Davis Spring Open, UC Berkeley LXVI, UCLA Bruin Open, Bay Badminton Championships</p>
      </div>

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

    {/* extra image galery 2 */}
    <section>
          {/* <AppleCardsCarouselDemo/> */}
    </section>
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
