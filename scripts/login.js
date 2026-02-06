import { APIKEY, DB_URL } from "./config.js";

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("login-submit").addEventListener("click", function (e) {
        e.preventDefault();

        let usernameIn = document.getElementById("username").value;
        let passwwordIn = document.getElementById("password").value;
        console.log(usernameIn);

        // send GET request

        const query = encodeURIComponent(JSON.stringify({ username: usernameIn }));
        var settings = {
            "async": true,
            "crossDomain": true,
            "method": "GET",
            "headers": {
                "content-type": "application/json",
                "x-apikey": APIKEY,
                "cache-control": "no-cache" 
            }
        }


        console.log(`${DB_URL}/individuals?q=${query}`);
        fetch(`${DB_URL}/individuals?q=${query}`, settings)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                console.log("Results:", data);
                if (data.length > 0) {
                console.log("Found user:", data[0]);
                window.localStorage.setItem("User", usernameIn);
                console.log(data[0])
                window.localStorage.setItem("Userdata", JSON.stringify(data[0]));
                

                // write id to seperate item
                window.localStorage.setItem('id', data[0]._id)
                console.log(data)
                
                window.location.href = './main.html'

                } else {
                console.log("No user found with that username");
                }
            })


        document.getElementById('username').value = '';
        document.getElementById("password").value = '';



        




    })
})