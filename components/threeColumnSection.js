import React from 'react'
import Image from "next/image";

const ThreeColumnSection = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-4 my-12">
          <div className="flex flex-col items-center relative overflow-hidden md:w-full h-[10.5rem] rounded-3xl sm:w-64 w-64 my-0 mx-auto sm:my-0 sm:mx-auto ">
            <Image
              src="/drink.png"
              width={50}
              height={50}
              alt="Profile"
            />
            <p className="text-sm font-normal mt-5 sub-title text-gray-500">Born and bought up in</p>
            <h3>Mangalore, KA, India</h3>
          </div>
          <div className="flex flex-col items-center relative overflow-hidden md:w-full h-[10.5rem] rounded-3xl sm:w-64 w-64 my-0 mx-auto sm:my-0 sm:mx-auto ">
            <Image
              src="/drink.png"
              width={50}
              height={50}
              alt="Profile"
            />
            <p className="text-sm font-normal mt-5 sub-title text-gray-500">Born and bought up in</p>
            <h3>Mangalore, KA, India</h3>
          </div>
          <div className="flex flex-col items-center relative overflow-hidden md:w-full h-[10.5rem] rounded-3xl sm:w-64 w-64 my-0 mx-auto sm:my-0 sm:mx-auto ">
            <Image
              src="/drink.png"
              width={50}
              height={50}
              alt="Profile"
            />
            <p className="text-sm font-normal mt-5 sub-title text-gray-500">Born and bought up in</p>
            <h3>Mangalore, KA, India</h3>
          </div>
          <div className="flex flex-col items-center relative overflow-hidden md:w-full h-[10.5rem] rounded-3xl sm:w-64 w-64 my-0 mx-auto sm:my-0 sm:mx-auto ">
            <Image
              src="/drink.png"
              width={50}
              height={50}
              alt="Profile"
            />
            <p className="text-sm font-normal mt-5 sub-title text-gray-500">Born and bought up in</p>
            <h3>Mangalore, KA, India</h3>
          </div>
          <div className="flex flex-col items-center relative overflow-hidden md:w-full h-[10.5rem] rounded-3xl sm:w-64 w-64 my-0 mx-auto sm:my-0 sm:mx-auto ">
            <Image
              src="/drink.png"
              width={50}
              height={50}
              alt="Profile"
            />
            <p className="text-sm font-normal mt-5 sub-title text-gray-500">Born and bought up in</p>
            <h3>Mangalore, KA, India</h3>
          </div>
          <div className="flex flex-col items-center relative overflow-hidden md:w-full h-[10.5rem] rounded-3xl sm:w-64 w-64 my-0 mx-auto sm:my-0 sm:mx-auto ">
            <Image
              src="/drink.png"
              width={50}
              height={50}
              alt="Profile"
            />
            <p className="text-sm font-normal mt-5 sub-title text-gray-500">Born and bought up in</p>
            <h3>Mangalore, KA, India</h3>
          </div>
         
          
        </div>
  )
}

export default ThreeColumnSection
