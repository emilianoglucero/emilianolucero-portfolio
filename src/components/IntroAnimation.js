import lottie from "lottie-web"
import React, { createRef, useEffect } from "react"
import animation from "../animations/square.json"
import { useAppStore } from "../hooks/use-app-store"
import gsap from "gsap"
import useIsomorphicLayoutEffect from "../hooks/use-isomorphic-layout-effect"

const IntroAnimation = () => {
  const animationContainer = createRef()
  const setIsIntroComplete = useAppStore(state => state.setIsIntroComplete)

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: animation,
    })

    // Add event listener for the complete event
    anim.addEventListener("complete", () => {
      setIsIntroComplete(true)
    })
    // Start the animation after a delay of 2 seconds
    const timeoutId = setTimeout(() => {
      anim.play()
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
      anim.removeEventListener("complete", () => {
        setIsIntroComplete(true)
      })
      anim.destroy() // optional clean up for unmounting
    }
  }, [animationContainer, setIsIntroComplete])

  useIsomorphicLayoutEffect(() => {
    gsap.from(animationContainer.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      delay: 2,
    })

    gsap.to(animationContainer.current, {
      opacity: 0,
      duration: 0.25,
      ease: "power2.inOut",
      delay: 4.5,
    })
  }, [])

  return (
    <div>
      <div className="animation-container" ref={animationContainer} />
    </div>
  )
}

export default IntroAnimation
