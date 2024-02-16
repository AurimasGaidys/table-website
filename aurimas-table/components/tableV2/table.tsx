"use client";
import React from "react";
import Image from "next/image";
import { ItemContent } from "./items/itemBag";
import { UserContent } from "./items/userContent";

const Table2 = (props: any) => {
  return (
    <div className="w-[3000px] h-[3000px] bg-[url('/kd/bg.jpg')]">
      <UserContent name={"Aurimas"} />
      <ItemContent name={"Secret stuff"} x={0} y={300} rotation={10} />
    </div>
  );
};

export default Table2;
