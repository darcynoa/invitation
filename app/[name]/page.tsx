"use client";

import React from "react";

import { myPeople } from "@/utils/data";
import Globe from "@/components/globe";
import Response from "@/components/response";
import "../../styles/globe.css";

interface Params {
  name: "ken" | "matthew" | "fumiko";
}

interface Person {
  role: string;
}

export default function Page({ params }: { params: Params }) {
  const name = params.name;
  const person: Person = myPeople[name];
  return (
    <>
      <div className="w-full h-[50vh] flex justify-center items-end">
        <div className="w-1/2 flex flex-col gap-5 -translate-x-6">
          <h1 className="text-[#DEE4EE] text-[100px] font-black uppercase tracking-wide">
            {name}&mdash;
          </h1>
          <h1 className="text-[#DEE4EE] text-[100px] font-black uppercase tracking-wide leading-[1.15]">
            Will you be my {person.role}?
          </h1>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <Globe />
        <div className="flex flex-col">
          <Response name="yes" url="/thankyou" />
          <Response
            name="no"
            url="https://media4.giphy.com/media/TZBED1pP5m8N2/giphy.gif?cid=ecf05e47wdhvmclofqmeluu0wydwtoyhlcyoe8w5lktgoc2g&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          />
        </div>
      </div>
    </>
  );
}
