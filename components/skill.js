import React from "react";
import { createDataContext } from "../pages/index";
import { useContext } from "react";

const Skill = () => {
  const skillData = useContext(createDataContext);
  const [data] = skillData;

  return (
    <div className="items-center justify-center mb-4 ">
      {data.skillTitle ? (
        <>
          <h2 className="text-xl font-normal">{data.skillTitle}</h2>
          <hr className="h-1 my-8 bg-gray-800 border-0 dark:bg-gray-700 w-10 mt-2 mb-6 rounded-full bg-gradient-to-r from-gray-500"></hr>
        </>
      ) : null}

      <div className="grid grid-cols-2 gap-4">
        {data.mySkills.map((skillSet, i) => {
          return (
            <div className="flex items-center justify-center mb-3" key={i}>
              <div className="w-full h-3 mb-0 bg-gray-800 rounded-full dark:bg-gray-700">
                <div
                  className="h-3 bg-gray-700 rounded-full dark:bg-blue-500 animate-progress flex items-center"
                  style={{ width: `${skillSet.addSkillRating}` }}
                >
                  <p className="text-xs m-0 px-1 text-gray-300">{skillSet.addSkill}</p>
                </div>
              </div>
              <p className="text-xs m-0 px-1 text-gray-500">{skillSet.addSkillRating}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skill;
