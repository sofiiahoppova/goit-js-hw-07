const categories = document.querySelectorAll('.item');
console.log('Quantity of categories: ', categories.length);

for (const category of categories) {
    console.log('Category: ', category.querySelector('h2').textContent);
    const liElems = category.querySelectorAll('li');
    console.log('Items: ', liElems.length);
}