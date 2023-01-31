const form = document.querySelector('form.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event){
event.preventDefault();
const formEl = event.currentTarget.elements;
const mail  = formEl.email.value;
const password  = formEl.password.value;

const formData = {
    mail, password
}; event.currentTarget.reset();

 if(formEl.value === ' ') {
    return alert("inputs cannot be empty");
} 

console.log(formData);

}



/* if(mail.value === ' ' || password.value === ' ') {
    return alert("inputs cannot be empty");
} 

 const formData = new formData(event.curentTarget);

const data = []; 
formData.forEach((value, name) => {
    data.push('onFormSubmit -> name', name);
    data.push('onFormSubmit -> value', value);
});
}
 */