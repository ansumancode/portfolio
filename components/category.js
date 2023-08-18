"use client";
import Image from "next/image";
import React, { memo } from "react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../pages/api/client";
// import PortableText from "react-portable-text";
import Link from "next/link";
import { useRouter } from "next/router";

const Category = ({ researchData, categoryMenu }) => {
  const builder = imageUrlBuilder(client);
  const router = useRouter();
  const categoryChangeUrl = router.query.category;

  return (
    <div className="p-4 flex-1 ">
      <div className="p-4 border-2 border-gray-800 border-dashed rounded-lg dark:border-gray-700">
        <div className="pdf-viewer">
          <div className="grid md:grid-cols-3 gap-4 ">
            {researchData.map((data) => {
              const maxWords = 15; // Adjust as needed
              const words = data.content[0].children[0].text && data.content[0].children[0].text.split(" ");
              let truncatedText = words.slice(0, maxWords).join(" ");

              if (words.length > maxWords) {
                truncatedText += " ...";
              }
              return categoryMenu?.map((categorySlug) => {
                return categorySlug?.slug?.current == router.query.category
                  ? data?.categories &&
                      data?.categories.map((dataforCatId, i) => {
                        return categorySlug?._id == dataforCatId?._ref ? (
                          <Link
                            href={`/research/${categoryChangeUrl}/${data?.slug?.current}`}
                            key={i}
                          >
                            <div className="border-2 border-gray-900 rounded-2xl overflow-hidden cursor-pointer hover:skew-y-2">
                              <div className="flex flex-col items-center relative overflow-hidden md:w-full h-[10.5rem]  sm:w-64 w-full my-0 mx-auto sm:my-0 sm:mx-auto ">
                                <Image
                                  src={
                                    data?.image?.asset?._ref &&
                                    builder
                                      .image(data?.image?.asset?._ref)
                                      .url()
                                  }
                                  width={500}
                                  height={500}
                                  className="md:object-cover absolute left-0 top-0 md:w-full md:h-full"
                                  alt="Profile"
                                />
                              </div>
                              <div className="p-4">
                                <p className="m-0">{data.title}</p>
                                <article className="m-0 text-gray-400 text-xs">
                                  <p className="text-xs">{truncatedText}</p>
                                </article>
                              </div>
                            </div>
                          </Link>
                        ) : null;
                      })
                  : null;
              });
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Category);
