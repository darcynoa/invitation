"use client";

import "../styles/globals.css";
import { motion } from "framer-motion";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <motion.body className="bg-[#121212] h-screen">{children}</motion.body>
    </html>
  );
}
