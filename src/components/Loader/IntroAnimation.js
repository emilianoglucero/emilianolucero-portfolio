import React, { useRef, useEffect, useState } from "react"
import gsap from "gsap"
import useIsomorphicLayoutEffect from "../../hooks/use-isomorphic-layout-effect"
import { isSafari } from "react-device-detect"

const IntroAnimation = () => {
  const videoRef = useRef(null)
  const [videoSrc, setVideoSrc] = useState("/videos/animation.webm")
  const [videoType, setVideoType] = useState("video/webm")

  useEffect(() => {
    if (isSafari) {
      setVideoSrc("/videos/animation.mov")
      setVideoType("video/quicktime")
    }
  }, [])

  useIsomorphicLayoutEffect(() => {
    const animateIn = () => {
      gsap.from(videoRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        delay: 2,
        onStart: () => {
          videoRef.current.play()
        },
      })
    }

    const animateOut = () => {
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

    animateIn()
    animateOut()
  }, [])

  return (
    <div className="w-full h-full intro-animation-wrapper">
      <video
        ref={videoRef}
        className="animation-container w-[480px] h-[270px] sm:w-[960px] sm:h-[540px] object-cover"
        alt="Intro animation of Emi name moving"
        muted
        playsInline
      >
        <source src={videoSrc} type={videoType} />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default IntroAnimation
