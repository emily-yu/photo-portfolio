"use client";

import classNames from "classnames";
import Image from "next/image";
import { Carousel, Card } from "../components/ui/apple-cards-carousel";
import MyAccordion from "../components/ui/mui-accordion";
import { useRef } from "react";
import Stack from "@mui/material/Stack";
import { Blockquote } from "flowbite-react";
import { Header } from "../components/header";

export function Events() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: number) => {
    if (containerRef.current) {
      // Find the first image to get its width
      const firstImage = containerRef.current.querySelector(".image");
      if (firstImage) {
        const imageWidth = (firstImage as HTMLDivElement).offsetWidth;
        // Calculate the scroll amount
        const scrollAmount = imageWidth * direction;
        containerRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  const data = [
    {
      category: "Seattle, WA",
      title: "Washington Open 2024",
      src: "/assets/card/wash.jpg",
      // content: <DummyContent />,
    },
    {
      category: "Sacramento, CA",
      title: "NCBC Spring Open 2024",
      src: "/assets/card/ncbc24.jpg",
      // content: <DummyContent />,
    },
    {
      category: "Milpitas, CA",
      title: "BBC Championships 2023",
      src: "/assets/middle1.png",
      // content: <DummyContent />,
    },
    {
      category: "Sacramento, CA",
      title: "NCBC Spring Open 2023",
      src: "/assets/card/ncbc23.jpg",
      // content: <DummyContent />,
    },
    {
      category: "Montville, NJ",
      title: "Riaan New Jersey Open 2023",
      src: "/assets/card/riaan.jpg",
      // content: <DummyContent />,
    },
    {
      category: "San Jose, CA",
      title: "SJSU Spring Smashoff 2023",
      src: "/assets/card/sjsu23.jpg",
      // content: <DummyContent />,
    },
    {
      category: "Davis, CA",
      title: "UC Davis Spring Open 2023",
      src: "/assets/card/davis23.jpg",
      // content: <DummyContent />,
    },
    {
      category: "Berkeley, CA",
      title: "Golden Bear XVIII",
      src: "/assets/card/berk23.jpg",
      // content: <DummyContent />,
    },
    {
      category: "Milpitas, CA",
      title: "BBC Championships 2022",
      src: "/assets/card/bbc23.jpg",
      // content: <DummyContent />,
    },
    {
      category: "Los Angeles, CA",
      title: "UCLA Spring Open 2023",
      src: "/assets/card/la.jpg",
      // content: <DummyContent />,
    },
    {
      category: "Berkeley, CA",
      title: "Golden Bear XVII",
      src: "/assets/card/berk22.jpg",
      // content: <DummyContent />,
    },
    {
      category: "Davis, CA",
      title: "UC Davis Spring Open 2022",
      src: "/assets/card/davis22.jpg",
      // content: <DummyContent />,
    },
    {
      category: "Montville, NJ",
      title: "Riaan New Jersey Open 2022",
      src: "/assets/card/riaanold.jpg",
      // content: <DummyContent />,
    },
    {
      category: "Irvine, CA",
      title: "UCI Anteater Open 2022",
      src: "/assets/card/irv.jpg",
      // content: <DummyContent />,
    },
  ];

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <>
      <Header />
      <div className="w-full" style={{ marginTop: "-5%", marginBottom: "10%" }}>
        <Carousel items={cards} />
      </div>
    </>
  );
}

// const DummyContent = () => {
//   return (
//     <>
//       {/* {[...new Array(3).fill(1)].map((_, index) => { */}
//         {/* return ( */}
//           <div
//             // key={"dummy-content" + index}
//             className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
//           >
//             <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
//               <span className="font-bold text-neutral-700 dark:text-neutral-200">
//                 In collaboration with Seattle Badminton Club.
//               </span>{" "}
//               {/* beep bope */}
//             </p>
//             <Image
//               src="/assets/middle1.png"
//               alt="Macbook mockup from Aceternity UI"
//               height="500"
//               width="500"
//               className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
//             />
//           </div>
//         {/* ); */}
//       {/* })} */}
//     </>
//   );
// };
