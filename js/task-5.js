function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyElem = document.querySelector('body');
const btnElem = bodyElem.querySelector('.change-color');
const spanElem = bodyElem.querySelector('.color');

btnElem.addEventListener('click', onBtnElemClick);

function onBtnElemClick() {
  const currentColor = getRandomHexColor();
  bodyElem.style.backgroundColor = currentColor;
  spanElem.textContent = currentColor;
}

