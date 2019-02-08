const form = document.getElementById('form');



form.addEventListener('submit', function(event){
    event.preventDefault();
    //pull input and store in an object.
    const name = form.elements.name.value;
    const category = form.elements.category.value;
    const quantity = form.elements.quantity.value;
    //console.log(name, category);
    
    const singleItem = {
        name: name,
        category: category,
        quantity: quantity
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

