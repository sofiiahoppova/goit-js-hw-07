const usernameElem = document.querySelector('#name-input');
const spanElem = document.querySelector('#name-output')
usernameElem.addEventListener('input', onUsernameElemInput);

function onUsernameElemInput(event) {
    if (usernameElem.value.trim() === '') {
        spanElem.textContent = 'Anonymous';
    } else spanElem.textContent = usernameElem.value.trim();
}