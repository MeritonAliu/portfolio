"use client";

import { motion } from "framer-motion";


export default function Transition({ children }) {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y:0, opacity: 1 }}
      exit={{ ease: 'easeInOut', opacity: 0, duration: 3}}
    >
      {children}
    </motion.div>
  );
}