import React from "react";
import { motion } from "framer-motion";

function Globe() {
  return (
    <motion.div
      initial={{ y: 500 }}
      animate={{ y: 0, transition: { duration: 3, ease: "easeInOut" } }}
      exit={{ x: -20000, transition: { duration: 0.1, ease: "easeInOut" } }}
      className="globe-container"
    >
      <div className="sphere">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </motion.div>
  );
}

export default Globe;
