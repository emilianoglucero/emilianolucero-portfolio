import React from "react"
import projectsInfo from "../data/projects"
import { Projects } from "../components/Projects/Projects"
import { Header } from "../components/Header/Header"
import { Footer } from "../components/Footer/Footer"
import gsap from "gsap"
import useIsomorphicLayoutEffect from "../hooks/use-isomorphic-layout-effect"
import { Seo } from "../components/SEO/SEO"
import IntroLoader from "../components/Loader/IntroLoader"
import P5 from "../p5/p5"
import { useDeviceDetect } from "../hooks/use-device-detect"
import Layout from "../components/Layout/Layout"

export default function Home() {
  const { isMobile } = useDeviceDetect()
  useIsomorphicLayoutEffect(() => {
    const animateMainContainer = () => {
      gsap.to(".main-container", {
        opacity: 1,
        delay: 8,
        duration: 1,
        ease: "power2.inOut",
      })
      gsap.to(".main-container", {
        position: "relative",
        zIndex: 1,
        delay: 10.3,
      })
    }

    const hideLoaderContainer = () => {
      gsap.to(".loader-container", {
        display: "none",
        delay: 9.5,
      })
    }

    animateMainContainer()
    hideLoaderContainer()
  }, [])

  return (
    <Layout>
      <div className="min-h-screen">
        <div className="fixed w-full h-full opacity-0 main-container">
          <Seo />
          {!isMobile && <P5 />}
          <div className="container px-6 mx-auto text-4xl text-center font-nb_international_pro my-14 md:px-12 lg:px-12 text-primary">
            <Header />
            <div className="grid content-center justify-center grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-16 lg:grid-rows-1">
              {projectsInfo.map(info => (
                <Projects key={info.id} info={info} />
              ))}
            </div>
            <Footer />
          </div>
        </div>
        <div className="flex flex-col w-full h-screen bg-gray-100 loader-container">
          <IntroLoader />
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo />
