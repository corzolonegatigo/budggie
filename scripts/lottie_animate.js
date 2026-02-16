import Lottie from "https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.13.0/lottie.min.js";


export function lottie_animation_show() {
    const overlay = document.querySelector('.animation-box');
    overlay.classList.toggle('hidden');
    const cover_back = document.querySelector('.cover-back');
    cover_back.classList.toggle('hidden');

    const animation = Lottie.loadAnimation({
    container: document.getElementById('lottie-container'),
    renderer: 'svg',       
    loop: true,          
    autoplay: true,       
    path: './public/lottie.json' 
    });


    setTimeout(() => {
        animation.stop();
        overlay.classList.toggle('hidden')
        cover_back.classList.toggle('hidden');
        window.location.href = './main.html'
    }, 3000);
}