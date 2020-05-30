
/* LOGO
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

intro();
*/

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
const loaders = document.querySelector(".loader");
loaders.style.animationPlayState = 'running';

/* LOADER 1 */
const loader1 = document.querySelector(".loader-2-text");
const loader1Text = loader1.innerText;
const loader1TextRepeated = new Array(100).fill(loader1Text).join(' ');
loader1.innerHTML = loader1TextRepeated;
