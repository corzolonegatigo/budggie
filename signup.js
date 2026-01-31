import { APIKEY } from "./config.js";

const DB_URL = "https://ipapp-673e.restdb.io/rest/"
document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("login-submit").addEventListener("click", function (e) {
        e.preventDefault();
        console.log(13);

        let emailIn = document.getElementById("email").value;
        let usernameIn = document.getElementById("username").value;
        let passwwordIn = document.getElementById("password").value;
        let image = document.getElementById("imageInput").files[0];

            /*
        if (!image) {
            image = new File(
                "./public/default_profile.png"
            )
        }*/



        
        let signupDataJSON = {
            "email": emailIn,
            "username": usernameIn,
            "password": passwwordIn,

        };

        // to add files
        const signupDataForm = new FormData();

        signupDataForm.append("email", emailIn);
        signupDataForm.append("username", usernameIn);
        signupDataForm.append("password", passwwordIn);

        if (image) {
            signupDataForm.append("profilepicture", image);
        };
        

        // write post request
        var postsettings = {
            async: true,
            method: "POST",
            headers: {
                "x-apikey": APIKEY,
                "cache-control": "no-cache",
            },
            body: signupDataForm
            
            }

        
        fetch(`${DB_URL}/individuals`, postsettings)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                console.log("Signup:", data);
            })
            .catch(err => console.error("Signup failed:", err));
        
        


    })
})