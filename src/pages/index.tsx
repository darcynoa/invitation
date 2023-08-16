import Image from "next/image";
import { Inter } from "next/font/google";

import { motion } from "framer-motion";

import Countdown from "@/src/components/countdown";
import Globe from "@/src/components/globe";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="w-100 h-screen flex flex-col gap-[3rem] justify-center items-center bg-red"
    >
      <Countdown />
      <Globe />
    </motion.div>
  );
}
