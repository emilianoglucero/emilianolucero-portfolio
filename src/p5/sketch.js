
export default function Sketch(p5) {

  var formResolution = 15;
  var stepSize = 4;

  var initRadius = 100;
  var centerX;
  var centerY;
  var x = [];
  var y = [];

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

    p5.stroke(96, 216, 0);
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

    }

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
    for (var i = 0; i < formResolution; i++) {
      x[i] = p5.cos(angle * i) * initRadius;
      y[i] = p5.sin(angle * i) * initRadius;
    }
  }


}