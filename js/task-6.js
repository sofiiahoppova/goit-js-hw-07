function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let markup = [];
  let dimention = {
    width: 20,
    height: 20,
  }

  for (let index = 0; index < amount; index++) {
    dimention.width += 10;
    dimention.height += 10;

    const box = document.createElement('div');
    box.style.width = `${dimention.width}px`;
    box.style.height = `${dimention.height}px`;
    box.style.marginBottom = '5px';
    box.style.backgroundColor = getRandomHexColor();
    markup.push(box);
  }

  divBoxesElem.append(...markup);
}

const inputElem = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const divBoxesElem = document.querySelector('#boxes');

createBtn.addEventListener('click', onCreateBtnClick);
destroyBtn.addEventListener('click', ondestroyBtnClick);

function onCreateBtnClick() {
  divBoxesElem.innerHTML = '';
  if (inputElem.value < 1 || inputElem.value > 100) {
    return;
  }
  createBoxes(inputElem.value);
  inputElem.value = '';
}

function ondestroyBtnClick() {
  divBoxesElem.innerHTML = '';
}