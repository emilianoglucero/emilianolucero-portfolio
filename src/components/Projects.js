import React from "react"
import { Image } from "../components/Image"

export const Projects = ({ info }) => {
  return (
    <div className="flex flex-col flex-1 max-w-sm m-auto overflow-hidden transition duration-300 transform skew-y-12 rounded shadow-lg my-11 hover:shadow-md hover:opacity-80">
      <a
        className="transition duration-250 hover:scale-95"
        href={info.href}
        rel="noreferrer"
        target="_blank"
      >
        <Image filename={info.filename} />
      </a>
      <div className="flex-grow px-6 py-4">
        <div className="mb-2 text-xl font-bold">{info.title}</div>
        <p className="text-base text-gray-700">{info.description}</p>
      </div>
      <div className="px-6 py-4">
        {info.tag1 !== "" ? (
          <span className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 transition delay-75 bg-gray-200 rounded-full duration-400 hover:bg-transparent">
            #{info.tag1}
          </span>
        ) : (
          ""
        )}
        {info.tag2 !== "" ? (
          <span className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 transition delay-75 bg-gray-200 rounded-full duration-400 hover:bg-transparent">
            #{info.tag2}
          </span>
        ) : (
          ""
        )}
        {info.tag3 !== "" ? (
          <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 transition delay-75 bg-gray-200 rounded-full duration-400 hover:bg-transparent">
            #{info.tag3}
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  )
}
