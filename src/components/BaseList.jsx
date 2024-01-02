import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { BaseListDatas } from "@/data";

const BaseList = (props) => {
  const [selectedBase, setSelectedBase] = useState("");
  const { imgUrl, name, params } = props;

  return (
    <div className="w-[17vw] font-bold h-[max-content] text-center">
      <Image src={imgUrl} width={200} height={30} alt="Pizza" priority />
      <Link href={`/Toppings`} className="hover:text-red-200">
        {name}
      </Link>
    </div>
  );
};

export default BaseList;
