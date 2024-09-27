import React, { useEffect, useState } from "react"

import P5 from "../p5/p5"
import Loading from "../components/Loading"

import projectsInfo from "../data/projects"
import { Projects } from "../components/Projects"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

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
      <Helmet>
        <title>Emiliano Lucero Web Dev Portfolio</title>
        <meta property="og:title" content="Emiliano Lucero Web Dev Portfolio" />
        <meta
          property="og:description"
          content="A skilled full-stack developer with 7+ years of experience in the software industry"
        />
        <meta
          property="og:image"
          content="https://storage.googleapis.com/bebeto-pizza-dibuja/og-images/og-image-portfolio.jpg"
        />
        <meta property="og:url" content="https://www.emilianolucero.ar/" />
        <meta property="og:type" content="website" />
      </Helmet>

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
