 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}console.log(getRandomHexColor());
 

const bodyRef = document.querySelector('body');
const buttonRef = document.querySelector('.change-color');
const spanRef = document.querySelector('.color');

let buttonClick = 0;
buttonRef.addEventListener('click', onMouseClick, getRandomHexColor);

function onMouseClick(event){
  spanRef.textContent = getRandomHexColor();
  bodyRef.style.backgroundColor = getRandomHexColor();
}