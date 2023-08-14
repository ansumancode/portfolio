import React from "react";
import Image from "next/image";
import { createDataContext } from "../pages/index";
import { useContext } from "react";
import { client } from "../pages/api/client";
import imageUrlBuilder from "@sanity/image-url";

const ThreeColumnSection = () => {
  const infoData = useContext(createDataContext);
  const builder = imageUrlBuilder(client);
  const [data] = infoData;

  return (
    <div className="grid md:grid-cols-3 gap-4 mb-4 my-12">
      {data?.myInfo.map((myInfo, i) => {
        return(
        <div className="flex flex-col items-center relative overflow-hidden md:w-full h-[10.5rem] rounded-3xl sm:w-64 w-64 my-0 mx-auto sm:my-0 sm:mx-auto " key={i}>
          <Image src={builder.image(myInfo.image.asset._ref).auto('format').url()} width={50} height={50} alt="Profile" />
          <p className="text-sm font-normal mt-5 sub-title text-gray-500 text-center">
            {myInfo.addInfotitle}
          </p>
          <h3 className="text-center">{myInfo.addInfoDes}</h3>
        </div>
        )
      })}
    </div>
  );
};

export default ThreeColumnSection;
