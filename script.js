console.log('hello');

let baseFontSize = 3;

document.getElementById('decrease-font').addEventListener('click', () => {
  baseFontSize -= 0.1;
  document.documentElement.style.setProperty('--base-font-size', `${baseFontSize}vh`);
});

document.getElementById('increase-font').addEventListener('click', () => {
  baseFontSize += 0.1;
  document.documentElement.style.setProperty('--base-font-size', `${baseFontSize}vh`);
});

