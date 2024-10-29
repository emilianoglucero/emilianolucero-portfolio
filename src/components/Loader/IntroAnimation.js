import React, { useRef } from "react"
import gsap from "gsap"
import useIsomorphicLayoutEffect from "../../hooks/use-isomorphic-layout-effect"

const IntroAnimation = () => {
  const videoRef = useRef(null)

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
        src="/videos/animation.webm" // Update the path to your video file
        className="animation-container w-[480px] h-[270px] sm:w-[960px] sm:h-[540px] object-cover"
        alt="Intro animation of Emi name moving"
        muted
        playsInline
      />
    </div>
  )
}

export default IntroAnimation
