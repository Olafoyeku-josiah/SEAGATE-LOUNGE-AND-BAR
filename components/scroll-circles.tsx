"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function ScrollCircles() {
  const { scrollY } = useScroll();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Map scroll position to subtle vertical movement
  const y1 = useTransform(scrollY, [0, 1000], [0, -120]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 180]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -80]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#f8fafc] dark:bg-[#0b0f19] transition-colors duration-500">
      {/* Top Left Circle - Lighter Grey / Darker Grey */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-[10%] -left-[5%] w-[40vw] h-[40vw] rounded-full filter blur-[80px] opacity-40 dark:opacity-30 bg-slate-400 dark:bg-slate-700"
      />
      
      {/* Bottom Right Circle - Black / White */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[50%] -right-[5%] w-[50vw] h-[50vw] rounded-full filter blur-[100px] opacity-30 dark:opacity-20 bg-slate-800 dark:bg-slate-200"
      />

      {/* Middle Center Circle - Lighter Grey / Darker Grey */}
      <motion.div
        style={{ y: y3 }}
        className="absolute top-[20%] left-[25%] w-[30vw] h-[30vw] rounded-full filter blur-[60px] opacity-30 dark:opacity-20 bg-slate-500 dark:bg-slate-500"
      />
    </div>
  );
}
