import hidden_toggle from "./hide_toggle";

document.addEventListener("DOMContentLoaded", function () { 
    const item_data = JSON.parse(window.localStorage.getItem('item-listing-data'));

    // set item specific fields
    const page_title = document.getElementById('item-name-page-title');
    page_title.innerText = item_data.title;

    document.getElementById('item-title').innerText = item_data.title;
    
    document.getElementById('item-desc').innerText = item_data.desc;

    document.getElementById('price').innerText = `$${item_data.price}`;

    document.getElementById('seller').innerText = item_data.sold_by;


    // set innertext for initially hidden elements
    document.getElementById('item-name').innerText = item_data.title;

    const select_item_button = document.getElementById('select-item-button');
    const back_to_item_page = document.getElementById('return-to-viewing');
    select_item_button.addEventListener('click', function (e) {
        hidden_toggle()
        window.scrollTo(0, 0);

    });

    back_to_item_page.addEventListener('click', function (e) {
        hidden_toggle()
        window.scrollTo(0, 0);

    })

    
})