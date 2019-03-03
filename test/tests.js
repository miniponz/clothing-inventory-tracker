import './html-equal.js';
import './riley-tests.js';
import makeItemTemplate from '../src/item.template.js';

const test = QUnit.test;

test('creates html from object gathered from local storage', assert => {
    //arrange
    const item = {
        name: 'Wool Socks', 
        season: 'winter', 
        category: 'shelter',
        quantity: '4'
    };

    //act
    const html = makeItemTemplate(item);

    //assert
    assert.htmlEqual(html, `
    <tr>
        <td><a href="item-detail.html?name=Wool%20Socks">Wool Socks</a></td>
        <td>winter</td>
        <td>shelter</td>
        <td>4</td>
    </tr>
    `);
});

