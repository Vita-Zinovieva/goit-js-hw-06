const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("ul");
/* console.log(list);
const liItemEl1 = document.createElement('li');
liItemEl1.classList.add('item');
liItemEl1.textContent = 'Potatoes';

const liItemEl2 = document.createElement('li');
liItemEl2.classList.add('item');
liItemEl2.textContent = 'Mushrooms';

const liItemEl3 = document.createElement('li');
liItemEl3.classList.add('item');
liItemEl3.textContent = 'Garlic';

const liItemEl4 = document.createElement('li');
liItemEl4.classList.add('item');
liItemEl4.textContent = 'Tomatos';

const liItemEl5 = document.createElement('li');
liItemEl5.classList.add('item');
liItemEl5.textContent = 'Herbs';

const liItemEl6 = document.createElement('li');
liItemEl6.classList.add('item');
liItemEl6.textContent = 'Condiments';

list.append(liItemEl1, liItemEl2, liItemEl3, liItemEl4, liItemEl5, liItemEl6); */

let liListItem = [];
ingredients.forEach(ingredient => {
  const liItemEl = document.createElement('li')
  liItemEl.classList.add('item')
  liItemEl.textContent = ingredient
  liListItem.push(liItemEl) 
});
list.append(...liListItem);