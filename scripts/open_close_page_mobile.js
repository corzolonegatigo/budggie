import { hidden_toggle } from "./hide_toggle.js";

const toggle_page_button = document.getElementById('page-toggle');
const show_on_mobile = document.querySelectorAll('.show-on-mobile')
const html_main = document.getElementById('html-main');
const page_main = document.querySelector('.page-main');
const toggle_arrow = document.getElementById('triangle');

const selected_item = document.getElementById('selected-item-section');

document.addEventListener("DOMContentLoaded", function () { 

    // toggle vis of page contents
    const page = document.querySelector('.page-main')

    function load_page_contents() {
        
                
        html_main.classList.toggle('half-size');
        html_main.classList.toggle('full-size');
        hidden_toggle()

        if (selected_item) {
            selected_item.classList.toggle('hidden')
        }

        toggle_arrow.classList.toggle('flip')
    }
    

    function load_page_toggle_functionality() {
        if (window.innerWidth <= 768) {
            
        
            const params = new URLSearchParams(window.location.search);
            let page_open = Boolean(params.get('page_open') || false);
            console.log(page_open)

            

            

            

            for (let i = 0; i < show_on_mobile.length; i++) {
                const tag_to_edit = show_on_mobile[i]
                tag_to_edit.classList.remove('hidden') 
            }
            page.classList.add('hidden');

            if (page_open) {
                load_page_contents()
                
            }
        
            toggle_page_button.addEventListener('click', function (e) {
                page_open = !page_open
                console.log(page_open)
                if (page_open) {
                    window.history.pushState(null, '', `?page_open=open`);
                } else {
                    window.history.pushState(null, '', `?page_open=`);
                }
                
                load_page_contents()
            })
        } else {
            for (let i = 0; i < show_on_mobile.length; i++) {
                const tag_to_edit = show_on_mobile[i]
                tag_to_edit.classList.add('hidden')
                
            }
            page.classList.remove('hidden');
            const url = new URL(window.location);

            url.searchParams.delete('page_open');
            window.history.replaceState(null, '', url.toString());
               
        }
    }

    document.addEventListener('resize', () => {
        load_page_toggle_functionality()
    })



    load_page_toggle_functionality()

})