const jsonString = window.localStorage.getItem('allItems');

let allItems = [];

if(jsonString){
    allItems = JSON.parse(jsonString);
}

const tbody = document.getElementById('all-items');

function populateTable() {
    for(let i = 0 ; i < allItems.length; i++){
        const currentItem = allItems[i];

        const tr = document.createElement('tr');
        tbody.appendChild(tr);

        const nameCell = document.createElement('td');
        tr.appendChild(nameCell);
        const a = document.createElement('a');
        a.href = 'item-detail.html?name=' + encodeURIComponent(currentItem.name);
        a.textContent = currentItem.name;
        nameCell.appendChild(a);

        const categoryCell = document.createElement('td');
        categoryCell.textContent = currentItem.category;
        tr.appendChild(categoryCell);

        const quantityCell = document.createElement('td');
        quantityCell.textContent = currentItem.quantity;
        tr.appendChild(quantityCell);

    //next this for loop in a function 
    }
}

const form = document.getElementById('form');
const categorySort = document.getElementById('category-sort');

form.addEventListener('submit', function(event){
    event.preventDefault();
    
    const sortValue = categorySort.value;
    console.log(sortValue); 

    for(let i = 0; i < allItems.length; i++){
        let currentItem = allItems[i];
    
        if(currentItem.category === sortValue){
           
            allItems.push(currentItem);
        } 
    }
    // call function again only when category sought === category.value. 
    populateTable();
});

// call the for loop function to fill the table intially. 

// set constant to grab form, add event listener "submit"
    //populateTable(category);

// create new search params that will sort based on value, 
// will also have to figure out how to assign to URI
