"use client";

import { motion } from "framer-motion";


export default function Transition({ children }) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ ease: 'easeInOut', opacity: 0, duration: 4 }}
    >
      {children}
    </motion.div>
  );
}