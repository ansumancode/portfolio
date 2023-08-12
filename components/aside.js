import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  LiaLinkedinIn,
  LiaFacebookF,
  LiaInstagram,
  LiaTwitter,
  LiaCalendar,
  LiaMapMarkerAltSolid,
  LiaMailBulkSolid,
} from "react-icons/lia";
import { parseISO, format } from "date-fns";
import { client } from "../pages/api/client";
import imageUrlBuilder from '@sanity/image-url'


function formatDate(dateString) {
  const date = parseISO(dateString);
  const formattedDate = format(date, "MMMM do',' yyyy");
  return formattedDate;
}


const Aside = ({ profile }) => {
  const [profileData] = profile;
  // console.log(profileData);

  const builder = imageUrlBuilder(client)

  return (
    <aside
      className="md:sticky top-10 md:z-40 md:flex-2 md:w-64 md:h-screen transition-transform  sm:translate-x-0 sm:w-full"
      aria-label="Sidebar"
    >
      <div className="h-full px-4 py-4 overflow-y-auto ">
      {
        profileData.image?
        <div className="flex flex-col items-center relative overflow-hidden md:w-full h-[12.5rem] rounded-3xl sm:w-64 w-64 my-0 mx-auto sm:my-0 sm:mx-auto">
          <Image
            src={builder.image(profileData.image.asset._ref).url()}
            width={500}
            height={500}
            className="md:object-cover absolute left-0 top-0 w-full h-full"
            alt="Profile"
          />
        </div>: null

      }
        
        <div className="my-5 text-center">
          {profileData ? (
            <h1 className="text-2xl font-bold">
              {profileData.firstname}{" "}
              <span className="font-normal">{profileData.lastname}</span>
            </h1>
          ) : null}

          <div className="my-5 text-center">
            {profileData ? (
              <span className="text-sm bg-gray-900 p-3 rounded-full c-font">
                {profileData.designation}
              </span>
            ) : null}
          </div>
        </div>
        <div className="my-8 text-center flex justify-center align-middle">
          <Link href="/" className="px-2">
            <LiaLinkedinIn />
          </Link>
          <Link href="/" className="px-2">
            <LiaFacebookF />
          </Link>
          <Link href="/" className="px-2">
            <LiaInstagram />
          </Link>
          <Link href="/" className="px-2">
            <LiaTwitter />
          </Link>
        </div>
        <div className="my-5">
          <ul>
            {profileData.dateOfBirth ? (
              <li className="flex items-center py-2 text-font-size-12px ">
                <LiaCalendar className="mr-2" />{" "}
                {formatDate(profileData.dateOfBirth)}
              </li>
            ) : null}
            {profileData.address ? (
              <li className="flex items-center py2 text-font-size-12px">
                <LiaMapMarkerAltSolid className="mr-2" /> {profileData.address}
              </li>
            ) : null}
            {profileData.email ? (
              <li className="flex items-center py-2 text-font-size-12px">
                <LiaMailBulkSolid className="mr-2" /> {profileData.email}
              </li>
            ) : null}
          </ul>
        </div>
        <div className="mx-5 text-center my-10">
          <button className="border border-gray-200 rounded-lg py-2 px-5 hover:bg-gray-800">
            DOWNLOAD CV
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
