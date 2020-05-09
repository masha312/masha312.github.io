generateElements = (numOfElements, className, isSvg) => {
  removeElementsByClass(`${className}`);
  for (var i = 0; i < numOfElements; i++) {
    var div = document.createElement('div');
    div.setAttribute('class', `${className} element`);

    if (isSvg) {
      div.style.content = `url(../svg/${className}.svg)`;
    } else {
      assignSkew(div);
      assignSize(div);
      assignBackgroundColor(div);
    }

    if (className === 'squiggly') {
      assignBackgroundColor(div);
    }

    assignRotate(div);
    assignPosition(div);
    assignAnimationDelay(div);
    document.getElementsByClassName('confetti-container')[0].appendChild(div);
  }
}

removeElementsByClass = className => {
    var elements = document.getElementsByClassName(className);
    const elLength = elements.length;
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function assignPosition(element) {
  const randomLeft = random(0, 99);
  const randomTop = random(0, 99);
  element.style.left = `${randomLeft}%`;
  element.style.top = `${randomTop}%`;
}

function assignSkew(element) {
  const randomTransformNumber = random(-90, 90);
  element.style.transform = `skew(${randomTransformNumber}deg)`;
}

function assignRotate(element) {
  const randomTransformNumber = random(-90, 90);
  element.style.transform = `rotate(${randomTransformNumber}deg)`;
}

function assignSize(element) {
  const randomHeight = random(4, 12);
  const randomWidth = random(8, 16);
  element.style.height = `${randomHeight}px`;
  element.style.width=`${randomWidth}px`;
}

function assignBackgroundColor(element) {
  const arrayOfColors = ['#ff57b0', '#1bb7fa', '#fa561b', '#0cc95e', '#c90c5e', '#f2e935', '#0637c9'];
  const randomColor = random(0, 7);
  element.style.backgroundColor = `${arrayOfColors[randomColor]}`;
}

function assignAnimationDelay(element) {
  const delayNumber = random(0, 2000);
  element.style.animationDelay = `${delayNumber}ms`;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function removeButton() {
  var elem = document.getElementById('confetti-btn');
  elem.parentNode.removeChild(elem);
}
