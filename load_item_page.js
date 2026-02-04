document.addEventListener("DOMContentLoaded", function () { 
    const item_data = JSON.parse(window.localStorage.getItem('item-listing-data'));

    // set item specific fields
    const page_title = document.getElementById('item-name-page-title');
    page_title.innerText = item_data.title;

    document.getElementById('item-title').innerText = item_data.title;
    

    document.getElementById('item-desc').innerText = item_data.desc

    document.getElementById('price').innerText = `$${item_data.price}`

    document.getElementById('seller').innerText = item_data.sold_by


})