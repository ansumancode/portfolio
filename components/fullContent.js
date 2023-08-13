import React, { useContext } from 'react'
import {createDataContext} from "../pages/index"

const FullContent = () => {

  const getAboutMeData = useContext(createDataContext)

  console.log(getAboutMeData, "api works")

  return (
    <div className="items-center justify-center mb-4 ">
          <h2 className="text-xl font-normal">About Me</h2>
          <hr className="h-1 my-8 bg-gray-800 border-0 dark:bg-gray-700 w-10 mt-2 mb-6 rounded-full bg-gradient-to-r from-gray-500"></hr>
          <article>
            <p className="text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </article>
        </div>
  )
}

export default FullContent
