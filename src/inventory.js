import populateTable from './populate-table.js';

const tbody = document.getElementById('all-items');
const form = document.getElementById('form');
const categorySort = document.getElementById('category-sort');
const jsonString = window.localStorage.getItem('allItems');
let allItems = [];

if(jsonString){
    allItems = JSON.parse(jsonString);
}
   
form.addEventListener('submit', event => {
    event.preventDefault();
    let matchingItems = [];
    
    const category = categorySort.value;

    for(let i = 0; i < allItems.length; i++){
        let currentItem = allItems[i];
    
        if(currentItem.category === category){
            matchingItems.push(currentItem);
        } 
    }
    while(tbody.firstChild){
        tbody.removeChild(tbody.firstChild);
    }
    populateTable(matchingItems);

});

populateTable(allItems);

