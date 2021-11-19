const lines = document.querySelectorAll(".appear");
lines.forEach((line, index) => {
    line.style.animationPlayState = 'running';
    const delay = index * 50;
    line.style.animationDelay = `${delay}ms`;
})

let currentX = 0
let currentY = 0
let aimX = 0
let aimY = 0

const updatePosition = function () {
    currentX += (aimX - currentX) * 0.1
    currentY += (aimY - currentY) * 0.1

	  const div = document.querySelector(".screenshot")

    div.style.transform = `rotateX(${-10 * currentY}deg) rotateY(${10 * currentX}deg)`

    requestAnimationFrame(updatePosition)
}

  updatePosition()

  document.addEventListener("mousemove", function (event) {
    aimX = (event.pageX - (window.innerWidth / 2)) / window.innerWidth
    aimY = (event.pageY - (window.innerHeight / 2)) / window.innerHeight
  })
