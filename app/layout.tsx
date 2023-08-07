"use client";

import "../styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AnimatePresence mode="sync">
        <motion.body // initial state opacity
          initial={{ opacity: 0 }}
          //animation of component appearence
          animate={{ opacity: 1 }}
          // how your element will appears f.e(duration in seconds)
          transition={{ delay: 0.5 }}
          // your exit animation
          exit={{ opacity: 0 }}
          className="bg-[#121212] h-screen"
        >
          {children}
        </motion.body>
      </AnimatePresence>
    </html>
  );
}
