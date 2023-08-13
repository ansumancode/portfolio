import React from "react";
import FullContent from "./fullContent";
import ThreeColumnSection from "./threeColumnSection";
import Skill from "./skill";

const InnerComponent = () => {
  return (
    <div className="p-4 flex-1 ">
      <div className="p-4 border-2 border-gray-800 border-dashed rounded-lg dark:border-gray-700">
        <FullContent />
        <ThreeColumnSection />
        <Skill />
      </div>
    </div>
  );
};

export default InnerComponent;
