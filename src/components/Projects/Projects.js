import React from "react"
import VideoCard from "../VideoCard"

export const Projects = ({ info }) => {
  const colStartClass = `lg:col-start-${info.colStart}`
  const colSpanClass = `lg:col-span-${info.colSpan}`
  const rowStartClass = `lg:row-start-${info.rowStart}`

  return (
    <div
      className={`flex flex-col flex-1 m-auto overflow-hidden skew-y-12 rounded shadow-lg my-11 hover:shadow-md hover:bg-primary ${colStartClass} ${colSpanClass} ${rowStartClass}`}
    >
      <VideoCard info={info} />
      <div className="flex-grow px-6 py-4">
        <div className="mb-2 text-xl font-ft88">{info.title}</div>
        <p
          className="text-base text-gray-700"
          style={{
            textWrap: "balance",
          }}
        >
          {info.description}
        </p>
      </div>
      <div className="px-6 py-4">
        {info.tag1 && (
          <span className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 transition delay-75 bg-gray-200 rounded-full duration-400 hover:bg-transparent">
            #{info.tag1}
          </span>
        )}
        {info.tag2 && (
          <span className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 transition delay-75 bg-gray-200 rounded-full duration-400 hover:bg-transparent">
            #{info.tag2}
          </span>
        )}
        {info.tag3 && (
          <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 transition delay-75 bg-gray-200 rounded-full duration-400 hover:bg-transparent">
            #{info.tag3}
          </span>
        )}
      </div>
    </div>
  )
}
