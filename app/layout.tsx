'use client';

import '../styles/globals.css';
import { motion } from 'framer-motion';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <motion.body
        initial={{ backgroundColor: '#03313E' }}
        animate={{
          backgroundColor: '#034159',
          transition: {
            easings: 'easeInOut',
            duration: '1300ms',
          },
        }}
        className="bg-gradient-to-b bg-repeat-y h-[100vh] top-0 left-0 w-[100vw] overflow-hidden"
      >
        {children}
      </motion.body>
    </html>
  );
}
