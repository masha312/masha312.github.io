const progressBar = document.querySelector(".progress__bar");

// this function increase or decrease the percentage of the element to stretch
function stretch() {
  const pixelScrolled = window.scrollY;
  const viewportHeight = window.innerHeight;
  const totalHeightScrollable = document.querySelector("body").scrollHeight;

  // convert pixels to percentage
  const pixelsToPercentage = (pixelScrolled / (totalHeightScrollable - viewportHeight)) * 100;

  // set the width of the fluid element.
  progressBar.style.height = Math.round(pixelsToPercentage) + "%";
}

// append a scroll event listener to the window object
window.addEventListener('scroll', stretch);
