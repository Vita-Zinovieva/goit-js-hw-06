//Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
const liItemEl = document.querySelectorAll('li.item');
console.log (`Number of categories:`,(liItemEl).length); 




//Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку 
//елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
  const liEl = document.querySelectorAll('li.item');
  for ( const element of liEl) {
    console.log('Category:', (element.querySelector('h2')).textContent);
    
    console.log('Elements:', (element.querySelectorAll('li')).length); 
 }
 
 
 


 