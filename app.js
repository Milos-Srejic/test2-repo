function promenaBoje() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  console.log(r, g, b);
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
}

function sat() {
  let date = new Date();
  let sati = date.getHours();
  let minuti = date.getMinutes();
  let sekunde = date.getSeconds();

  document.getElementById(
    'sat'
  ).innerHTML = `${sati}h : ${minuti}m : ${sekunde}s`;
}

setInterval(() => {
  sat();
}, 1000);
