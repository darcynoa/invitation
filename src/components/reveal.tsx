"use client";
import React, { useState } from "react";
import Link from "next/link";

import { motion } from "framer-motion";
import { myPeople } from "@/utils/data";

function Reveal() {
  const [revealed, setRevealed] = useState(false);
  return revealed ? (
    <Choice />
  ) : (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 1,
        duration: 1 / 2,
      }}
      exit={{
        opacity: 0,
      }}
      className="w-full z-[1000] text-center text-[#416CB1] text-sm font-black uppercase tracking-[2.52px] drop-shadow-[0_0_8px_rgba(76,119,189,1)] hover:text-[#7C9CCF] hover:drop-shadow-[0_0_12px_rgba(208,214,225,1)] hover:cursor-pointer transition-all"
      onClick={() => {
        setRevealed(true);
      }}
    >
      click&nbsp;&nbsp; to&nbsp;&nbsp; reveal
    </motion.div>
  );
}

function Choice() {
  const people = Object.entries(myPeople);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 1,
          delay: 1,
          staggerChildren: 0.2,
          delayChildren: 0.3,
        },
      }}
      className="w-2/3 flex justify-between items-center"
    >
      {people.map(([key, value]) => {
        return (
          <Link
            key={key}
            className="text-[#DEE4EE] text-l font-black uppercase tracking-[3.60px] hover:text-[#7C9CCF] hover:drop-shadow-[0_0_12px_rgba(208,214,225,1)] hover:cursor-pointer transition-all"
            href="/name/[slug["
            as={`/${key}`}
          >
            {key}
          </Link>
        );
      })}
    </motion.div>
  );
}

export default Reveal;
