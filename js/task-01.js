const liItemEl = document.querySelectorAll('li.item');
console.log (`Number of categories:`,(liItemEl).length); 

  const liEl = document.querySelectorAll('li.item');
  for ( const element of liEl) {
    console.log('Category:', (element.querySelector('h2')).textContent);
    
    console.log('Elements:', (element.querySelectorAll('li')).length); 
 }; 