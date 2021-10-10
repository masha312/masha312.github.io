/* Articles */

let article1 = function(sketch) {
  sketch.preload = function() {
    sketch.font = sketch.loadFont('https://fonts.gstatic.com/s/lora/v16/0QI6MX1D_JOuGQbT0gvTJPa787weuxJBkqg.ttf')
  }
  sketch.setup = function() {
    let cnv = sketch.createCanvas(504, 400);
    cnv.parent(`canvas0`);
    sketch.textAlign(sketch.CENTER, sketch.CENTER);

    pts1 = sketch.font.textToPoints(`UX Guide:`, 88, 140, 56, {
      sampleFactor: 0.4,
      simplifyThreshold: 0
    })

    pts2 = sketch.font.textToPoints(`Password`, 88, 210, 56, {
      sampleFactor: 0.4,
      simplifyThreshold: 0
    })

    pts3 = sketch.font.textToPoints(`Reset Flow`, 88, 280, 56, {
      sampleFactor: 0.4,
      simplifyThreshold: 0
    })
  }
  sketch.draw = function() {
    sketch.background("#fffcdd")

    const nl = 0.01

    sketch.noFill()
    sketch.stroke("#044bb6")
    sketch.strokeWeight(1)

    sketch.beginShape()
   	pts1.forEach(point => {
  		drawPoints(point, sketch, nl);
    })
    sketch.endShape()

    sketch.beginShape()
    pts2.forEach(point => {
  		drawPoints(point, sketch, nl);
    })
    sketch.endShape()

    sketch.beginShape()
    pts3.forEach(point => {
  		drawPoints(point, sketch, nl);
    })
    sketch.endShape()
  }
}

new p5(article1);

let article2 = function(sketch) {
  sketch.preload = function() {
    sketch.font = sketch.loadFont('https://fonts.gstatic.com/s/lora/v16/0QI6MX1D_JOuGQbT0gvTJPa787weuxJBkqg.ttf')
  }
  sketch.setup = function() {
    let cnv = sketch.createCanvas(504, 400);
    cnv.parent(`canvas1`);
    sketch.textAlign(sketch.CENTER, sketch.CENTER);

    pts4 = sketch.font.textToPoints('Figma Files', 48, 140, 56, {
      sampleFactor: 0.4,
      simplifyThreshold: 0
    })

    pts5 = sketch.font.textToPoints(`for`, 48, 210, 56, {
      sampleFactor: 0.4,
      simplifyThreshold: 0
    })

    pts6 = sketch.font.textToPoints(`Non-Designers`, 48, 280, 56, {
      sampleFactor: 0.4,
      simplifyThreshold: 0
    })
  }
  sketch.draw = function() {
    sketch.background("#FCDDFF")

    const nl = 0.01

    sketch.noFill()
    sketch.stroke("#2f6a00")
    sketch.strokeWeight(1)
    sketch.beginShape()
   	pts4.forEach(point => {
      drawPoints(point, sketch, nl);
    })

    sketch.endShape()

    sketch.beginShape()
    pts5.forEach(point => {
  		drawPoints(point, sketch, nl);
    })
    sketch.endShape()

    sketch.beginShape()
    pts6.forEach(point => {
  		drawPoints(point, sketch, nl);
    })
    sketch.endShape()
  }
}

new p5(article2);


function drawPoints(point, sketch, nl) {
  let movement = sketch.createVector(0, 0)

  if (sketch.mouseX) {
    distance = sketch.dist(point.x, point.y, sketch.mouseX, sketch.mouseY)
    movement = sketch.createVector(point.x - sketch.mouseX, point.y - sketch.mouseY)
    movement = movement.mult(4 / distance)
  }

  const nx = movement.x + (sketch.noise(nl * point.x, nl * point.y, nl * sketch.frameCount) * 10 - 1)
  const ny = movement.y + (sketch.noise(nl * point.x, nl * point.y, nl * sketch.frameCount) * 10 - 1)
  sketch.vertex(point.x + nx, point.y + ny)
}
