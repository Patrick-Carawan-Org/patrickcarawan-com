const frames = [
  "./public/p.svg",
  "./public/d.svg",
  "./public/c.svg"
];

let i = 0;
setInterval(() => {
  document.getElementById("favicon").href = frames[i] + "?v=" + Date.now();
  console.log("Hello", document.getElementById("favicon"))
  i = (i + 1) % frames.length;
}, 800);
