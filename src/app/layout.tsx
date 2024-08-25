import Footer from "@/app/_components/ui/footer";
// import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/app/_components/ui/tracing-beam";
// import { FloatingNav } from "@/app/_components/floating-navbar";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Emily Yu | Photography`,
  description: `As an athlete turned photographer, I see with the players.`,
  openGraph: {
    // images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    {
      name: "Home",
      link: "/",
      // icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    // {
    //   name: "About",
    //   link: "/about",
    //   // icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    // },
    {
      name: "Events",
      link: "/events",
      // icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    // {
    //   name: "Contact",
    //   link: "/contact",
    //   // icon: (
    //     // <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
    //   // ),
    // },
  ];
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body
        className={cn(inter.className, "dark:bg-slate-900 dark:text-slate-400")}
      >
        {/* <ThemeSwitcher /> */}
        {/* <FloatingNav navItems={navItems} /> */}
        {/* <TracingBeam> */}
        {/* <div className="min-h-screen">{children}</div> */}
        <div>{children}</div>
        {/* </TracingBeam> */}
        <Footer />
      </body>
    </html>
  );
}
