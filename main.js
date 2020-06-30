const lines = document.querySelectorAll(".appear");
lines.forEach((line, index) => {
    line.style.animationPlayState = 'running';
    const delay = index * 200;
    line.style.animationDelay = `${delay}ms`;
})
