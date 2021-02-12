function promenaBoje() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  console.log(r, g, b);
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
}
