import localFont from "next/font/local";
import { Poppins, Noto_Sans, Noto_Sans_KR } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-notosans",
  display: "swap",
});

export const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-notosanskr",
  display: "swap",
});

// Local Font
export const kaveHaffer = localFont({
  src: [
    {
      path: "../fonts/Haffer-TRIAL-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Haffer-TRIAL-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Haffer-TRIAL-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-kave-haffer",
  display: "swap",
});

export const kaveHafferRegular = localFont({
  src: [
    {
      path: "../fonts/KaveHafferDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    // {
    //   path: "../fonts/HafferXH-TRIAL-SemiBold.woff2",
    //   weight: "500",
    //   style: "normal",
    // },
  ],
  variable: "--font-kave-haffertext",
  display: "swap",
});

export const martinaRegular = localFont({
  src: [
    {
      path: "../fonts/Martina-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-martina-regular",
  display: "swap",
});

export const martinaBold = localFont({
  src: [
    {
      path: "../fonts/Martina-Bold.woff",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-martina-bold",
  display: "swap",
});