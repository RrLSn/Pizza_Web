import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const BaseList = (props) => {
  const { imgUrl, name } = props;

  const [selectedBase, setSelectedBase] = useState([]);
  useEffect(() => {
    sessionStorage.setItem("SelectedBase", JSON.stringify(selectedBase));
  }, [selectedBase]);

<<<<<<< HEAD
=======
  console.log(selectedBase);

>>>>>>> e51c4ecbd6e5205aac59e0f31e5466f64b4ac878
  const handleBaseClicked = () => {
    setSelectedBase(name);
  };

  return (
<<<<<<< HEAD
    <div className="minw-[10vw] w-[max-content] font-bold h-[max-content] text-center m-auto mb-5">
=======
    <div className="lg:w-[16vw] w-[40vw] font-bold h-[max-content] text-center m-auto mb-5">
>>>>>>> e51c4ecbd6e5205aac59e0f31e5466f64b4ac878
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
