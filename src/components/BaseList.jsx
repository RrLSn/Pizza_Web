import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

const BaseList = (props) => {
  const { imgUrl, name } = props;

  const [selectedBase, setSelectedBase] = useState([]);
  sessionStorage.setItem("SelectedBase", JSON.stringify(selectedBase));

  const handleBaseClicked = () => {
    setSelectedBase(name);
  };

  return (
    <div className="w-[17vw] font-bold h-[max-content] text-center">
      <Image src={imgUrl} width={200} height={30} alt="Pizza" priority />
      <Link
        href={`/Toppings`}
        onClick={handleBaseClicked}
        className="hover:text-red-200"
      >
        {name}
      </Link>
    </div>
  );
};

export default BaseList;
