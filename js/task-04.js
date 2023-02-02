const button = document.querySelectorAll("button");
console.log(button[0]);
console.log(button[1]);

const spanValue = document.querySelector("span");

let counterValue = 0;
    console.log(counterValue);

    button[0].addEventListener('click', () => {
        counterValue -= 1;
        console.log(counterValue);
        spanValue.textContent = counterValue;

    }); 

    button[1].addEventListener('click', () => {
        counterValue += 1;
        console.log(counterValue);
        spanValue.textContent = counterValue;

    }); 

