"use client";

import Table from "@/components/table/table";
import Table2 from "@/components/tableV2/table";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  // const yPosAnim = useTransform(
  //   scrollYProgress,
  //   [0, 0.3, 0.4, 1],
  //   [100, -700, -900, -1500]
  // );
  const yPosAnim = useTransform(
    scrollYProgress,
    [0, 0.21, 0.6, 0.61, 1],
    [100, -550, -650, -800, -1600]
  );
  // const xPosAnim = useTransform(
  //   scrollYProgress,
  //   [0, 0.2, 0.21, 0.6, 1],
  //   [0, 0, 150, 170, 170]
  // );

  const xPosAnim = useTransform(
    scrollYProgress,
    [0, 0.2, 0.21, 0.6, 1],
    [0, 0, 150, -850, -850]
  );

  const rotAnim = useTransform(
    scrollYProgress,
    [0, 0.2, 0.21, 0.6, 0.61, 1],
    [0, 0, -15, -15, 0, 0]
  );

  return (
    <main className="flex min-h-[9999px] flex-col items-center justify-between">
      <motion.div
        style={{
          position: "fixed",
          top: yPosAnim,
          x: xPosAnim,
          rotate: rotAnim,
        }}
        transition={{ type: "spring" }}
      >
        <Table2 />
      </motion.div>
    </main>
  );
}
