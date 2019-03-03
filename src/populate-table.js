import makeItemTemplate from './item-template.js';
const tbody = document.getElementById('all-items');

export default function populateTable(items) {
    items.forEach(item => {
        const dom = makeItemTemplate(item);
        tbody.appendChild(dom);
    });
}