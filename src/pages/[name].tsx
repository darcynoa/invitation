"use client";

import React from "react";
import { motion } from "framer-motion";

import { myPeople } from "@/utils/data";
import Globe from "@/src/components/globe";
import Response from "@/src/components/response";
import { useRouter } from "next/router";

interface Params {
  name: "ken" | "matthew" | "fumiko";
}

interface Person {
  role: string;
}

export default function Page({ params }: { params: Params }) {
  const router = useRouter();
  const { name } = router.query;
  console.log(name);
  return (
    <div className="h-screen w-full">
      <div className="w-full h-[50vh] flex justify-center items-end">
        <div className="flex flex-col gap-5 -translate-x-6 text-[5rem] px-40">
          <h1 className="text-[#DEE4EE] font-black uppercase tracking-wide">
            {name}&mdash;
          </h1>
          <h1 className="text-[#DEE4EE] font-black uppercase tracking-wide leading-[1.15]">
            Will you be my groomsman?
          </h1>
        </div>
      </div>
      <div className="w-1/2 h-[10rem] mx-auto flex items-center gap-[30rem]">
        <Globe />
        <div className="flex flex-col gap-2">
          <Response name="yes" url="/thankyou" />
          <Response
            name="no"
            url="https://media4.giphy.com/media/TZBED1pP5m8N2/giphy.gif?cid=ecf05e47wdhvmclofqmeluu0wydwtoyhlcyoe8w5lktgoc2g&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          />
        </div>
      </div>
    </div>
  );
}
