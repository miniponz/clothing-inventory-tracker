const itemForm = document.getElementById('item-form');


itemForm.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(itemForm);
    //pull input and store in an object.
    
    const singleItem = {
        name: formData.get('name'),
        season: formData.get('season'),
        category: formData.get('category'),
        quantity: formData.get('quantity')
    };

    let allItems = [];
    //empty array
    const jsonString = window.localStorage.getItem('allItems');
    if(jsonString){
        allItems = JSON.parse(jsonString);
    }
    // window.localStorage.get item
    // use .push() to add singleItem to allItems ?
    allItems.push(singleItem);

    const serialize = JSON.stringify(allItems);
    window.localStorage.setItem('allItems', serialize);
    // make jsonString
    // window.localStorage.set item
    console.log(allItems);

    window.location = 'item-detail.html';
    
});

