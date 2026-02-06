document.addEventListener("DOMContentLoaded", function (e) {  
    const submitMoney = document.getElementById('confirm-added-money');
    const moneyAmt = document.getElementById('money');
    const inptErrorTxt = document.getElementById('form-input-error');
    

    let userinfo = JSON.parse(localStorage.getItem("Userdata"));
    let saved_amt = 0
    if ('itemprogress' in userinfo) {
        saved_amt = 0;
    } else {
        saved_amt = userinfo.itemprogress;
    }

    const max_amt = window.localStorage.getItem('full_price') - saved_amt;
    submitMoney.addEventListener('click', function(e) {
        e.preventDefault();
        const money_to_add = moneyAmt.value;
        
        if (Number(money_to_add) <= 0) {
            inptErrorTxt.innerText = 'Please input a positive value!';
        } else if (Number(money_to_add) > max_amt) {
           inptErrorTxt.innerText = `The max you can put in is $${max_amt}!`;
        } else {    
            window.localStorage.setItem('saved_amt', saved_amt)
            window.localStorage.setItem('money_to_add', money_to_add)
            console.log(money_to_add)
            window.location.href = './payment_info.html'

            
        }
        
    })

})
