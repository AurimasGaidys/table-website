"use client";
import React, { useEffect, useRef } from "react";

const Table = (props: any) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const draw = (ctx: any) => {
      ctx.fillStyle = "#000000";
      ctx.beginPath();
      ctx.arc(50, 100, 20, 0, 2 * Math.PI);
      ctx.fill();
    };

    const context = canvasRef?.current?.getContext("2d");
    if (context) {
      // draw samething.
      draw(context);
    }
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};

export default Table;
