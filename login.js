import { APIKEY } from "./config.js";

const DB_URL = "https://ipapp-673e.restdb.io/rest/"
document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("login-submit").addEventListener("click", function (e) {
        e.preventDefault();
        console.log(13);

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
                } else {
                console.log("No user found with that username");
                }
            })
        




    })
})