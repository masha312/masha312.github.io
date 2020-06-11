
/* LOGO */
const intro = () => {
  const linePath = document.querySelector("#line path")
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

  const lineLine = document.querySelector("#line line")
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
  targets: '#demo-svg polygon',
  points: [
    {value: '32 32, 208 32, 208 208, 32 208'},
    {value: '120 32, 208 208, 120 208, 32 208'}
  ],
  easing:'easeOutSine',
  duration: 2400,
  loop:true,
  direction: 'alternate'
})

var path1 = anime.path('.path-1');

anime({
  targets: '.circle-1',
  translateX: path1('x'),
  translateY: path1('y'),
  rotate: path1('angle'),
  easing: 'linear',
  duration: 2000,
  loop: true
});


var path2 = anime.path('.path-2');

anime({
  targets: '.circle-2',
  translateX: path2('x'),
  translateY: path2('y'),
  rotate: path2('angle'),
  easing: 'linear',
  duration: 2000,
  loop: true
});

var path3 = anime.path('.path-3');

anime({
  targets: '.circle-3',
  translateX: path3('x'),
  translateY: path3('y'),
  rotate: path3('angle'),
  easing: 'linear',
  duration: 2000,
  loop: true
});

var path4 = anime.path('.path-4');

anime({
  targets: '.circle-4',
  translateX: path4('x'),
  translateY: path4('y'),
  rotate: path4('angle'),
  easing: 'linear',
  duration: 2000,
  loop: true
});
