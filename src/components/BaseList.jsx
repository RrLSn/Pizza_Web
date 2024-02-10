import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const BaseList = (props) => {
  const { imgUrl, name } = props;

  const [selectedBase, setSelectedBase] = useState([]);
  useEffect(() => {
    sessionStorage.setItem("SelectedBase", JSON.stringify(selectedBase));
  }, [selectedBase]);

  const handleBaseClicked = () => {
    setSelectedBase(name);
  };

  return (
    <div className="w-[16vw] font-bold h-[max-content] text-center ">
      <Image src={imgUrl} width={200} height={30} alt="Pizza" priority />
      <Link
        href={`/Toppings`}
        onClick={handleBaseClicked}
        className="focus:text-[#fab940] hover:underline hover:text-[#fab940] focus:underline active:underline active:text-[#fab940]"
      >
        {name}
      </Link>
    </div>
  );
};

export default BaseList;
