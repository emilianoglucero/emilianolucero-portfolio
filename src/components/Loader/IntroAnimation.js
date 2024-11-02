import React, { useRef, useEffect, useState } from "react"
import { gsap } from "../../lib/gsap"
import useIsomorphicLayoutEffect from "../../hooks/use-isomorphic-layout-effect"
import { isSafari, isMobile } from "react-device-detect"
import { StaticImage } from "gatsby-plugin-image"
import "./IntroAnimation.css"

const IntroAnimation = () => {
  const videoRef = useRef(null)
  const [isNonComputerDevice, setIsNonComputerDevice] = useState(false)
  const [videoSrc, setVideoSrc] = useState("/videos/animation.webm")
  const [videoType, setVideoType] = useState("video/webm")

  useEffect(() => {
    if (isSafari) {
      setVideoSrc("/videos/animation.mov")
      setVideoType("video/quicktime")
    }
    if (isMobile) {
      setIsNonComputerDevice(true)
    }
  }, [])

  useIsomorphicLayoutEffect(() => {
    const animateIn = () => {
      if (isNonComputerDevice) {
        const timeline = gsap
          .timeline()

          .to(".intro-image-1", {
            delay: 2.5,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            onComplete: () => {
              gsap.to(".intro-image-1", {
                yPercent: -50,
                xPercent: -30,
                duration: 1,
                rotate: 15,
              })
            },
          })
          .to(
            ".intro-image-2",
            {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              onComplete: () => {
                gsap.to(".intro-image-2", {
                  yPercent: -50,
                  xPercent: 30,
                  duration: 1,
                  rotate: -13,
                })
              },
            },
            "+=0.15"
          )
          .to(
            ".intro-image-3",
            {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              onComplete: () => {
                gsap.to(".intro-image-3", {
                  yPercent: 50,
                  xPercent: -40,
                  duration: 1,
                  rotate: 10,
                })
              },
            },
            "+=0.15"
          )
          .to(
            ".intro-image-4",
            {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              onComplete: () => {
                gsap.to(".intro-image-4", {
                  yPercent: 50,
                  xPercent: 35,
                  duration: 1,
                  rotate: -11,
                })
              },
            },
            "+=0.15"
          )
          .to(".intro-animation-wrapper", {
            delay: 1,
            opacity: 0,
            ease: "power2.inOut",
          })
      } else {
        gsap.from(videoRef.current, {
          opacity: 0,
          duration: 1,
          delay: 2,
          onStart: () => {
            videoRef.current.play()
          },
        })
      }
    }

    const animateOut = () => {
      if (!isNonComputerDevice) {
        gsap.to(videoRef.current, {
          opacity: 0,
          duration: 0.25,
          ease: "power2.inOut",
          delay: 6.4,
          onComplete: () => {
            videoRef.current.pause()
            videoRef.current.currentTime = 0 // Reset video to the beginning
          },
        })
      }
    }

    animateIn()
    animateOut()
  }, [isNonComputerDevice])

  return (
    <div className="w-full h-full">
      {isNonComputerDevice ? (
        <div className="flex items-center justify-center h-full intro-animation-wrapper">
          <div className="intro-image-1">
            <StaticImage
              src="../../images/words/e.png"
              alt="Intro illustration of Emi name"
              className="object-cover animation-container"
            />
          </div>
          <div className="intro-image-2">
            <StaticImage
              src="../../images/words/m.png"
              alt="Intro illustration of Emi name"
              className="object-cover animation-container"
            />
          </div>
          <div className="intro-image-3">
            <StaticImage
              src="../../images/words/i.png"
              alt="Intro illustration of Emi name"
              className="object-cover animation-container"
            />
          </div>
          <div className="intro-image-4">
            <StaticImage
              src="../../images/words/smile.png"
              alt="Intro illustration of Emi name"
              className="object-cover animation-container"
            />
          </div>
        </div>
      ) : (
        <video
          ref={videoRef}
          className="animation-container w-[480px] h-[270px] sm:w-[960px] md:w-[720px] md:h-auto object-cover"
          alt="Intro animation of Emi name moving"
          muted
          playsInline
        >
          <source src={videoSrc} type={videoType} />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  )
}

export default IntroAnimation
