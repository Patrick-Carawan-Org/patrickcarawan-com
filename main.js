const frames = [
  "./public/p.svg",
  "./public/d.svg",
  "./public/c.svg"
];

let i = 0;
setInterval(() => {
  document.getElementById("favicon").href = frames[i];
  i = (i + 1) % frames.length;
}, 800);
