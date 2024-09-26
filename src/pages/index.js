import React, { useEffect, useState } from "react"

import P5 from "../p5/p5"
import Loading from "../components/Loading"

import projectsInfo from "../data/projects"
import { Projects } from "../components/Projects"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import SEO from "../components/SEO"

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
      <SEO
        title="Home"
        description="Emiliano Lucero web dev portfolio"
        // image="/images/og-image.jpg"
        image="src/images/og/og-image.jpg"
      />

      <div className="container px-6 mx-auto font-mono text-4xl text-center my-14 md:px-12 lg:px-12 text-primary">
        <Header />

        <div className="grid content-center justify-center grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsInfo.map(info => (
            <Projects key={info.id} info={info} />
          ))}
        </div>

        <Footer />
      </div>
    </>
  )
}
