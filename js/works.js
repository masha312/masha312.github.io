const images = document.querySelectorAll(".card__image");

images.forEach((image, index) => {
  image.style.backgroundImage = 'url(images/works/image' + index + '.png)';
})

var acc = document.getElementsByClassName("toggle");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("toggle--active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "flex") {
      panel.style.display = "none";
    } else {
      panel.style.display = "flex";
    }
  });
}
