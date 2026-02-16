# SETUP

view from web for the best experience: https://corzolonegatigo.github.io/budggie/

for local setup

clone the repository

run 'npm -i' in terminal

if npm not installed, install npm by following https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

run 'npm run dev' in terminal.

to create a static page, run:
'npm run build'

followed up by,

'npm run dev'


# Budggie

Budggie is a app made to encourage users to be more money savvy and acts as a e-commerce app for users to purchase items that they will want. Budggie works by allowing users to choose an item that they might want to save up for and allowing them to add money consistently to work towards buying that item. Budggie incorporates multiple gamification systems to help encourage users to save consistently for their item!
 
## Design Process

Our app mainly focuses on the general public as we intend to encourage users to save their money so that they can afford items that they want.

Story Points:
- As a app user, I want to be more money savvy, so that I can buy the items that I want.
- As a app user, I want to be accountable for my saving habits, so that I spend my money wisely.
- As a app user, I want to be motivated to save, so that I can expensive items.

Wireframe:
https://www.figma.com/design/apcKxb7Bjhnu6leN2mEe6S/Untitled?node-id=0-1&t=hxVfGWMFgyuGMJgR-1

## Features

In this section, you should go over the different parts of your project, and describe each in a sentence or so.

Login page - Allows you to login and sign up for an account. Signing up for one prompts you to put ur payment info and some personal details. Payment info helps with a more seamless transaction. 

Shop feature - you can look for items that you want to buy, and search for those items. Once selected you can use the image carousell to scroll between different views to check their items out. Once they choose that item, they can then choose the date and it will display their required saving per month.

Add money feature - you can add money into your savings by either using a card (either exsiting ones or a new one) or using QR payment. Once added, a animation will play to indicate your money has been added. Once your goal has been reached, it will display a 3d animation of the hammer freeing your item.
 
### Existing Features
- LogIn - allows users to achieve login, by having them fill out login details
- SignUp - allows users to achieve SignUp, by having them fill out SignUp and Payment details
- Saving for item - allows users to save for an item, by having them find the item (through searches etc) and then selecting it and then saving for it
- Item Desc - allows users to understand more about their item, by having them look through text description and image carousell
- Adding - allows users to add money into savings, by having them complete transactions using card or QR
- Animation - informs users of their progress, by having a animation that plays both when they add money and when they reach their goal

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Left to Implement
- Social system (communities, friends etc)
- Streaks
- chat system
- points system

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

Firebase
 - used for database services
Three.js
 - used to integrated 3d animations
Lottie
 - used to add 2d svg animations
 

## Assistive AI

In this section you should document the process of using AI tools eg, ChatGPT, Gemini etc to help you with the development of features/functionalities of your web application. (Failure to document your use of AI tools will result in loss of marks.) Example below:

1. threejs
chatgpt was used to implement 3js, especially the relative position and scene scaling on resize

2. nav headeer 
chatgpt was used to get the initial functionality

3. web hosting
chatgpt was used to figure out hosting a vite website on github pages, which is static



## Testing


1.login:
    1. add username and password, enter
    2. if username not found, return error, show error msg
    3. if password incorrect, show different error msg
    4. if valid, get userdata and go to home page
    5. if user has logged in beforehand, autoredirect to home page
2. set item:
    1. go to home page
    2. pick item from the search on the right
    3. get item data to populate item page
    4. allow user to set item, write to firebase and localstorage
    5. return to home page, show 3d model of item they have
    6. show item progress

3. add money:
    1. go to add money page
    2. select amount to add
    3. if amount negative, tell user to input pos number
    4. else if amount greater than price, tell user that the number is too big
    5. if valid, go to payment page
    6. two options, qr or card
    7. if card, show existing card data
    8. show form to add new card
    9. if form input invalid or empty, show error
    10. if qr, show qr code, user can click to pay
    11. show payment successful popup and animation
    12. write to db and localstorage

## Credits


### Media
- The photos used in this site were obtained from:

- - https://www.americanexpress.com/en-us/business/merchant/supplies/details/?pid=CheckoutDL
- - https://logowik.com/visa-payment-card-logo-vector-svg-pdf-ai-eps-cdr-free-download-15498.html
- - https://www.mastercard.com/brandcenter/us/en/download-artwork.html
- - https://icons8.com/icons/set/plus--blue
- - https://www.uni.lodz.pl/en/employee/mariusz-krupinski
- - https://www.playstation.com/en-sg/ps5/
- - rest are icons from google icons

