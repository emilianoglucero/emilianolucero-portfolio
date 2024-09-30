import React from "react"
import IntroAnimation from "./IntroAnimation"
import { useAppStore } from "../hooks/use-app-store"

import gsap from "gsap"
import useIsomorphicLayoutEffect from "../hooks/use-isomorphic-layout-effect"

const IntroLoader = () => {
  const isIntroComplete = useAppStore(state => state.isIntroComplete)
  console.log("isIntroComplete", isIntroComplete)

  useIsomorphicLayoutEffect(() => {
    gsap.to(".bar", {
      delay: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1,
      ease: "power4.inOut",
      stagger: {
        amount: 0.5,
        from: "random",
      },
    })

    gsap.to(".marquee", {
      delay: 0,
      left: "0vw",
      duration: 4,
      ease: "power4.inOut",
    })

    gsap.to(".marquee", {
      opacity: 0,
      repeat: 4,
      yoyo: true,
      duration: 0.1,
      delay: 4.8,
      onComplete: () => {
        gsap.to(".marquee", {
          opacity: 1,
        })
      },
    })

    gsap.to(".marquee", {
      delay: 4.5,
      left: "-100vw",
      duration: 4,
      ease: "power4.inOut",
    })

    // gsap.from(".face", {
    //   delay: 2.5,
    //   duration: 1,
    //   opacity: 0,
    //   ease: "power4.inOut",
    // })

    // gsap.to(".face", {
    //   delay: 4.5,
    //   opacity: 0,
    //   ease: "power4.inOut",
    // })

    gsap.to(".bar", {
      delay: 5.5,
      clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
      duration: 1,
      ease: "power4.inOut",
      stagger: {
        amount: 0.5,
        from: "random",
      },
    })
  }, [])

  return (
    <>
      {/* <div className="z-10 flex flex-col items-center justify-center mt-16 face">
        <img
          src={faceImage}
          className="h-auto"
          alt="face"
          style={{
            width: "40%",
          }}
        />
      </div> */}
      {/* loader container */}
      <div className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-96 h-96">
        <IntroAnimation />
      </div>
      <div className="fixed flex flex-col w-full h-full">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`bar flex-1 w-full  py-6 -mt-px ${
              i === 4 ? "flex flex-col justify-end" : ""
            }`}
            style={{
              backgroundColor: "#60d800",
              clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
            }}
          >
            {i === 0 || i === 4 ? (
              <div
                className="marquee relative flex gap-20 font-['Neue_Montreal'] text-sm uppercase"
                style={{
                  left: "100vw",
                  width: "300vw",
                  color: "#f5f5f5",
                }}
              >
                {[...Array(20)].map((_, j) => (
                  <p key={j}>★ ☆</p>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </>
  )
}

export default IntroLoader
