import React, { useEffect, createRef } from "react";
//import "./App.css";

import lottie from "lottie-web";
import animation from "../animations/circular-line.json";

const Loading = () => {
  let animationContainer = createRef();
  
  lottie.loadAnimation({
    container: animationContainer.current, // current instance of our container!
    animationData: animation, // animation file!
    renderer: "svg",
    loop: true,
    autoplay: true
  });

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animation
    });
    return () => anim.destroy(); // optional clean up for unmounting
  }, []);

  return (
    <div className="m-auto h-2/4 w-3/6">
        <div className="animation-container" ref={animationContainer} />
    </div>
  );
};

export default Loading;
