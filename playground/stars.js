const duplicateHTML = (element, quantity) => {
  const elementsArray = new Array(quantity).fill(element.innerHTML).join('');
  element.innerHTML = elementsArray;
}

function assignPosition(element) {
  const randomLeft = random(0, 99);
  const randomTop = random(0, 99);
  element.style.left = `${randomLeft}%`;
  element.style.top = `${randomTop}%`;
}

function assignRotate(element) {
  const randomTransformNumber = random(-90, 90);
  element.style.transform = `rotate(${randomTransformNumber}deg)`;
}

function assignScale(element) {
  const randomTransformNumber = random(0.8, 1.4);
  element.style.transform = `scale(${randomTransformNumber}deg)`;
}

function assignBackgroundColor(element) {
  const arrayOfColors = ['#b7d7f7', '#fffdbd'];
  const randomColor = random(0, 2);
  element.style.backgroundColor = `${arrayOfColors[randomColor]}`;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

duplicateHTML(document.querySelector(".stars"), 312);

const stars = document.querySelectorAll('.star');
stars.forEach(star => {
  assignPosition(star);
  assignRotate(star);
  assignScale(star);
})

duplicateHTML(document.querySelector(".circles"), 888);
const circles = document.querySelectorAll('.circle');
circles.forEach(circle => {
  assignPosition(circle);
  assignBackgroundColor(circle);
  assignScale(circle);
})

$(document).on('mousemove', function(ev) {
  var mouseX = ev.originalEvent.pageX;
  var mouseY = ev.originalEvent.pageY;

  $(".element").each(function () {
    var elementX = $(this).position().left + 24;
    var elementY = $(this).position().top + 24;

    var diffX = mouseX - elementX;
    var diffY = mouseY - elementY;

    console.log(diffX, diffY);

    if (Math.abs(diffX) < 80 && Math.abs(diffY) < 80) {
      $(this).css("opacity", "0.9");
    } else {
      $(this).css("opacity", "0.4");
    }
  })
})
