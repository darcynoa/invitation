import React from "react";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="font-serif text-yellow-300 w-full h-screen"
    >
      {children}
    </motion.div>
  );
};

export default Layout;
