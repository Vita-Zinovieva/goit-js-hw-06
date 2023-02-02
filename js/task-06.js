
const inputEl = document.querySelector('input');
const setDataLength = document.querySelector('input').dataset.length*1;
console.log(setDataLength);

inputEl.addEventListener('blur', addColorInput);

function addColorInput(event) {
    console.log(event.currentTarget.value);
    let eventEl = event.currentTarget.value.length;
    console.log(eventEl);
    
   inputEl.classList.add('invalid');
   console.log(eventEl === setDataLength);
 if(eventEl === setDataLength) {

   inputEl.classList.replace('invalid','valid')
        
 } else {
   inputEl.classList.replace('valid','invalid')
     } 
};