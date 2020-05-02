const linePath = document.querySelector("#line path")
// figures out how long the path is
const lineOffset = anime.setDashoffset(linePath)
// set back to our element
linePath.setAttribute('stroke-dashoffset', lineOffset)
anime({
  targets: linePath,
  strokeDashoffset: [lineOffset, 0],
  delay: 2000,
  duration: 5000,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
})
