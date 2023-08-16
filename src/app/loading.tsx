import { Spin } from "antd";
import React from "react";

function Loading() {
  return (
    <div className=" w-screen h-screen flex justify-center items-center flex-col">
      <Spin className=" w-[100px] h-[100px]" />
      <p>Loading.....!</p>
    </div>
  );
}

export default Loading;
