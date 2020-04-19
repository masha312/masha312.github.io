function createConfetti() {
  for (var i = 0; i < 700; i++) {
    var div = document.createElement('div');
    div.setAttribute('class', 'confetto');
    assignPosition(div);
    assignSkewAndRotate(div);
    assignSize(div);
    assignColor(div);
    assignAnimationDelay(div);
    document.getElementsByClassName('confetti-container')[0].appendChild(div);
  }
}

function assignPosition(confetto) {
  const randomLeft = random(0, 100);
  const randomTop = random(0, 100);
  confetto.style.left = `${randomLeft}%`;
  confetto.style.top = `${randomTop}%`;
}

function assignSkewAndRotate(confetto) {
  const randomTransformNumber = random(-90, 90);
  confetto.style.transform = `skew(${randomTransformNumber}deg)`;
  confetto.style.transform = `rotate(${randomTransformNumber}deg)`;
}

function assignSize(confetto) {
  const randomHeight = random(8, 16);
  const randomWidth = random(12, 24);
  confetto.style.height = `${randomHeight}px`;
  confetto.style.width=`${randomWidth}px`;
}

function assignColor(confetto) {
  const arrayOfColors = ['#ff57b0', '#1bb7fa', '#fa561b', '#0cc95e', '#c90c5e', '#f2e935', '#0637c9'];
  const randomColor = random(0, 7);
  confetto.style.backgroundColor = `${arrayOfColors[randomColor]}`;
}

function assignAnimationDelay(confetto) {
  const delayNumber = random(0, 2000);
  confetto.style.animationDelay = `${delayNumber}ms`;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

createConfetti();
