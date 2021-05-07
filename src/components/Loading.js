import React, { useEffect, createRef } from "react"

import lottie from "lottie-web"
import animation from "../animations/square-loading.json"

const Loading = () => {
  let animationContainer = createRef()

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animation,
    })
    return () => anim.destroy() // optional clean up for unmounting
  }, [])

  return (
    <div className="m-auto h-2/4 w-3/6">
      <div className="animation-container" ref={animationContainer} />
    </div>
  )
}

export default Loading
