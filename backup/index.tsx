"use client";
import Globe from "@/src/components/globe";
import Countdown from "@/src/components/countdown";
import { PageWrapper } from "@/components/page-wrapper";
import "../styles/globe.css";
// import Image from 'next/image'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <PageWrapper className="h-screenHeightWithoutHeader bg-[url(/chair.jpg)] bg-cover bg-center">
      <div className="flex flex-col gap-[3rem] justify-center items-center w-full h-full">
        <Countdown />
        <Globe />
      </div>
    </PageWrapper>
  );
}
