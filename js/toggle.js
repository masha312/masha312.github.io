function showMoreContent() {
  // Get the checkbox
  var checkbox = document.getElementById("checkbox");
  // Get the output text
  var extraContentInline = document.querySelectorAll(".extra-content--inline");
  var extraContentBlock = document.querySelectorAll(".extra-content--block");


  if (checkbox.checked == true){
    extraContentInline.forEach(content => {
      content.style.display = "inline";
    });
    extraContentBlock.forEach(content => {
      content.style.display = "block";
    });
  } else {
    extraContentInline.forEach(content => {
      content.style.display = "none";
    });
    extraContentBlock.forEach(content => {
      content.style.display = "none";
    });
  }
}
