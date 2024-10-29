import React from "react"
import Animated from "../../images/emi.svg"

function HeaderAnimation() {
  return (
    <div className="w-10/12 m-auto h-5/6">
      <object
        type="image/svg+xml"
        data={Animated}
        style={{ width: "80%", margin: "auto" }}
        className="svg"
        aria-label="Animated SVG of Emi" // Add aria-label for accessibility
      >
        :)
      </object>
    </div>
  )
}

export default HeaderAnimation
