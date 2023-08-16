import React from "react";
import Image from "next/image";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="bg-black grid grid-cols-3 p-16 ">
      <div></div>
      <img
        className=" col-start-1 col-end-2"
        src="/img/logo_detail.png"
        width={300}
        height={100}
        alt={"logo"}
      />
    </div>
  );
}

export default Footer;
