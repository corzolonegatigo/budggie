import { addUser, checkUserAvail } from "../index.js";
import {hidden_toggle} from "./hide_toggle.js";


document.addEventListener("DOMContentLoaded", function () {

    const payment_buttons = document.querySelectorAll('.payment-opt');
    const payment_confirm = document.getElementById('submit-payment-info');
    const ccnum = document.getElementById('cc-no');
    const ccv = document.getElementById('ccv');
    const exp_mth = document.getElementById('months');
    const yr_mth = document.getElementById('years');
    const phoneInput = document.getElementById("phone-no");
    const postalInput = document.getElementById("postal-code");
    const pfpIn = document.getElementById('imageInput');
    const pfprWrapper = document.getElementById("pfp-wrapper");
    const pfpPreview = document.getElementById('pfp-selected');

    const imgReader = new FileReader();

    const password_cfm = document.getElementById('password-cfm');
    const password = document.getElementById('password');
    
    function validate_input_presence(fields) {
        let valid = true
        console.log(fields)
        for (const field of fields) {
            if (field.value === '') {
                valid = false;
                field.value = '';
            }
        }
        return valid;
    }

    function inject_monthyear() {

        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();

        // inject here
        for (let i = 0; i < months.length; i++) {
            const month = document.createElement('option');
            month.value = months[i];
            month.innerText = months[i];
            exp_mth.appendChild(month);
        }

        for (let i = 0; i < 10; i++) {
            const year = document.createElement('option');
            year.value = currentYear + i;
            year.innerText = currentYear + i;
            yr_mth.appendChild(year);
        }

    }

   // add functionality to payment-option buttons
   let prev = ''
   let payment_selected = false
    payment_buttons.forEach(b =>
        b.addEventListener('click', function (e) {
            e.preventDefault();
            if (prev !== '') {
                prev.classList.remove('payment-selected');
            }

            b.classList.add('payment-selected');
            prev = b;
            payment_selected = true
        })
        
    );


    pfprWrapper.addEventListener("click", () => {
        pfpIn.click();
    });

    pfpIn.addEventListener('change', function (e) {
        const pfp = e.target.files[0]
        console.log(Boolean(pfp))
        if (pfp) {
            
            imgReader.onload = function(event) {
                console.log(event.target.result)
                pfpPreview.src = event.target.result
            };

            imgReader.readAsDataURL(pfp);
        };

    })

    password_cfm.addEventListener('input', function (e) {
        let pw_error_msg = document.getElementById('password-error'); // some problem with query selector but id works so 
        if (password_cfm.value !== password.value) {
            pw_error_msg.classList.remove('hidden')
        } else {
            pw_error_msg.classList.add('hidden')
        }
    })

    document.getElementById("login-submit").addEventListener("click", async function (e) {
        e.preventDefault();
        const signin_fields = document.querySelectorAll('.signin-field');
        
        try {
            let usernameIn = document.getElementById("username").value;
            const usernamePresent = await checkUserAvail(usernameIn) // returns false if username is available, returns the firebase reference if avail. safer (probably) to just check value in if loop rather than Bool()
            const field_filled = validate_input_presence(signin_fields)
            console.log(usernamePresent)
            if ((field_filled) && (usernamePresent === false)) {
                inject_monthyear()
                hidden_toggle()

                // validation 
                phoneInput.addEventListener("input", () => {
                    phoneInput.value = phoneInput.value.replace(/[^\d ]/g, "");
                });

                postalInput.addEventListener("input", () => {
                    postalInput.value = postalInput.value.replace(/\D/g, "");
                });
                ccnum.addEventListener('input', () => {
                    ccnum.value = ccnum.value.replace(/\D/g, "");
                    if (ccnum.value.length > 16) {
                        ccnum.value = ccnum.value.splice(0,16);
                        ccnum.setCustomValidity('Too long!');
                    }
                });

                ccv.addEventListener('input', () => {
                    ccv.value = ccv.value.replace(/\D/g, "");
                    if (ccv.value.length > 16) {
                        ccv.value = ccv.value.splice(0,16);
                        ccv.setCustomValidity('Too long!');
                    }
                });
            } else {
                console.log('here')
                if (!field_filled) {
                    document.querySelector('.signup-error').innerText = 'You have a few input fields blank!';
                } else {
                    document.querySelector('.signup-error').innerText = 'This username is taken, please try another one.';
                }
                document.querySelector('.signup-error').classList.remove('hidden');
                
            }


        } catch (err) {
            console.error("Error in listener:", err);
        }
       
        
    });

         
    payment_confirm.addEventListener('click', function(e) {
        e.preventDefault()
        const payment_fields = document.querySelectorAll('.payment-field');

        const field_filled = validate_input_presence(payment_fields);

        if (field_filled && payment_selected) {
            let emailIn = document.getElementById("email").value;
            let usernameIn = document.getElementById("username").value;
            let passwwordIn = document.getElementById("password").value;
            let card_number = ccnum.value;
            let ccv_num = ccv.value;
            let cc_month = exp_mth.value;
            let cc_year = yr_mth.value;
            let cc_holder = document.getElementById('cc-name').value;

            const card = {
                'card_number': card_number,
                'ccv_num': ccv_num,
                'cc_month': cc_month,
                'cc_year': cc_year,
                'cc_holder': cc_holder
            };


            // get img input
            const imageIn = document.getElementById('imageInput').files[0]
            

            console.log(document.getElementById('imageInput').files[0])

            var img_str = ''
            imgReader.onload = function(e) {
                img_str = e.target.result;
                addUser(usernameIn, passwwordIn, emailIn, card, img_str)
            }

            console.log(imageIn)
            console.log(Boolean(imageIn))
            if (Boolean(imageIn)) {
                imgReader.readAsDataURL(imageIn);
            } else {
                addUser(usernameIn, passwwordIn, emailIn, card, img_str)
            }        
            
            
        } else {
            // error msg
            console.log('hi')
            if (payment_selected) {
                document.querySelector('.payment-setup-error').innerText = 'You have a few input fields blank!';
            } else {
                document.querySelector('.payment-setup-error').innerText = 'Please select a payment method!';
            }
            document.querySelector('.payment-setup-error').classList.remove('hidden');
        }
    })
       
})

