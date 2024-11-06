import React from "react"
import HeaderAnimation from "./HeaderAnimation"
import useIsomorphicLayoutEffect from "../../hooks/use-isomorphic-layout-effect"
import gsap from "gsap"
import "./Header.css"

export const Header = () => {
  useIsomorphicLayoutEffect(() => {
    const animateText = (selector, delay) => {
      const textWrapper = document.querySelector(selector)
      if (textWrapper) {
        textWrapper.innerHTML = textWrapper.textContent.replace(
          /\S/g,
          "<span class='letter'>$&</span>"
        )
        gsap.timeline().from(`${selector} .letter`, {
          opacity: 0,
          duration: 0.25,
          delay,
          stagger: {
            amount: 0.5,
            grid: "auto",
            from: "random",
          },
          ease: "power2.out",
        })
      }
    }

    animateText(".header1", 8)
    animateText(".header2", 8.6)
    animateText(".name", 8)

    gsap.to(".photography", {
      delay: 8,
      duration: 2.5,
      ease: "power4.inOut",
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    })
  }, [])

  return (
    <div className="text-4xl header-container">
      <div className="flex flex-col justify-center gap-3 header-intro sm:flex-row">
        <p className="leading-normal header1">Hey there, I'm</p>
        <span className="self-center pt-1 name font-ft88"> Emi.</span>
      </div>

      <p className="mb-5 leading-normal header2">
        Web Developer turning ideas into memorable digital experiences.
      </p>
      <div className="photography my-11">
        <HeaderAnimation className="main-animation" />
      </div>
      <p className="leading-normal my-11 text-balance">
        7+ years of experience building software. From contributing to startups
        to create scalable and reliable products to leading immersive,
        performant, and innovative web experiences. <br />
        Let's tackle new challenges together!
      </p>

      <p className="mt-24 leading-normal mb-11">
        Personal <span className="font-ft88">experiments</span> and client
        projects:
      </p>
    </div>
  )
}
