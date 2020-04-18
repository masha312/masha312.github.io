const lines = document.querySelectorAll(".line");

lines.forEach((line, index) => {
  const lineText = line.innerText;
  const lineRepeated = new Array(50).fill(lineText).join(' ');
  console.log(lineRepeated);
  const block = document.querySelector(`.block${index + 1}`)
  block.innerHTML = lineRepeated;
});
