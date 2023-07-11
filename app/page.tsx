"use client";
import Globe from "@/components/globe";
import Countdown from "@/components/countdown";
import "../styles/globe.css";
// import Image from 'next/image'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col gap-3 justify-center items-center w-full h-full">
      <Countdown />
      <div className="globe-container">
        <Globe />
      </div>
    </div>
  );
}
