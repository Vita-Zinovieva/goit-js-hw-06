function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxRef = document.querySelector('#boxes');
const divControlRef = document.querySelector('input');


const createBoxes = amount => {
    const addElements = []
    for (let i = 0; i < amount; i++) {
        let elem = document.createElement('div')
        elem.style.height = `${30 + 10 * i}px`
        elem.style.width = `${30 + 10 * i}px`
        elem.style.background = getRandomHexColor()
        addElements.push(elem)
    } 
    return addElements
}; 


createBtn.addEventListener('click', () => {
	let addBoxes = createBoxes((divControlRef.value));
  boxRef.append(...addBoxes);
});

destroyBtn.addEventListener('click', () => {
	boxRef.innerHTML = ' ';
});  