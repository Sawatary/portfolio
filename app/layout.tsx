import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const animeAce = localFont({
  src: [
    {
      path: "./fonts/animeace2_reg.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/animeace2_ital.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/animeace2_bld.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Lee163",
  description:
    "Web Developer based in the Russia. He specializes in building web applications using modern technologies. He is passionate about building products that make a difference. He is currently a Undergraduate Student at the Cavite State University - Main Campus.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${animeAce.className} bg-dark-green text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
