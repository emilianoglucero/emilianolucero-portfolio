import React from "react";
import Animated from "../images/emi.svg";

// import styled from "styled-components";

// const StyledMainAnimation = styled.div`
//   /* width: 80%; */
//   /* height: 80%; */
//   /* display: flex; */
//   /* align-items: end; */
//   /* margin: auto; */
//   /* margin-top: 11em; */


// width: 50%;
// height: 50%;
// border-radius: 50%;
// overflow: hidden;
// margin: auto;
// `;

function MainAnimation() {
  return (
    // <StyledMainAnimation>
    // <div className="w-10/12 h-5/6 m-auto">
    //     <object type="image/svg+xml" data={Animated} className="svg m-auto w-full md:w-3/4">
    //     svg-animation
    //     </object>
    // </div>
    <div className="w-10/12 h-5/6 m-auto">
        <object type="image/svg+xml" data={Animated} style={{width: "80%",margin: "auto"}} className="svg">
        svg-animation
        </object>
    </div>
    // <div className="w-10/12 h-5/6 m-auto">
    //     <object type="image/svg+xml" data={Animated} className="svg">
    //     svg-animation
    //     </object>
    // </div>
    // </StyledMainAnimation>
  );
}
export default MainAnimation;