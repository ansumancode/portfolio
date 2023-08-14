import React from 'react'
import { headerMenu, profileData } from "./api/api";

const NotFound = () => {
  return (
    <div className="p-4 flex-1 ">
    <div className="p-4 border-2 border-gray-800 border-dashed rounded-lg dark:border-gray-700 flex items-center justify-center h-screen">
     <p className='m-0'>No Data Found</p>
    </div>
    </div>
  )
}

export async function getStaticProps() {
    const menu = await headerMenu();
    const profile = await profileData();
    return {
      props: {
        menu,
        profile,
      },
    };
  }

export default NotFound
