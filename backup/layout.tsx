"use client";

import "../styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#121212]">
      <body className=" h-screen">
        <AnimatePresence>{children}</AnimatePresence>
      </body>
    </html>
  );
}
