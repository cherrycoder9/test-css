console.log('hello');

const rootStyles = getComputedStyle(document.documentElement);
const minFontSize = parseFloat(rootStyles.getPropertyValue('--min-font-size'));
const maxFontSize = parseFloat(rootStyles.getPropertyValue('--max-font-size'));

let baseFontSize = 3;

document.getElementById('decrease-font').addEventListener('click', () => {
  const newBaseFontSize = baseFontSize - 0.1;
  const vhInPx = window.innerHeight / 100;
  const newBaseFontSizeInPx = vhInPx * newBaseFontSize;

  if (newBaseFontSizeInPx < minFontSize) {
    alert(`최소 글꼴 크기(${minFontSize}px)에 도달했습니다.`);
  } else {
    baseFontSize = newBaseFontSize;
    document.documentElement.style.setProperty('--base-font-size', `${baseFontSize}vh`);
  }
});

document.getElementById('increase-font').addEventListener('click', () => {
  const newBaseFontSize = baseFontSize + 0.1;
  const vhInPx = window.innerHeight / 100;
  const newBaseFontSizeInPx = vhInPx * newBaseFontSize;

  if (newBaseFontSizeInPx > maxFontSize) {
    alert(`최대 글꼴 크기(${maxFontSize}px)에 도달했습니다.`);
  } else {
    baseFontSize = newBaseFontSize;
    document.documentElement.style.setProperty('--base-font-size', `${baseFontSize}vh`);
  }
});

