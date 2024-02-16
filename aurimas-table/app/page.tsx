"use client";

import Table from "@/components/table/table";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yPosAnim = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    [100, -1500, -1500]
  );
  const xPosAnim = useTransform(
    scrollYProgress,
    [0, 0.1, 0.3, 1],
    [100, 100, -1500, -1500]
  );

  const rotAnim = useTransform(
    scrollYProgress,
    [0, 0.1, 0.11, 0.3, 0.31, 1],
    [0, 0, -15, -15, 0, 0]
  );

  return (
    <main className="flex min-h-[9999px] flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex bg-[#333333]">
        <motion.div
          style={{
            position: "fixed",
            top: yPosAnim,
            x: xPosAnim,
            rotate: rotAnim,
          }}
          transition={{ type: "spring" }}
        >
          <Table />
        </motion.div>
        <div></div>
      </div>
    </main>
  );
}
