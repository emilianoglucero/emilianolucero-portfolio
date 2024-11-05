import React, { useRef, useEffect } from "react"
import { gsap } from "../../lib/gsap"

const IntroVideo = ({ videoSrc, videoType, loop }) => {
  const videoRef = useRef(null)

  useEffect(() => {
    gsap.from(videoRef.current, {
      opacity: 0,
      duration: 1,
      delay: 2.2,
      onStart: () => {
        videoRef.current.play()
      },
    })

    gsap.to(videoRef.current, {
      opacity: 0,
      duration: 0.25,
      ease: "power2.inOut",
      delay: 6,
      onComplete: () => {
        videoRef.current.pause()
        videoRef.current.currentTime = 0
      },
    })
  }, [])

  return (
    <div className="w-full h-full">
      <video
        ref={videoRef}
        className="animation-container w-[480px] h-[270px] sm:w-[960px] md:w-[720px] md:h-auto object-cover"
        alt="Intro animation"
        muted
        playsInline
        loop={loop}
      >
        <source src={videoSrc} type={videoType} />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default IntroVideo
