import React from "react"

import MainAnimation from "../components/MainAnimation"

export const Header = () => {
  return (
    <div>
      <p className="my-5 leading-normal">
        Hey there, I'm <span className="font-semibold">Emiliano</span>.<br />
        Web Developer turning ideas into memorable digital experiences.
      </p>
      <div className="my-11">
        <MainAnimation
          style={{ height: "70%", width: "70%", margin: "auto" }}
        />
      </div>
      <p className="leading-normal my-11">
        With over 7 years of experience in the software industry, I stand out as
        a dedicated and creative professional. I have a keen eye for design and
        a passion for creating engaging user interfaces while prioritizing
        performance. I bring a unique blend of technical expertise and artistic
        vision to every project I undertake.
      </p>
      <p className="mt-24 leading-normal my-11">
        Personal experiments and some client projects:
      </p>
    </div>
  )
}
