import './html-equal.js';
import './riley-tests.js';

const test = QUnit.test;

function makeItemTemplate(item) {
    const uriName = encodeURIComponent(item.name);
    
    const dom = `
    <tr>
        <td><a href="item-detail.html?name=${uriName}">${item.name}</a></td>
        <td>${item.category}</td>
        <td>${item.quantity}</td>
    </tr>`;

    const template = document.createElement('template');
    template.innerHTML = dom;
    return template.content;
}

test('creates html from object gathered from local storage', assert => {
    //arrange
    const item = {
        name: 'Wool Socks', 
        category: 'winter', 
        quantity: '4'
    };

    //act
    const html = makeItemTemplate(item);

    //assert
    assert.htmlEqual(html, `
    <tr>
        <td><a href="item-detail.html?name=Wool%20Socks">Wool Socks</a></td>
        <td>winter</td>
        <td>4</td>
    </tr>
    `);
});

