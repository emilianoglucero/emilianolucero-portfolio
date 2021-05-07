import React, { useEffect, useState } from "react"

import P5 from "../p5/p5"
import Loading from "../components/Loading"

import projectsInfo from "../data/projects"
import { Projects } from "../components/Projects"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

import { Curtains } from "react-curtains"
import { BasicPlane } from "../components/BasicPlane"
import SimplePlane from "../components/SimplePlane"
import { StaticImage } from "gatsby-plugin-image"

import "../index.css"

export default function Home() {
  const [isLoadingDOM, setIsLoadingDOM] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      //window.addEventListener('load', setIsLoading(false));
      window.addEventListener("DOMContentLoaded", setIsLoadingDOM(false))
    }, 3000)
  }, [])

  return isLoadingDOM ? (
    <Loading />
  ) : (
    <>
      <P5 />

      <Curtains pixelRatio={Math.min(1.5, window.devicePixelRatio)}>
        <div className="container mx-auto my-14 px-6 md:px-12 lg:px-12 text-center text-primary text-4xl font-mono">
          <SimplePlane />
          <Header />
          <StaticImage src="../images/projects/alpha.jpg" alt="hola" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center content-center">
            {projectsInfo.map(info => (
              <Projects key={info.id} info={info} />
            ))}
          </div>

          <Footer />
        </div>
      </Curtains>
    </>
  )
}
