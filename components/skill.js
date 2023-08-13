import React from "react";

const Skill = () => {
  return (
    <div className="items-center justify-center mb-4 ">
      <h2 className="text-xl font-normal">Skill</h2>
      <hr className="h-1 my-8 bg-gray-800 border-0 dark:bg-gray-700 w-10 mt-2 mb-6 rounded-full bg-gradient-to-r from-gray-500"></hr>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center justify-center">
          <div className="w-full h-4 mb-0 bg-gray-800 rounded-full dark:bg-gray-700">
            <div
              className="h-4 bg-gray-700 rounded-full dark:bg-blue-500 animate-progress flex items-center"
              style={{ width: "45%" }}
            >
              <p className="text-xs m-0 px-1 text-gray-500">HTML</p>
            </div>
          </div>
          <p className="text-xs m-0 px-1 text-gray-500">45%</p>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full h-4 mb-0 bg-gray-800 rounded-full dark:bg-gray-700">
            <div
              className="h-4 bg-gray-700 rounded-full dark:bg-blue-500 animate-progress flex items-center"
              style={{ width: "45%" }}
            >
              <p className="text-xs m-0 px-1 text-gray-500">HTML</p>
            </div>
          </div>
          <p className="text-xs m-0 px-1 text-gray-500">45%</p>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full h-4 mb-0 bg-gray-800 rounded-full dark:bg-gray-700">
            <div
              className="h-4 bg-gray-700 rounded-full dark:bg-blue-500 animate-progress flex items-center"
              style={{ width: "45%" }}
            >
              <p className="text-xs m-0 px-1 text-gray-500">HTML</p>
            </div>
          </div>
          <p className="text-xs m-0 px-1 text-gray-500">45%</p>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full h-4 mb-0 bg-gray-800 rounded-full dark:bg-gray-700">
            <div
              className="h-4 bg-gray-700 rounded-full dark:bg-blue-500 animate-progress flex items-center"
              style={{ width: "45%" }}
            >
              <p className="text-xs m-0 px-1 text-gray-500">HTML</p>
            </div>
          </div>
          <p className="text-xs m-0 px-1 text-gray-500">45%</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
