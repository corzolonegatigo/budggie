import { listing_items } from "./mock_data"

document.addEventListener("DOMContentLoaded", function () { 
    const items_section = document.getElementById('items');

    for (const item in listing_items) {
        const itemdata = listing_items[item]
        const item_listing = document.createElement('div');
        item_listing.className = "listing-item";
        

        const item_thumbnail = document.createElement('img');
        item_thumbnail.src = itemdata.img_main;
        item_thumbnail.className = "thumbnail";

        const item_title = document.createElement('h2');
        item_title.innerText = itemdata.title;
        
        const item_desc = document.createElement('p');
        item_desc.innerText = itemdata.desc;
        item_desc.className = "item-description"

        const item_seller = document.createElement('h3');
        item_seller.innerText = `Sold by ${itemdata.sold_by}`

        
        // append to specific post
        item_listing.appendChild(item_thumbnail);
        item_listing.appendChild(item_title);
        item_listing.appendChild(item_desc);
        item_listing.appendChild(item_seller);

        // append post to section

        items_section.appendChild(item_listing);

        item_listing.addEventListener('click', function(e) {
            e.preventDefault();
            window.localStorage.setItem('item-listing-data', JSON.stringify(itemdata));
            window.location.href = "./selecting_item.html";

        })



    }


})