// theres probably a better implementation for this idea 
export function hidden_toggle() {
    const hide_toggles = document.querySelectorAll('.hide-toggle');
    for (let i = 0; i < hide_toggles.length; i++) {
        hide_toggles[i].classList.toggle('hidden')
    }
}


// hide on mobile 
export function hide_on_mobile() {
    
    const mobile_vis_toggle  = document.querySelectorAll('.hide-on-mobile');
    function toggle_vis() {
        if (window.innerWidth <= 768) {
            for (let i = 0; i < mobile_vis_toggle.length; i++) {
                mobile_vis_toggle[i].classList.add('hidden');
            }
        } else {
            for (let i = 0; i < mobile_vis_toggle.length; i++) {
                mobile_vis_toggle[i].classList.remove('hidden');
            }
        }
    }
    document.addEventListener('resize', toggle_vis)
    toggle_vis()
    
}



