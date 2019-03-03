export default function makeItemTemplate(item) {
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