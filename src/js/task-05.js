let nameOutputEl = document.querySelector("span");
let inputEl = document.querySelector("input");

  inputEl.addEventListener('input', addInput);

 function addInput(event) {
   if  (event.currentTarget.value.length === 0) {
    nameOutputEl.textContent = "Anonymous";
    } else {
    nameOutputEl.textContent = event.currentTarget.value;
    }
    };