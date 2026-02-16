import { getUser } from "../index.js";

 if (window.localStorage.getItem('Userdata') !== null) {
    window.location.href = './main.html'
 }
localStorage.clear();
document.addEventListener("DOMContentLoaded", function () {

   

    document.getElementById("login-submit").addEventListener("click", function (e) {
        e.preventDefault();

        let usernameIn = document.getElementById("username").value;
        let passwwordIn = document.getElementById("password").value;
        console.log(usernameIn);

        getUser(usernameIn, passwwordIn);
        document.getElementById('username').value = '';
        document.getElementById("password").value = '';


        




    })
})