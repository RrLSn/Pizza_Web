
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div
  className="bg-[url('/Media/slider1.webp')] bg-center bg-cover bg-no-repeat w-full h-screen text-[#fcecfb] flex flex-col justify-center items-center relative z-10"
    >
      <div className="w-[35rem] lg:text-6xl text-4xl font-bold flex flex-col lg:ml-0 ml-[15rem]">
        <h1>Welcome,</h1>
        <h1>we offer the Best</h1>
        <div className="lg:w-[18rem] w-[10rem] lg:h-[6rem] h-[3rem] bg-[#242424] flex justify-center items-center rounded-lg lg:text-7xl text-3xl">
          <h1 className="font-bold text-[#fab940]">Pizza</h1>
        </div>
        <h1>in Town</h1>
        <Link href="/Base" className=" w-[10rem] h-12 rounded-full text-[24px] flex justify-center items-center cursor-pointer hover:text-[#fab940] bg-black">Order Now</Link>
      </div>
    </div>
  );
};

export default page;
