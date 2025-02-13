import {
  Geist,
  Geist_Mono,
  Pixelify_Sans,
  Press_Start_2P,
  Syne_Mono,
} from "next/font/google";

export const geistSansInit = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMonoInit = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const pixelifyInit = Pixelify_Sans({
  subsets: ["latin"],
  variable: "--font-pixelify-sans",
});

const pressStartInit = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start-2p",
});

const SyneMonoInit = Syne_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-syne-mono",
});

export const geistSans = geistSansInit.variable;
export const geistMono = geistMonoInit.variable;
export const pixelify = pixelifyInit.variable;
export const pressStart = pressStartInit.variable;
export const SyneMono = SyneMonoInit.variable;
