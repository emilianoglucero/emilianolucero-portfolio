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
        With over 7 years of experience in the software industry, I stand out as a dedicated and creative professional. I have a keen eye for design and a passion for creating engaging user interfaces while prioritizing performance. I bring a unique blend of technical expertise and artistic vision to every project I undertake.
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
