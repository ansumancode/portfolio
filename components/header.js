"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Header = ({ menu }) => {
  const router = usePathname();

  if (!Array.isArray(menu)) {
    return <div>Invalid menu data</div>;
  }

  const [menuData] = menu;

  return (
    <>
      <nav className="md:container md:mx-auto md:px-40 md:pt-20 md:pb-5 py-5 mx-2 md:justify-end md:flex justify-center flex">
        <ul className="flex md:justify-end sm:justify-center">
          {menuData?.items?.map((itemsData, i) => {
            return (
              <li
                className={`p-5 pt-2 pb-2 outline-none  rounded-3xl text-white cursor-pointer ${
                  router == itemsData?.slug?.current ? "bg-gray-700" : ""
                }`}
                key={i}
              >
                <Link href={itemsData.slug.current} className="outline-none">
                  {itemsData.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Header;
