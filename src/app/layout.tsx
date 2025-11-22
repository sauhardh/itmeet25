import type { Metadata } from "next";
import { Rubik, Rubik_Mono_One } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/custom/Navbar";

const rubik = Rubik({
  variable: "--rubik",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const rubikMonoOne = Rubik_Mono_One({
  variable: "--rubik-mono-one",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "IT Meet 2025",
  description:
    "'IT MEET' is an ICT event organized by KUCC and DoCSE to encourage interaction between students from various institutions of Nepal and youths from various walks of life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${rubik.variable} ${rubikMonoOne.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
