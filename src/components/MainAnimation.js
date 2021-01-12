import React from "react";
import Animated from "../images/emi.svg";

function MainAnimation() {
  return (
    <div className="w-10/12 h-5/6 m-auto">
        <object type="image/svg+xml" data={Animated} style={{width: "80%",margin: "auto"}} className="svg">
        svg-animation
        </object>
    </div>
  );
}
export default MainAnimation;