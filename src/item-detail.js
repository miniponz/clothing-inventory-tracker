const jsonString = window.localStorage.getItem('allItems');
//pull array from local storage

let allItems = [];
let populateItem = null;

if(jsonString) {
    allItems = JSON.parse(jsonString);
}

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

const name = document.getElementById('name');
const season = document.getElementById('season');
const category = document.getElementById('category');
const quantity = document.getElementById('quantity');

//text content = something.value
name.textContent = populateItem.name;
season.textContent = populateItem.season;
category.textContent = populateItem.category;
quantity.textContent = populateItem.quantity;   