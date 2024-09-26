import React from "react"

import MainAnimation from "../components/MainAnimation"

export const Header = () => {
  return (
    <div>
      <p className="my-5 leading-normal">
        Hey there, I'm<span> Emiliano</span>.
        <br />
        Web Developer turning ideas into memorable digital experiences.
      </p>
      <div className="my-11">
        <MainAnimation
          style={{ height: "70%", width: "70%", margin: "auto" }}
        />
      </div>
      <p className="leading-normal my-11">
        As a skilled full-stack developer with 7+ years of experience in the
        software industry, I bring a keen eye for design to every
        project, ensuring interfaces that people love and help businesses
        achieve their goals.
      </p>
      <p className="mt-24 leading-normal mb-11">
        Personal experiments and client projects:
      </p>
    </div>
  )
}
