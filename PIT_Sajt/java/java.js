const logo = document.getElementById('rotatingLogo');
let isColored = false;

setInterval(() => {
  logo.style.transform = 'rotate(360deg)';
  logo.style.filter = isColored
    ? 'none'
    : 'hue-rotate(220deg) brightness(1.2)';

  setTimeout(() => {
    logo.style.transform = 'rotate(0deg)';
  }, 1000);

  isColored = !isColored;
}, 10000);