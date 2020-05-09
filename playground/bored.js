animateDots = () => {
  const dots = document.querySelectorAll(".dot");
  console.log(dots.length)
  dots.forEach((dot, index) => {
    dot.animate(
    [
      {opacity: 0},
      {opacity: 1}
    ],
    {
      duration: 1000,
      iterations: Infinity,
      delay: index * 100
    }
  )
  })
}

const getActivity = () => {
  const boredButton = document.querySelector('#bored-btn');
  boredButton.innerHTML = "let's see<span class='dot'>.</span><span class='dot'>.</span><span class='dot'>.</span> ";
  animateDots();

  boredButton.classList.add("disappear");

  /* setTimeout(removeButton(), 2000) */

  const line = document.createElement('p');
  document.body.appendChild(line)

  fetch(
  `https://www.boredapi.com/api/activity`
)
  .then(response => {
    // Convert to JSON
    console.log('json caught')
    return response.json()
  })
  // handle json data
  .then(json => {
    // no meta info, pagination etc
    document.body.classList.add(json.type);
    line.innerHTML = json.activity;
  })
  .catch(error => {
    console.log('some errror :(')
  })
};

const duplicateHTML = (element, quantity) => {
  const elementsArray = new Array(quantity).fill(element.innerHTML).join('');
  element.innerHTML = elementsArray;
}

duplicateHTML(document.querySelector(".particles"), 20);

const particles = document.querySelectorAll('.particle');
particles.forEach(particle => {
  assignBoxShadow(particle);
  assignPosition(particle);
  assignSize(particle);
  /*getAnimationDelay(particle);*/
  getAnimationDuration(particle);
  getTransformOrigin(particle);
})

function getAnimationDuration(element) {
  const animationDuration = random(6000, 10000);
  element.style.animationDuration = `${animationDuration}ms`;
}

function getAnimationDelay(element) {
  const animationDelay = random(1000, 10000);
  element.style.animationDelay = `${animationDelay}ms`;
  element.style.opacity = 0.6;
}

function getTransformOrigin(element) {
  const transformOrigin = random(-5000, 10000);
  element.style.transformOrigin = `${transformOrigin}`;
}

function assignSize(element) {
  const randomSize = random(8, 12);
  element.style.height = `${randomSize}vmin`;
  element.style.width = `${randomSize}vmin`;
}

function assignBoxShadow(element) {
  const arrayOfColors = ['#583C87', '#E45A84', '#FFACAC'];
  const randomColor = random(0, 3);
  element.style.boxShadow = `120px 60px 20px 20px ${arrayOfColors[randomColor]}`
}

function assignPosition(element) {
  const randomLeft = random(0, 99);
  const randomTop = random(0, 99);
  element.style.left = `${randomLeft}%`;
  element.style.top = `${randomTop}%`;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
