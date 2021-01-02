/*export default function Sketch(p5) {
  let canvas;

  p5.setup = () => {
    canvas = p5.createCanvas(window.innerWidth, window.innerHeight);
    canvas.position = (0,0);
    canvas.style = ('z-index', '-1');
    p5.noStroke();
  };

  p5.draw = () => {
    let y = p5.color("coral");

    p5.fill(y);
    p5.circle(45, 45, 65);

    if (p5.mouseIsPressed) {
      p5.fill(p5.color("lightsalmon"));
    } else {
      p5.fill(p5.color("hsl(160, 100%, 50%)"));
    }
    p5.circle(p5.mouseX, p5.mouseY, 70, 70);
  };
}







// P_2_2_3_01
//
// Generative Gestaltung – Creative Coding im Web
// ISBN: 978-3-87439-902-9, First Edition, Hermann Schmidt, Mainz, 2018
// Benedikt Groß, Hartmut Bohnacker, Julia Laub, Claudius Lazzeroni
// with contributions by Joey Lee and Niels Poldervaart
// Copyright 2018
//
// http://www.generative-gestaltung.de
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * form mophing process by connected random agents
 *
 * MOUSE
 * click               : start a new circe
 * position x/y        : direction of floating
 *
 * KEYS
 * 1-2                 : fill styles
 * f                   : freeze. loop on/off
 * Delete/Backspace    : clear display
 * s                   : save png
 */
export default function Sketch(p5) {

  var formResolution = 15;
  var stepSize = 4;
  var distortionFactor = 1;
  var initRadius = 100;
  var centerX;
  var centerY;
  var x = [];
  var y = [];

  var filled = false;
  var freeze = false;

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);

    // init shape
    centerX = p5.width / 6;
    centerY = p5.height / 6;
    var angle = p5.radians(360 / formResolution);
    for (var i = 0; i < formResolution; i++) {
      x.push(p5.cos(angle * i) * initRadius);
      y.push(p5.sin(angle * i) * initRadius);
    }

    p5.stroke(80, 252, 84);
    p5.strokeWeight(0.85);
    p5.background(245,245,245);
  }

  p5.draw = () => {
    // floating towards mouse position
    centerX += (p5.mouseX - centerX) * 0.01;
    centerY += (p5.mouseY - centerY) * 0.01;

    // calculate new points
    for (var i = 0; i < formResolution; i++) {
      x[i] += p5.random(-stepSize, stepSize);
      y[i] += p5.random(-stepSize, stepSize);
      // uncomment the following line to show position of the agents
      // ellipse(x[i] + centerX, y[i] + centerY, 5, 5);
    }

    /*if (filled) {
      p5.fill(p5.random(255));
    } else {
      p5.noFill();
    }*/

    p5.beginShape();
    // first controlpoint
    p5.curveVertex(x[formResolution - 1] + centerX, y[formResolution - 1] + centerY);

    // only these points are drawn
    for (var i = 0; i < formResolution; i++) {
      p5.curveVertex(x[i] + centerX, y[i] + centerY);
    }
    p5.curveVertex(x[0] + centerX, y[0] + centerY);

    // end controlpoint
    p5.curveVertex(x[1] + centerX, y[1] + centerY);
    p5.endShape();
  }

  p5.mousePressed = () => {
    // init shape on mouse position
    centerX = p5.mouseX;
    centerY = p5.mouseY;
    var angle = p5.radians(360 / formResolution);
    var radius = initRadius * p5.random(0.5, 1);
    for (var i = 0; i < formResolution; i++) {
      x[i] = p5.cos(angle * i) * initRadius;
      y[i] = p5.sin(angle * i) * initRadius;
    }
  }

 /* p5.keyReleased = () => {
    if (p5.key == 's' || p5.key == 'S') p5.saveCanvas(p5.gd.timestamp(), 'png');
    if (p5.keyCode == p5.DELETE || p5.keyCode == p5.BACKSPACE) p5.background(255);
    if (p5.key == '1') filled = false;
    if (p5.key == '2') filled = true;

    // pauze/play draw loop
    if (p5.key == 'f' || p5.key == 'F') freeze = !freeze;
    if (p5.freeze) {
      p5.noLoop();
    } else {
      p5.loop();
    }
  }*/



}



/*

export default function Sketch(p5) {

  // P_2_1_1_03
  //
  // Generative Gestaltung – Creative Coding im Web
  // ISBN: 978-3-87439-902-9, First Edition, Hermann Schmidt, Mainz, 2018
  // Benedikt Groß, Hartmut Bohnacker, Julia Laub, Claudius Lazzeroni
  // with contributions by Joey Lee and Niels Poldervaart
  // Copyright 2018
  //
  // http://www.generative-gestaltung.de
  //
  // Licensed under the Apache License, Version 2.0 (the "License");
  // you may not use this file except in compliance with the License.
  // You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
  // Unless required by applicable law or agreed to in writing, software
  // distributed under the License is distributed on an "AS IS" BASIS,
  // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  // See the License for the specific language governing permissions and
  // limitations under the License.

  /**
   * changing number, color and strokeweight on diagonals in a grid
   *
   * MOUSE
   * position x          : diagonal strokeweight
   * position y          : number diagonals
   * left click          : new random layout
   *
   * KEYS
   * s                   : save png
   * 1                   : color left diagonal
   * 2                   : color right diagonal
   * 3                   : switch transparency left diagonal on/off
   * 4                   : switch transparency right diagonal on/off
   * 0                   : default
   


  'use strict';

  let canvas;

  var tileCount = 1;
  var actRandomSeed = 0;

  var colorLeft;
  var colorRight;
  var alphaLeft = 0;
  var alphaRight = 100;
  var transparentLeft = false;
  var transparentRight = false;

  p5.setup = () => {

    canvas = p5.createCanvas(window.innerWidth, window.innerHeight);
    canvas.position = (0,0);
    canvas.style = ('z-index', '-1');

    //canvas = p5.createCanvas(600, 600);
    canvas = p5.colorMode(p5.HSB, 360, 100, 100, 100);

    colorRight = p5.color(0, 0, 0, alphaRight);
    colorLeft = p5.color(323, 100, 77, alphaLeft);
  }

  p5.draw = () => {
    p5.clear();
    p5.strokeWeight(p5.mouseX / 15);

    p5.randomSeed(actRandomSeed);

    tileCount = p5.mouseY / 15;

    for (var gridY = 0; gridY < tileCount; gridY++) {
      for (var gridX = 0; gridX < tileCount; gridX++) {

        var posX = p5.width / tileCount * gridX;
        var posY = p5.height / tileCount * gridY;

        alphaLeft = transparentLeft ? gridY * 10 : 100;

        colorLeft = p5.color(p5.hue(colorLeft), p5.saturation(colorLeft), p5.brightness(colorLeft), alphaLeft);

        alphaRight = transparentRight ? 100 - gridY * 10 : 100;

        colorRight = p5.color(p5.hue(colorRight), p5.saturation(colorRight), p5.brightness(colorRight), alphaRight);

        var toggle = p5.int(p5.random(0, 2));

        if (toggle == 0) {
          p5.stroke(colorLeft);
          p5.line(posX, posY, posX + (p5.width / tileCount) / 2, posY + p5.height / tileCount);
          p5.line(posX + (p5.width / tileCount) / 2, posY, posX + (p5.width / tileCount), posY + p5.height / tileCount);
        }
        if (toggle == 1) {
          p5.stroke(colorRight);
          p5.line(posX, posY + p5.width / tileCount, posX + (p5.height / tileCount) / 2, posY);
          p5.line(posX + (p5.height / tileCount) / 2, posY + p5.width / tileCount, posX + (p5.height / tileCount), posY);
        }
      }
    }
  }

  p5.mousePressed = () => {
    actRandomSeed = p5.random(100000);
  }

  p5.keyReleased = () => {
    if (p5.key == 's' || p5.key == 'S') p5.saveCanvas(p5.gd.timestamp(), 'png');

    if (p5.key == '1') {
      if (colorsEqual(colorLeft, p5.color(273, 73, 51, alphaLeft))) {
        colorLeft = p5.color(323, 100, 77, alphaLeft);
      } else {
        colorLeft = p5.color(273, 73, 51, alphaLeft);
      }
    }
    if (p5.key == '2') {
      if (colorsEqual(colorRight, p5.color(0, 0, 0, alphaRight))) {
        colorRight = p5.color(192, 100, 64, alphaRight);
      } else {
        colorRight = p5.color(0, 0, 0, alphaRight);
      }
    }
    if (p5.key == '3') {
      transparentLeft = !transparentLeft;
    }
    if (p5.key == '4') {
      transparentRight = !transparentRight;
    }

    if (p5.key == '0') {
      transparentLeft = false;
      transparentRight = false;
      colorLeft = p5.color(323, 100, 77, alphaLeft);
      colorRight = p5.color(0, 0, 0, alphaRight);
    }
  }

  function colorsEqual(col1, col2) {  
    return col1.toString() == col2.toString();
  }

}*/