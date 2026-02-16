import { updateSavedAmount } from "../index.js";

document.addEventListener("DOMContentLoaded", function () { 
    const payment_details = document.getElementById('payment-details');
    console.log(payment_details)
    const payment_buttons = document.querySelectorAll('.payment-opt');
    const payment_type_selector = document.getElementById('select-payment-type');
    const payment_confirm = document.getElementById('submit-payment-info');

    let userdata = JSON.parse(localStorage.getItem("Userdata"));
    const uid = userdata._id
    const saved_amt = userdata.itemprogress;
    console.log(saved_amt)
    const money_to_add = window.localStorage.getItem('money_to_add');
    delete userdata._id
    let card_data = JSON.parse(userdata.card)
    const final_amt = Number(saved_amt) + Number(money_to_add);

    // get input fields 
    document.getElementById('amt-added').innerText = `$${money_to_add}`
    const ccnum = document.getElementById('cc-no');
    const ccv = document.getElementById('ccv');
    const exp_mth = document.getElementById('months');
    const yr_mth = document.getElementById('years');
    const existing_cards = document.getElementById('existing-cards')

    document.getElementById('money').innerText = `${money_to_add}`

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


    document.getElementById('card').addEventListener('click', function(e) {
        e.preventDefault();
        payment_details.classList.remove('hidden')
        payment_type_selector.classList.add('hidden')
    });

    document.getElementById('qr').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('payment-qr').classList.remove('hidden')
        payment_type_selector.classList.add('hidden')
    });

    document.getElementById('payment-qr').addEventListener('click', function(e) {
        e.preventDefault();
        
        updateSavedAmount(final_amt, userdata);
    })

    // handle payment confirmation
    
    inject_monthyear()

    if (card_data) {
        const line = document.createElement('div');
        line.className = 'vert-line';
        existing_cards.appendChild(line.cloneNode(true));

        const cardlink = document.createElement('button');
        cardlink.classList = 'payment-type';
        const l4nmbers = card_data.card_number.slice(-4,-1)
        cardlink.innerHTML = `<h4>Card ending with ${l4nmbers}</h4> <img src="/public/arrow_fwd.svg">`
        
        cardlink.addEventListener('click', function (e) {
            e.preventDefault();
            updateSavedAmount(final_amt, userdata);
            console.log('hi')
        })

        existing_cards.appendChild(cardlink);
        existing_cards.appendChild(line.cloneNode(true));
        
    }
    
    payment_confirm.addEventListener('click', function(e) {
        e.preventDefault()
        const payment_fields = document.querySelectorAll('.payment-field');

        const field_filled = validate_input_presence(payment_fields);

        if (field_filled && payment_selected) {
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


            
            updateSavedAmount(final_amt, userdata);
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

    // checking if fields empty, clear each field after checked



    


})  