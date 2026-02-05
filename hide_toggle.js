export default function hidden_toggle() {
    const hide_toggles = document.querySelectorAll('.hide-toggle');
    for (let i = 0; i < hide_toggles.length; i++) {
        hide_toggles[i].classList.toggle('hidden')
    }
}