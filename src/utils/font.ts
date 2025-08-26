import { Geist, Geist_Mono, Inter, DM_Sans } from "next/font/google";
import localFont from "next/font/local";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const goodlyFont = localFont({
  src: [
    {
      path: "../fonts/goodly-font/goodly-light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/goodly-font/goodly-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/goodly-font/goodly-semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/goodly-font/goodly-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/goodly-font/goodly-extralight.otf",
      weight: "200",
      style: "normal",
    },
  ],
  variable: "--font-goodly",
  display: "swap",
});
