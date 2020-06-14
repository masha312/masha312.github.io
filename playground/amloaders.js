
/* LOGO */
const intro = () => {
  const linePath = document.querySelector("#line .m")
  // figures out how long the path is
  const lineOffset1 = anime.setDashoffset(linePath)
  // set back to our element
  linePath.setAttribute('stroke-dashoffset', lineOffset1)
  anime({
    targets: linePath,
    strokeDashoffset: [lineOffset1, 0],
    duration: 3000,
    easing: 'easeInOutSine'
  })

  const lineLine = document.querySelector("#line .line")
  // figures out how long the path is
  const lineOffset2 = anime.setDashoffset(lineLine)

  lineLine.setAttribute('stroke-dashoffset', lineOffset2)
  anime({
    targets: lineLine,
    strokeDashoffset: [lineOffset2, 0],
    duration: 3000,
    delay: 3000,
  })
}

intro(); // commentout

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

/* LOADERS */
const loaders = document.querySelectorAll(".loader");
for (var i = 0; i < loaders.length; i++) {
  loaders[i].style.animationPlayState = 'running';
}


/* LOADER 2 */
const loader2 = document.querySelector(".loader-2-text");
const loader2Text = loader2.innerText;
const loader2TextRepeated = new Array(100).fill(loader2Text).join(' ');
loader2.innerHTML = loader2TextRepeated;

/* LOADER 9 */
anime({
  targets: ".loader-9-rainbow-1",
  rotate: 360,
  duration: 2800,
  loop: true,
  easing: 'linear',
})

anime({
  targets: ".loader-9-rainbow-2",
  rotate: -360,
  duration: 1800,
  loop: true,
  easing: 'linear',
})

/* LOADER 10 */
var tl10 = anime.timeline({
  delay: function(el, i) { return i * 1000 },
  duration: 600,
  easing: 'easeOutQuint',
  loop: true
});

tl10
.add({
  targets: '.loader-10-column-2',
  translateY: 14
})
.add({
  targets: '.loader-10-column-1',
  translateX: 56,
})
.add({
  targets: ['.loader-10-column-2', '.loader-10-column-1'],
  translateY: function (el, i) {
    return -14 * (i - 2)
  },
  translateX: function(el, i) {
    return 56 * i;
  },
  delay: 0
})
.add({
  targets: '.loader-10-column-3 .loader-10-bar',
  translateX: -56,
});

/* LOADER 11 */
anime({
  targets: '.circle-1',
  translateX: [
    { value: 49, duration: 800, delay: 500 },
    { value: 63, duration: 800, delay: 500 },
    { value: 24, duration: 800, delay: 500 },
    { value: 64, duration: 800, delay: 500 },
    { value: 42, duration: 600, delay: 200, easing: "easeInBack" },
    {value: 0, duration: 500, delay: 1000 }
  ],
  translateY: [
    { value: 35, duration: 800, delay: 500 },
    { value: -8, duration: 800, delay: 500 },
    { value: -23, duration: 800, delay: 500 },
    { value: 23, duration: 800, delay: 500 },
    { value: 7, duration: 600, delay: 200, easing: "easeInBack" },
    {value: 0, duration: 500, delay: 1000 }
  ],
  easing: "easeInOutSine",
  duration: 800,
  offset: 0,
  loop: true
})

anime({
  targets: '.circle-2',
  translateX: [
    { value: 70, duration: 800, delay: 500 },
    { value: 35, duration: 800, delay: 500 },
    { value: 60, duration: 800, delay: 500 },
    { value: 5, duration: 800, delay: 500 },
    { value: 32, duration: 600, delay: 200, easing: "easeInBack" },
    {value: 0, duration: 500, delay: 1000 }
  ],
  translateY: [
    { value: 0, duration: 800, delay: 500 },
    { value: -35, duration: 800, delay: 500 },
    { value: 25, duration: 800, delay: 500 },
    { value: 0, duration: 800, delay: 500 },
    { value: 7, duration: 600, delay: 200, easing: "easeInBack" },
    {value: 0, duration: 500, delay: 1000 }
  ],
  easing: "easeInOutSine",
  duration: 800,
  offset: 0,
  loop: true
})

anime({
  targets: '.circle-3',
  translateX: [
    { value: 56, duration: 800, delay: 500 },
    { value: 7, duration: 800, delay: 500 },
    { value: 21, duration: 800, delay: 500 },
    { value: 4, duration: 800, delay: 500 },
    { value: 24, duration: 600, delay: 200, easing: "easeInBack" },
    {value: 0, duration: 500, delay: 1000 }
  ],
  translateY: [
    {value: 35, duration: 800, delay: 500 },
    {value: -8, duration: 800, delay: 500 },
    { value: 36, duration: 800, delay: 500 },
    { value: -26, duration: 800, delay: 500 },
    { value: 13, duration: 600, delay: 200, easing: "easeInBack" },
    {value: 0, duration: 500, delay: 1000 }
  ],
  easing: "easeInOutSine",
  duration: 800,
  offset: 0,
  loop: true
})

anime({
  targets: '.circle-4',
  translateX: [
    { value: -28, duration: 800, delay: 500 },
    { value: 33, duration: 800, delay: 500 },
    { value: -18, duration: 800, delay: 500 },
    { value: 30, duration: 800, delay: 500 },
    { value: 4, duration: 600, delay: 200, easing: "easeInBack" },
    {value: 0, duration: 500, delay: 1000 }
  ],
  translateY: [
    {value: 35, duration: 800, delay: 500 },
    {value: 13, duration: 800, delay: 500 },
    { value: 25, duration: 800, delay: 500 },
    { value: -20, duration: 800, delay: 500 },
    { value: 1, duration: 600, delay: 200, easing: "easeInBack" },
    {value: 0, duration: 500, delay: 1000 }
  ],
  easing: "easeInOutSine",
  duration: 800,
  offset: 0,
  loop: true
})

anime({
  targets: '.circle-5',
  translateX: [
    { value: 28, duration: 800, delay: 500 },
    { value: -32, duration: 800, delay: 500 },
    { value: 28, duration: 800, delay: 500 },
    { value: -54, duration: 800, delay: 500 },
    { value: -1, duration: 600, delay: 200, easing: "easeInBack" },
    {value: 0, duration: 500, delay: 1000 }
  ],
  translateY: [
    {value: -35, duration: 800, delay: 500 },
    {value: 13, duration: 800, delay: 500 },
    { value: 1, duration: 800, delay: 500 },
    { value: -51, duration: 800, delay: 500 },
    { value: 7, duration: 600, delay: 200, easing: "easeInBack" },
    {value: 0, duration: 500, delay: 1000 }
  ],
  easing: "easeInOutSine",
  duration: 800,
  offset: 0,
  loop: true
})

anime({
  targets: '.circle-6',
  translateX: [
    { value: -21, duration: 800, delay: 500 },
    { value: -56, duration: 800, delay: 500 },
    { value: 4, duration: 800, delay: 500 },
    { value: -71, duration: 800, delay: 500 },
    { value: -18, duration: 600, delay: 200, easing: "easeInBack" },
    {value: 0, duration: 500, delay: 1000 }
  ],
  translateY: [
    {value: -35, duration: 800, delay: 500 },
    {value: 35, duration: 800, delay: 500 },
    { value: -23, duration: 800, delay: 500 },
    { value: 47, duration: 800, delay: 500 },
    { value: 4, duration: 600, delay: 200, easing: "easeInBack" },
    {value: 0, duration: 500, delay: 1000 }
  ],
  easing: "easeInOutSine",
  duration: 800,
  offset: 0,
  loop: true
})

anime({
  targets: '.circle-7',
  translateX: [
    { value: -70, duration: 800, delay: 500 },
    { value: 0, duration: 800, delay: 500 },
    { value: -35, duration: 800, delay: 500 },
    { value: 2, duration: 800, delay: 500 },
    { value: -41, duration: 600, delay: 200, easing: "easeInBack" },
    {value: 0, duration: 500, delay: 1000 }
  ],
  translateY: [
    {value: 0, duration: 800, delay: 500 },
    {value: 35, duration: 800, delay: 500 },
    { value: -34, duration: 800, delay: 500 },
    { value: -40, duration: 800, delay: 500 },
    { value: 16, duration: 600, delay: 200, easing: "easeInBack" },
    {value: 0, duration: 500, delay: 1000 }
  ],
  easing: "easeInOutSine",
  duration: 800,
  offset: 0,
  loop: true
})

anime({
  targets: '.circle-8',
  translateX: [
    { value: -84, duration: 800, delay: 500 },
    { value: -49, duration: 800, delay: 500 },
    { value: -84, duration: 800, delay: 500 },
    { value: -6, duration: 800, delay: 500 },
    { value: -49, duration: 600, delay: 200, easing: "easeInBack" },
    {value: 0, duration: 500, delay: 1000 }
  ],
  translateY: [
    {value: -35, duration: 800, delay: 500 },
    {value: 35, duration: 800, delay: 500 },
    { value: 1, duration: 800, delay: 500 },
    { value: 30, duration: 800, delay: 500 },
    { value: 10, duration: 600, delay: 200, easing: "easeInBack" },
    {value: 0, duration: 500, delay: 1000 }
  ],
  easing: "easeInOutSine",
  duration: 800,
  offset: 0,
  loop: true
})

anime({
  targets: '.circle',
  opacity: [
    { value: 0, duration: 800, delay: 5200},
    { value: 1, duration: 500, delay: 1000}
  ],
  easing: "easeInBack",
  loop: true
})
