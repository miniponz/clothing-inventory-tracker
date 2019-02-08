const jsonString = window.localStorage.getItem('allItems');
//pull array from local storage

let allItems = [];
let populateItem = null;

if(jsonString) {
    allItems = JSON.parse(jsonString);
    //populateItem = allItems[allItems.length - 1];
}
//if jsonString, parse

const searchParams = new URLSearchParams(window.location.search);
const itemToFind = searchParams.get('name');

for(let i = 0; i < allItems.length; i++){
    let currentItem = allItems[i];

    if(currentItem.name === itemToFind){
        populateItem = currentItem;
        break;
    } else {
        populateItem = allItems[allItems.length - 1];
    }
}

console.log(populateItem);
//search params


//text content = something.value
const name = document.getElementById('name');
const category = document.getElementById('category');
const quantity = document.getElementById('quantity');

name.textContent = populateItem.name;
category.textContent = populateItem.category;
quantity.textContent = populateItem.quantity;