import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";

import { AppProps } from "next/app";

import "../../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={router.pathname}>
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
