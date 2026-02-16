import { updateItem } from "../index.js";

document.addEventListener("DOMContentLoaded", function() { 
    const overlay = document.querySelector('.annoucement-overlay');
    const userdata = JSON.parse(window.localStorage.getItem('Userdata'));
    const item = userdata.currentitem;
    console.log(userdata)

    document.getElementById('item').innerText = `${item}!`

    setTimeout(() => {
        overlay.classList.toggle('hidden')
        
    }, 2500);

    // another delay so they dont immediately click off without reading
    setTimeout(() => {
        document.getElementById('page').addEventListener('click', function (e) {
            updateItem('', userdata)
        })
        
    }, 2000);


})