import React, { Component } from "react"
import {loadableP5 as P5Wrapper} from './loadable';
import Sketch from "./sketch";

import "./p5.css";

export default class App extends Component{

  render() {
    
    return (
      <div className="p5-background">
        <P5Wrapper sketch={Sketch} />
      </div>

    )
  }
}