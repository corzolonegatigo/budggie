// init date vals
import { DB_URL, APIKEY } from "./config";
import { updateItem } from "../index.js";
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;

let selectedDate = new Date();
let selected_month = currentMonth;
let selected_year = currentYear;


const userdata = JSON.parse(window.localStorage.getItem('Userdata'))
const selector = document.getElementById('date-selector');
console.log(selector)
const month_nxt = document.getElementById('fwd-mth');
const month_bck = document.getElementById('bck-mth')
const selector_toggle = document.getElementById('select-date');
const confirm_date = document.getElementById('confirm');
const monthly_amt_tag = document.getElementById('monthly-amt');
const checkbox = document.getElementById('checkbox');
const affirm_text = document.querySelector('.affirm');
const select_item = document.getElementById('select-item');
const final_date = document.getElementById('final-date');
const dates = document.querySelector('.dates')
const selector_text = document.getElementById('selector-text')
const displayed_monthyear = document.getElementById('curr-month-year');

// get price
const price = JSON.parse(window.localStorage.getItem('item-listing-data')).price;
const item_name = JSON.parse(window.localStorage.getItem('item-listing-data')).title;
console.log(item_name, 'itemname');


var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


// toggle selector vis

selector_toggle.addEventListener('click', function(e) {
    console.log('hi')
    selector.classList.toggle('hidden');
    selector_toggle.classList.toggle('selector-on');

})


month_nxt.addEventListener("click", () => {
  if (selected_month === 11) selected_year++;
  selected_month = (selected_month + 1) % 12;
  displayDates();
  showSelectedMonthYear();
});

month_bck.addEventListener("click", () => {
  if (selected_month === 0) selected_year--;
  selected_month = (selected_month - 1 + 12) % 12;
  displayDates();
  showSelectedMonthYear();
});

function showSelectedMonthYear() {
    displayed_monthyear.innerText = `${months[selected_month]} ${selected_year}`
}

// taken from github
const handleDateClick = (e) => {
  const button = e.target;

  // remove the 'selected' class from other buttons
  const selected = dates.querySelector(".date-selected");
  selected && selected.classList.remove("date-selected");

  // add the 'selected' class to current button
  button.classList.add("date-selected");

  // set the selected date
  selectedDate = new Date(selected_year, selected_month, parseInt(button.textContent));
  console.log()
  selector_text.innerHTML = `${selectedDate.getDay()}/${selectedDate.getMonth()}/${selectedDate.getFullYear()}`;
};

function displayDates() {
    dates.innerHTML = "";

    const lastOfPrevMonth = new Date(selected_year, selected_month, 0);

    for (let i = 0; i <= lastOfPrevMonth.getDay(); i++) {
        if (lastOfPrevMonth.getDay() === 6) {break}

        const text = lastOfPrevMonth.getDate() - lastOfPrevMonth.getDay() + i;
        const button = createDateButton(text, true);
        dates.appendChild(button);
    }

    // get the last date of the month
    const lastOfMonth = new Date(selected_year, selected_month + 1, 0);

    for (let i = 1; i <= lastOfMonth.getDate(); i++) {
        const button = createDateButton(i, false);
        button.addEventListener("click", handleDateClick);
        dates.appendChild(button);
    }

    const firstOfNextMonth = new Date(selected_year, selected_month + 1, 1);

    for (let i = firstOfNextMonth.getDay(); i < 7; i++) {
        // if the first day starts on Sunday don't show the trailing dates
        if (firstOfNextMonth.getDay() === 0) break;

        const text = firstOfNextMonth.getDate() - firstOfNextMonth.getDay() + i;
        const button = createDateButton(text, true);
        dates.appendChild(button);
    }

}

function createDateButton(text, isDisabled = false) {
  const button = document.createElement("button");
  button.textContent = text;
  button.disabled = isDisabled;
  button.className = 'date-item'
  if (!isDisabled) {
    const buttonDate = new Date(selected_year, selected_month, text).toDateString();
    const today = buttonDate === new Date().toDateString();
    const selected = buttonDate === selectedDate.toDateString();

    button.classList.toggle("today", today);
    button.classList.toggle("selected", selected);
  }
  return button;
};

displayDates();
showSelectedMonthYear()



// confirm final month-year and calc
confirm_date.addEventListener('click', function (e) {
    const month_diff = (selected_year - currentYear) * 12 + (selected_month - currentMonth);
    const month_amt = Math.round(price / month_diff);
    monthly_amt_tag.innerText = month_amt;
    final_date.innerText = `${months[selected_month]}, ${selected_year}`;

    const toggle_show = document.getElementById('show-after-date-confirmed');
    toggle_show.classList.remove('hidden');
    selector.classList.toggle('hidden');
    selector_toggle.classList.toggle('selector-on')

})



// confirm item
affirm_text.addEventListener('click', function (e) {
    checkbox.classList.add("fading");

    setTimeout(() => {
        [checkbox.src, checkbox.dataset.alt] = [checkbox.dataset.alt, checkbox.src];
        checkbox.classList.remove("fading");
    }, 150);

    select_item.classList.toggle('enabled');
});

select_item.addEventListener('click', function(e) {
    if (select_item.classList.contains('enabled')) {
        updateItem(item_name, userdata)

    }
})





