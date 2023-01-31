
const inputEl = document.querySelector('input');
const setDataLength = document.querySelector('input').dataset.length;
//console.log(setDataLength);

inputEl.addEventListener('blur', addColorInput);

function addColorInput(event) {
    //console.log(event.currentTarget.value);
    let eventEl = event.currentTarget.value.length;
   // console.log(eventEl);
 if(eventEl === setDataLength) {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
    
 } if(eventEl === 0) {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  
 } else {
    inputEl.classList.add('valid');
}
} 


