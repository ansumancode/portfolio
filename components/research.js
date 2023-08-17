"use client";
import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../pages/api/client";

const Research = ({ categoryMenu }) => {
  
  const builder = imageUrlBuilder(client);

  return (
    <div className="p-4 flex-1 ">
      <div className="p-4 border-2 border-gray-800 border-dashed rounded-lg dark:border-gray-700">
        <div className="pdf-viewer">
          <div className="grid md:grid-cols-3 gap-4 ">
            {categoryMenu?.map((category, i) => {
              return (
                <Link href={`research/${category?.slug?.current}`} key={i}>
                  <div className="border-2 border-gray-900 rounded-2xl overflow-hidden cursor-pointer hover:skew-y-2">
                    <div className="flex flex-col items-center relative overflow-hidden md:w-full h-[10.5rem]  sm:w-64 w-64 my-0 mx-auto sm:my-0 sm:mx-auto ">
                      <Image
                        src={builder.image(category?.image?.asset?._ref).url()}
                        width={500}
                        height={500}
                        className="md:object-cover absolute left-0 top-0 md:w-full md:h-full"
                        alt="Profile"
                      />
                    </div>

                    <p className="p-4 m-0">{category?.title}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Research);
