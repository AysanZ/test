import localFont from "next/font/local";

export const dana = localFont({
  src: [
    {
      path: "./fonts/dana-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/dana-demibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/dana-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/dana-regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-dana",
});


