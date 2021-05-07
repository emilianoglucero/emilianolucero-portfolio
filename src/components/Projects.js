import React from "react"
import { Image } from "../components/Image"

export const Projects = ({ info }) => {
  return (
    <div className="max-w-sm min-h-full rounded overflow-hidden shadow-lg flex-1 m-auto hover:shadow-md flex flex-col transform skew-y-12">
      <a
        className="hover:opacity-90"
        href={info.href}
        rel="noreferrer"
        target="_blank"
      >
        <Image filename={info.filename} />
      </a>
      <div className="px-6 py-4 flex-grow">
        <div className="font-bold text-xl mb-2">{info.title}</div>
        <p className="text-gray-700 text-base">{info.description}</p>
      </div>
      <div className="px-6 py-4">
        {info.tag1 !== "" ? (
          <span className="inline-block hover:bg-transparent bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #{info.tag1}
          </span>
        ) : (
          ""
        )}
        {info.tag2 !== "" ? (
          <span className="inline-block hover:bg-transparent bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #{info.tag2}
          </span>
        ) : (
          ""
        )}
        {info.tag3 !== "" ? (
          <span className="inline-block hover:bg-transparent bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            #{info.tag3}
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  )
}
