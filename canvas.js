
const images = document.querySelectorAll(".card__image");


images.forEach((image, index) => {
  image.style.backgroundImage = 'url(images/image' + index + '.png)';
})

var acc = document.getElementsByClassName("toggle");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("toggle--active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "flex") {
      panel.style.display = "none";
    } else {
      panel.style.display = "flex";
    }


  });
}

/* Cursor */

let r, g, b;
let ellipseWidth = 32;
let ellipseHeight = 32;
let x = 1;
let y = 1;
let easing = 0.12;


var s1 = function(sketch) {
  sketch.setup = function() {
    let canvas1 = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight)
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

new p5(s1);


/* articles */








let s2 = function(sketch) {
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

new p5(s2);

let s3 = function(sketch) {
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

new p5(s3);





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




/* Photo slider */
const slides = document.querySelector(".slides");
let curr = 0;
let z = 1000;

const sliderImages = slides.querySelectorAll("img");

sliderImages.forEach(image => {
  z = z - 1;
  image.style.zIndex = z;
})

const timeline = gsap.timeline()

timeline
  // .set(sliderImages, { y: '500%'})
  // .to(sliderImages, { y: 0, stagger: -0.25 })
  .to(sliderImages, { rotation: () => {
    console.log("rotated!");
    return 20 * Math.random() - 8;

  }
})

slides.addEventListener("click", function() {
  z--;

  let direction = "150%";
  let midAngle = 15;

  if (Math.random() > 0.5) {
    direction = "-150%",
    midAngle = -15;
  }
  const currentImage = sliderImages[curr];

  const flipTimeline = gsap.timeline();

  flipTimeline
    .set(currentImage, {x: 0})
    .to(currentImage, {
      x: direction,
      rotation: midAngle
    })
    .set(currentImage, {zIndex: z})
    .to(currentImage, {
      x: 0,
      rotation: () => {
        return 20 * Math.random() - 8
      }
    })

  curr++;
  curr = curr % sliderImages.length;

});
