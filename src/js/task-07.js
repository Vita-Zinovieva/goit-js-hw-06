const inputEl = document.querySelector("#font-size-control");

const spanEl = document.querySelector("#text");

inputEl.addEventListener('input', changeInput);
function changeInput(event) {
    spanEl.style.fontSize = event.currentTarget.value + "px";
};