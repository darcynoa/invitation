'use client';
// import Image from 'next/image'
import { Inter } from 'next/font/google';
import { motion } from 'framer-motion';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <motion.h1
      initial={{ y: '90vh', opacity: 0 }}
      animate={{
        y: '50vh',
        opacity: 1,
        transition: {
          ease: 'easeInOut',
          duration: '1',
        },
      }}
      className={`text-[#0CF25D] ${inter.className} font-extrabold text-center text-[9rem] absolute`}
    >
      Hello world!
    </motion.h1>
  );
}
