/* Circle cursor */

let r, g, b;
let ellipseWidth = 32;
let ellipseHeight = 32;
let x = -101;
let y = -101;
let easing = 0.12;


var circle = function(sketch) {
  sketch.setup = function() {
    let canvacircle = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight)
    r = 0;
    g = 0;
    b = 0;
  }

  sketch.draw = function() {
    sketch.background("#fffffc")
    sketch.fill(r, g, b, 70)
    sketch.noStroke()
    let targetX = sketch.mouseX;
    let dx = targetX - x;
    x += dx * easing;

    let targetY = sketch.mouseY;
    let dy = targetY - y;
    y += dy * easing;

    sketch.ellipse(x, y, ellipseWidth, ellipseHeight);

  }

  sketch.mousePressed = function() {
    r = sketch.random(255);
    g = sketch.random(255);
    b = sketch.random(255);

  }


};

new p5(circle);

/* Ripple on click */

const ripple = new mojs.Shape({
  fill:           'none',
  radius:         25,
  scale:          { 0: 1 },
  angle:          { 'rand(-35, -70)': 0 },
  duration:       600,
  left: 0,        top: 0,
  easing: 'cubic.out',
  radius:         { 0 : 25 },
  strokeWidth:    { 8 : 0 },
  stroke:         'rgba(3,17,172,0.1)',
});


document.addEventListener( 'click', function (e) {
   ripple
    .tune({ x: e.pageX, y: e.pageY  })
    .replay();
});
