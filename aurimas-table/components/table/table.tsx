"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

const Table = (props: any) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const planPositions = [
    { x: 0, y: 0 },
    { x: 0, y: 85 },
    { x: 0, y: 140 },
    { x: 0, y: 210 },
    { x: 0, y: 280 },
    { x: 310, y: 50 },
    { x: 320, y: 100 },
  ];

  for (let i = 0; i < 30; i++) {
    for (let j = 0; j < 30; j++) {
      planPositions.push({ x: 320 * i, y: 85 * j });
    }
  }

  useEffect(() => {
    const canvas = canvasRef?.current;
    const context = canvas?.getContext("2d");

    const draw = (ctx: any) => {
      ctx.fillStyle = "#000000";
      ctx.beginPath();
      ctx.arc(50, 100, 20, 0, 2 * Math.PI);
      ctx.fill();
      ctx.strokeStyle = "red";
      ctx.strokeRect(0, 0, canvas?.width, canvas?.height);
    };

    if (canvas && context) {
      canvas.width = 3000;
      canvas.height = 3000;

      // draw samething.
      draw(context);

      // Get the `img` from reference
      const image = imgRef.current;

      if (image === null) return;

      // Draw the image to the context
      planPositions.map((x) => {
        context.drawImage(image, x.x, x.y);
      });
    }
  }, []);

  return (
    <>
      <canvas ref={canvasRef} {...props} />
      <Image
        ref={imgRef}
        src="/plank.jpg"
        alt="Next.js Logo"
        width={200}
        height={20}
        priority
        draggable="false"
      />
    </>
  );
};

export default Table;
