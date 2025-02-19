import React, { useEffect, useRef } from "react"
import { ReactLenis } from "lenis/react"

const Layout = ({ children }) => {
  const lenisRef = useRef()

  useEffect(() => {
    const lenis = lenisRef.current?.lenis

    function raf(time) {
      if (lenis) {
        lenis.raf(time)
      }
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Cleanup
    return () => {
      if (lenis) {
        lenis.destroy()
      }
    }
  }, [])

  const lenisOptions = {
    duration: 1.2,
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
    wheelMultiplier: 0.8, // Reduced from 1
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
    renderByPixels: true,
    lerp: 0.1,
  }

  return (
    <ReactLenis ref={lenisRef} root options={lenisOptions}>
      <main>{children}</main>
    </ReactLenis>
  )
}

export default Layout
