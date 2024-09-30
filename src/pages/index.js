import React from "react"

// import P5 from "../p5/p5"

import projectsInfo from "../data/projects"
import { Projects } from "../components/Projects"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import gsap from "gsap"
import useIsomorphicLayoutEffect from "../hooks/use-isomorphic-layout-effect"
import SEO from "../components/SEO"
import IntroLoader from "../components/IntroLoader"
import P5 from "../p5/p5"

export default function Home() {
  useIsomorphicLayoutEffect(() => {
    gsap.to(".main-container", {
      opacity: 1,
      delay: 6,
      duration: 1,
      ease: "power2.inOut",
    })
    gsap.to(".main-container", {
      position: "relative",
      zIndex: 1,
      delay: 8.3,
    })
    gsap.to(".loader-container", {
      display: "none",
      delay: 7.5,
    })
  }, [])
  return (
    <div>
      <div
        className="w-full h-full bg-white opacity-0 main-container"
        style={{
          position: "fixed",
        }}
      >
        <SEO />
        <P5 />

        <div className="container px-6 mx-auto font-mono text-4xl text-center my-14 md:px-12 lg:px-12 text-primary">
          <Header />

          <div className="grid content-center justify-center grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projectsInfo.map(info => (
              <Projects key={info.id} info={info} />
            ))}
          </div>

          <Footer />
        </div>
      </div>

      <div
        className="flex flex-col w-full h-screen loader-container"
        style={{
          backgroundColor: "#f5f5f5",
        }}
      >
        <IntroLoader />
      </div>
    </div>
  )
}
