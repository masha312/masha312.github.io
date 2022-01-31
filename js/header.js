window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("name").style.fontSize = "20px";
    document.getElementById("email").style.fontSize = "16px";
    document.getElementById("avatar").style.height = "40px";
  } else {
    document.getElementById("name").style.fontSize = "28px";
    document.getElementById("email").style.fontSize = "20px";
    document.getElementById("avatar").style.height = "96px";

  }
}
