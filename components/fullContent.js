import React, { useContext } from "react";
import { createDataContext } from "../pages/index";
import PortableText from "react-portable-text";

const FullContent = () => {
  const getAboutMeData = useContext(createDataContext);

  const [data] = getAboutMeData;
  return (
    <div className="items-center justify-center mb-4 ">
      {data.infoTitle ? (
        <>
          <h2 className="text-xl font-normal">{data.infoTitle}</h2>
          <hr className="h-1 my-8 bg-gray-800 border-0 dark:bg-gray-700 w-10 mt-2 mb-6 rounded-full bg-gradient-to-r from-gray-500"></hr>
        </>
      ) : null}

      <article>
        <PortableText
          content={data.content}
          serializers={{
            normal: (props) => <p className="text-xs" {...props} />,
          }}
        />
      </article>
    </div>
  );
};

export default FullContent;
