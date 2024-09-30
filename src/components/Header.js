import React from "react"

import MainAnimation from "../components/MainAnimation"
import useIsomorphicLayoutEffect from "../hooks/use-isomorphic-layout-effect"
import gsap from "gsap"
export const Header = () => {
  useIsomorphicLayoutEffect(() => {
    let textWrapper = document.querySelector(".header1")
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    )

    let textWrapper2 = document.querySelector(".header2")
    textWrapper2.innerHTML = textWrapper2.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    )
    gsap.timeline().from(".header1 .letter", {
      opacity: 0,
      duration: 0.25,
      delay: 6,
      stagger: {
        amount: 0.5,
        grid: "auto",
        from: "random",
      },
      ease: "power2.out",
    })
    gsap.timeline().from(".header2 .letter", {
      opacity: 0,
      duration: 0.25,
      delay: 6.8,
      stagger: {
        amount: 0.5,
        grid: "auto",
        from: "random",
      },
      ease: "power2.out",
    })

    gsap.to(".photograpy", {
      delay: 6.5,
      duration: 2.5,

      ease: "power4.inOut",
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    })
  }, [])
  return (
    <div>
      <p className="leading-normal header1">Hey there, I'm Emiliano.</p>
      <p className="mb-5 leading-normal header2">
        Web Developer turning ideas into memorable digital experiences.
      </p>
      <div
        className="photograpy my-11"
        style={{
          clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
        }}
      >
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
