"use client";
import React from "react";
import Image from "next/image";
import { ItemContent } from "./items/itemBag";
import { UserContent } from "./items/userContent";
import { PositionHelper } from "./helpers/positionHelper";
import { Draggable } from "./helpers/draggable";

const Table2 = (props: any) => {
  return (
    <div className="w-[3000px] h-[3000px] bg-[url('/kd/bg.jpg')]">
      <PositionHelper x={0} y={100} rotation={0}>
        <UserContent name={"Aurimas"} />
      </PositionHelper>
      <PositionHelper x={230} y={600} rotation={10}>
        <Draggable>
          <ItemContent name={"Secret stuff"} />
        </Draggable>
      </PositionHelper>
    </div>
  );
};

export default Table2;
