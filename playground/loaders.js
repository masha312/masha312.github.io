const green = '#77ed88';
const yellow = '#eded3e';

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}


/* ANIMATION FOR LOADER 1 */
const squares1 = document.querySelectorAll(".cube-1");
squares1.forEach((square, index) => {
  square.animate(
    [
      {backgroundColor: green, opacity: 0},
      {backgroundColor: yellow, opacity: 0.6},
      {backgroundColor: green, opacity: 0}
    ],
    {

      delay: 50 * index,
      duration: 5000,
      iterations: Infinity,
      direction: 'alternate',
      fill: 'forwards'
    }
  )
});

const cubes1 = document.querySelectorAll(".cubes-wrapper-1");
console.log(cubes1.length);
cubes1.forEach((cube, index) => {
  cube.animate(
    [
      {transform: 'rotateX(0deg) rotateY(0deg)'},
      {transform: 'rotateX(360deg) rotateY(360deg)'}
    ],
    {
      delay: 300 * index,
      duration: 5000,
      iterations: Infinity,
      fill: 'forwards',
      direction: 'alternate'
    }
  )
});

/* ANIMATION FOR LOADER 2 */
const loader2 = document.querySelectorAll(".cubes-wrapper-2");
loader2.forEach((loader, index) => {
  loader.animate(
    [
      {transform: 'rotateX(0deg) rotateY(0deg)'},
      {transform: 'rotateX(180deg) rotateY(180deg)'},
    ],
    {

      duration: 4000,
      iterations: Infinity,
      fill: 'forwards'
    }
  )
});

/* ANIMATION FOR LOADER 3 */
const squares3 = document.querySelectorAll(".cube-3");
squares3.forEach((square, index) => {
  square.animate(
    [
      {backgroundColor: green, opacity: 0},
      {backgroundColor: yellow, opacity: 0.6},
      {backgroundColor: green, opacity: 0}
    ],
    {

      delay: 500 * index,
      duration: 800,
      iterations: Infinity,
      direction: 'alternate',
      fill: 'forwards'
    }
  )
});

const loader3 = document.querySelectorAll(".cubes-wrapper-3");
loader3.forEach((loader, index) => {
  const startRotation = random(0, 180);
  const endRotation = startRotation + 180;
  loader.animate(
    [
      {transform: `rotateX(${startRotation}deg) rotateY(${startRotation}deg)`},
      {transform: `rotateX(${endRotation}deg) rotateY(${endRotation}deg)`},
    ],
    {
      duration: 4000,
      iterations: Infinity,
      fill: 'forwards',
      direction: 'alternate'
    }
  )
});

/* ANIMATION FOR LOADER 4 */
const squares4 = document.querySelectorAll(".cube-4");
squares4.forEach((square, index) => {
  square.animate(
    [
      {backgroundColor: green, opacity: 0},
      {backgroundColor: yellow, opacity: 0.6},
      {backgroundColor: green, opacity: 0}
    ],
    {

      delay: 50 * index,
      duration: 2000,
      iterations: Infinity
    }
  )
});

const cubes4 = document.querySelectorAll(".cubes-wrapper-4");
console.log(cubes4.length);
cubes4.forEach((cube, index) => {
  cube.animate(
    [
      {transform: 'rotateX(0deg) rotateY(0deg)'},
      {transform: 'rotateX(180deg) rotateY(180deg)'}
    ],
    {
      delay: 500 * index,
      duration: 1500,
      iterations: Infinity,
      fill: 'forwards',
      direction: 'alternate',
      easing: 'ease-in-out'
    }
  )
});

/* NAVIGATION */
const navigation = document.querySelector("ul");
navigation.style.animationPlayState = 'running';

$(document).ready(function () {
    $(this).scrollTop(0);
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="loader-#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('current');
        })
        $(this).addClass('current');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('nav ul li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('nav ul li a').removeClass("current");
            currLink.addClass("current");
        }
        else{
            currLink.removeClass("current");
        }
    });
}

/*
document.addEventListener("DOMContentLoaded", () => {
     // get all the links with an ID that starts with 'loader'
     const listOfLinks = document.querySelectorAll("a[href^='#loader");
     // loop over all the links
     listOfLinks.forEach(function (link) {
       // listen for a click
       link.addEventListener('click',  () => {
         // toggle highlight on and off when we click a link
         listOfLinks.forEach( (link) => {
           if (link.classList.contains('current')) {
             link.classList.remove('current');
           }
         });
         link.classList.add('current');
         // get the element where to scroll
         let ref = link.href.split('#loader');
         ref = "#loader" + ref[1];

       })
       })
     })
*/
