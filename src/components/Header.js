import React from "react"

import MainAnimation from "../components/MainAnimation"

export const Header = () => {
  return (
    <div>
      <p className="my-5 leading-normal">
        Hello, my name is <span className="font-semibold">Emiliano</span>.<br />
        I'm a Front End Developer working remotely from Rosario, Argentina.
      </p>
      <div className="my-11">
        <MainAnimation
          style={{ height: "70%", width: "70%", margin: "auto" }}
        />
      </div>
      <p className="leading-normal my-11">
        I enjoy building everything from small business sites to rich
        interactive web apps.
      </p>
      <p className="my-16 leading-normal">
        Interested in hiring me or doing a project together?
      </p>

      <a
        href="mailto:emilianoglucero@gmail.com"
        rel="noreferrer"
        target="_blank"
        className="px-8 py-2 text-green-600 uppercase transition duration-300 border border-green-600 shadow-sm max-w-max hover:shadow-md"
      >
        EMAIL ME
      </a>

      <p className="mt-24 leading-normal mb-14 pb-9">
        Personal experiments and some client projects:
      </p>
    </div>
  )
}
