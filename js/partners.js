
/************** Script for the Accordion ***************/
const accordionItems = document.getElementsByClassName("accordion");
const accordionCtrls = document.getElementsByClassName("accordion-ctrl");
const accordionTexts = document.getElementsByClassName("accordion-text")


//Looping through the accordion controls
for (let i = 0; i < accordionCtrls.length; i++) {
    //Click event listener added to the controls
    accordionCtrls[i].addEventListener('click', () => {
        //Check if accordion is closed
        if(accordionTexts[i].classList.contains("closed")){
            //Other Accordion contents except clicked
            excludedAccordionTexts = Array.from(accordionTexts).filter(function (element) {
                return element !== accordionTexts[i]
            })

            //Other Accordion controls except clicked
            excludedAccordionCtrls = Array.from(accordionCtrls).filter(function (element) {
                return element !== accordionCtrls[i]
            })

            //Change control to minus svg
            //remove closed class
            //Show accordion content of clicked
            accordionCtrls[i].src = "./public/images/icon-minus.svg"
            accordionCtrls[i].style.transform = "rotate(180deg)"
            accordionTexts[i].classList.remove("closed")
            accordionTexts[i].classList.add("opened")
            accordionTexts[i].style.display = "block"

            //For other accordion headings
            for (let i = 0; i < excludedAccordionTexts.length; i++) {
                excludedAccordionCtrls[i].src = "./public/images/icon-plus.svg"
                excludedAccordionTexts[i].classList.remove("opened")
                excludedAccordionTexts[i].classList.add("closed")
                excludedAccordionTexts[i].style.display = "none"
            }

            //Scroll Window into clicked Accordion heading when clicked
            window.scrollTo(0, accordionCtrls[i].offsetTop - accordionCtrls[i].offsetHeight);

        }
        //Else, if clicked accordion is opened
        else{
            excludedAccordionTexts = Array.from(accordionTexts).filter(function (element) {
                return element !== accordionTexts[i]
            })

            excludedAccordionCtrls = Array.from(accordionCtrls).filter(function (element) {
                return element !== accordionCtrls[i]
            })


            //Change control of clicked accordion to plus
            //Add closed class to accordion
            //Close accordion content
            accordionCtrls[i].src = "./public/images/icon-plus.svg"
            accordionCtrls[i].style.transform = "rotate(180deg)"
            accordionTexts[i].classList.remove("opened")
            accordionTexts[i].classList.add("closed")
            accordionTexts[i].style.display = "none"

            //Other accordion controls should show plus svg
            for (let i = 0; i < excludedAccordionTexts.length; i++) {
                excludedAccordionCtrls[i].src = "./public/images/icon-plus.svg"
            }
        }
    })            
}



/********** Script that shows contribution amount itself ********/
const readyToPartner = document.getElementById("ready-to-partner")
const signUpForm = document.getElementById("sign-up-form")



const signUpName = document.getElementById("sign-up-name")
const nameError = document.getElementById("name-error")
const signUpEmail = document.getElementById('sign-up-email')
const emailError = document.getElementById('email-error')
const signUpPhoneNumber = document.getElementById("sign-up-phone-number")
const phoneNumberError = document.getElementById('phone-number-error')


/********* The function below validates the entire sign up form and submits if all conditions are met*/
function validateSignUp(event) {
    let k = 4;
    //Prevent default
    event.preventDefault()

    //Prevent empty sign up name
    if(signUpName.value.trim() === ""){
        nameError.classList.remove("hidden")
        signUpName.style.borderColor = "hsl(0, 100%, 66%)"
        signUpName.scrollIntoView()
        k -= 1;
    }else{
        if(!signUpName.classList.contains("hidden")){
            nameError.classList.add("hidden")
        };
        signUpName.style.borderColor = "#0f1729"
    }

    //Prevent empty email and incorrect email format
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

    if(signUpEmail.value.trim() === ""){
        emailError.classList.remove("hidden")
        signUpEmail.style.borderColor = "hsl(0, 100%, 66%)"
        signUpName.scrollIntoView()
        k -= 1;
    }else{
        if(!signUpEmail.classList.contains("hidden")){
            emailError.classList.add("hidden")
        };
        signUpEmail.style.borderColor = "#0f1729"
    }

    if(!emailPattern.test(signUpEmail.value)){
        emailError.classList.remove("hidden")
        signUpEmail.style.borderColor = "hsl(0, 100%, 66%)"
        signUpName.scrollIntoView()
        k -= 1;
    }else{
        if(!signUpEmail.classList.contains("hidden")){
            emailError.classList.add("hidden")
        };
        signUpEmail.style.borderColor = "#0f1729"
    }

    //Prevent empty phone number
    if(signUpPhoneNumber.value.trim() === ""){
        phoneNumberError.classList.remove("hidden")
        signUpPhoneNumber.style.borderColor = "hsl(0, 100%, 66%)"
        signUpName.scrollIntoView()
        k -= 1;
    }else{
        if(!signUpPhoneNumber.classList.contains("hidden")){
            phoneNumberError.classList.add("hidden")
        };
        signUpPhoneNumber.style.borderColor = "#0f1729"
    }

    //Prevent empty receipt image
    /* if(receiptUpload.files.length == 0){
        receiptUploadError.classList.remove("hidden")
        receiptUploadError.innerHTML = "Attach your receipt please"
        receiptUpload.style.borderColor = "hsl(0, 100%, 66%)"
        signUpName.scrollIntoView()
        k -= 1;
    }else{
        if(!receiptUpload.classList.contains("hidden")){
            receiptUploadError.classList.add("hidden")
        };
        receiptUpload.style.borderColor = "#0f1729"
    } */

    if(k == 4){
        submitSignUp()
    }else{
        return
    }
}


/************* Script for the Thanks modal starts********/
const thanksModal = document.getElementById("thanks-modal")
var desktopWidth = window.matchMedia("(min-width:900px)")


function showThanksModal() {
    if(desktopWidth.matches){
        //Display thanks Modal for desktop
        thanksModal.classList.remove("hidden")
        thanksModal.classList.add("flex")
    }else{
        //Display thanks Modal for mobile
        thanksModal.classList.remove("hidden")
        thanksModal.classList.add("block")
    }
}

/////This script ensures a smooth responsiveness of the thanks modal
/////for min-width of 900px and below.
/////for min-width of 900px, it must be flex so it can be centered
/////but it can be block for 7rem margin-top
function thanksModalResp(e) {
    if(e.matches && thanksModal.classList.contains("block")){
        thanksModal.classList.remove("block")
        thanksModal.classList.add("flex")
    }else{
        thanksModal.classList.remove("flex")
        thanksModal.classList.add("block")
    }
}

desktopWidth.addListener(thanksModalResp)
thanksModalResp(desktopWidth)

/************* Script for the Thanks modal ends********/


/******** Function to be completed by backend dev *****/

//signup function
function submitSignUp() {
    //show thanks modal on submission
    showThanksModal()
}


/************** Script for the swiper js **********/
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    //swiper speed
    speed: 1000,

    autoplay: {
        delay : 3000,
    }
});




















//////////////////////////////////////////////// THIS CONTAINS DELETED SCRIPTS THAT MIGHT BE HELPFUL LATER ON


/* var contribution = document.getElementById("contribution")
var amount = document.getElementById("amount")
var partnershipCategory = document.getElementById("partnership-category") */

/*** Scroll to sign up form  */
/* function scrollToSignUp() {
    readyToPartner.scrollIntoView();
} */

// This JSON stores the item name and respective amount as a string
/* const contributionJSON = [
    { "value": "SHOW ROOM set-up for THE HIDDEN TREASURE task", "amount": "10,000,000" },
    { "value": "Space for 12 Stars executive BED CHAMBER set-up", "amount": "5,000,000" },
    { "value": "Space for SEEDS’ CIRCLE GAME COURT set-up", "amount": "3,000,000" },
    { "value": "Space for THE ARENA set-up", "amount": "10,000,000" },
    { "value": "Space for THE ASSEMBLY AREA set-up", "amount": "2,000,000" },
    { "value": "Space for THE MANDATE CORNER set-up", "amount": "2,000,000" },
    { "value": "Space for INNER CHAMBER set-up", "amount": "2,000,000" },
    { "value": "Studio space for TODAY AT THE BIG HOUSE set up", "amount": "5,000,000" },
    { "value": "Space for THE LORD’S GARDEN set-up", "amount": "3,000,000" },
    { "value": "LIVING ROOM and extension set-up", "amount": "10,000,000" },
    { "value": "MULTIPURPOSE AREA set-up", "amount": "5,000,000" },
    { "value": "VIP space set-up", "amount": "2,000,000" },
    { "value": "BIG HOUSE KITCHEN set-up", "amount": "5,000,000" },
    { "value": "Space for THE KING’S BANQUET set-up", "amount": "2,500,000" },
    { "value": "Provision for logistics (C)", "amount": "1,000,000" },
    { "value": "Grand prize - A BRANDNEW SALOON CAR", "amount": "30,000,000" },
    { "value": "Grand cash prize", "amount": "10,000,000" },
    { "value": "1st runner-up cash prize", "amount": "7,500,000" },
    { "value": "2nd runner-up cash prize", "amount": "5,000,000" },
    { "value": "Consolation cash prize for one of the 9 remaining Stars", "amount": "2,000,000" },
    { "value": "Consolation cash prize for one of the 9 remaining Stars", "amount": "2,000,000" },
    { "value": "Consolation cash prize for one of the 9 remaining Stars", "amount": "2,000,000" },
    { "value": "Consolation cash prize for one of the 9 remaining Stars", "amount": "2,000,000" },
    { "value": "Consolation cash prize for one of the 9 remaining Stars", "amount": "2,000,000" },
    { "value": "Consolation cash prize for one of the 9 remaining Stars", "amount": "2,000,000" },
    { "value": "Consolation cash prize for one of the 9 remaining Stars", "amount": "2,000,000" },
    { "value": "Consolation cash prize for one of the 9 remaining Stars", "amount": "2,000,000" },
    { "value": "Cash prizes for SEEDS’ CIRCLE GAME", "amount": "5,000,000" },
    { "value": "Cash prizes for THE ULTIMATE GAME", "amount": "5,000,000" },
    { "value": "Cash prizes for FAITH ALIVE GAME (Individual category)", "amount": "5,000,000" },
    { "value": "Cash prizes for FAITH ALIVE GAME (Group category)", "amount": "10,000,000" },
    { "value": "Two-way ticket for officials and crew", "amount": "5,000,000" },
    { "value": "Two-way ticket for our Stars and special guests", "amount": "5,000,000" },
    { "value": "Food items, kitchen utensils, and catering service", "amount": "10,000,000" },
    { "value": "Non-alcoholic drinks, assorted wine, juice, and water", "amount": "5,000,000" },
    { "value": "Assorted fruits and nuts", "amount": "2,000,000" },
    { "value": "Meat and Fish supply", "amount": "5,000,000" },
    { "value": "Cosmetics and Toiletries", "amount": "2,000,000" },
    { "value": "Provision for all-inclusive Wall robe for one of the Stars", "amount": "1,000,000" },
    { "value": "Provision for all-inclusive Wall robe for one of the Stars", "amount": "1,000,000" },
    { "value": "Provision for all-inclusive Wall robe for one of the Stars", "amount": "1,000,000" },
    { "value": "Provision for all-inclusive Wall robe for one of the Stars", "amount": "1,000,000" },
    { "value": "Provision for all-inclusive Wall robe for one of the Stars", "amount": "1,000,000" },
    { "value": "Provision for all-inclusive Wall robe for one of the Stars", "amount": "1,000,000" },
    { "value": "Provision for all-inclusive Wall robe for one of the Stars", "amount": "1,000,000" },
    { "value": "Provision for all-inclusive Wall robe for one of the Stars", "amount": "1,000,000" },
    { "value": "Provision for all-inclusive Wall robe for one of the Stars", "amount": "1,000,000" },
    { "value": "Provision for all-inclusive Wall robe for one of the Stars", "amount": "1,000,000" },
    { "value": "Provision for all-inclusive Wall robe for one of the Stars", "amount": "1,000,000" },
    { "value": "Provision for all-inclusive Wall robe for one of the Stars", "amount": "1,000,000" },
    { "value": "Provision for a ground breaking welcome shower/Opening ceremony", "amount": "5,000,000" },
    { "value": "Provision for the Honorarium of our lead host", "amount": "20,000,000" },
    { "value": "Provision for the Honorarium of other hosts on the Show", "amount": "5,000,000" },
    { "value": "Provision for the Honorarium of Four Angels (A-list gospel celebrities)", "amount": "10,000,000" },
    { "value": "Provision for the Honorarium of Analysts and Narrator", "amount": "5,000,000" },
    { "value": "Provision for the Honorarium of our House Papa and Mama", "amount": "5,000,000" },
    { "value": "Provision for the 1-hour TODAY AT THE BIG HOUSE daily recap transmission on DSTV", "amount": "40,000,000" },
    { "value": "Touching heaven! Changing Earth program daily transmission on DSTV", "amount": "40,000,000" },
    { "value": "Catch a glimpse! 15 minutes daily highlight show on DSTV", "amount": "20,000,000" },
    { "value": "Provision for the creation of the 12 Magnificent Keys of the BIG HOUSE", "amount": "5,000,000" },
    { "value": "Provision for a nationwide publicity", "amount": "10,000,000" },
    { "value": "Provision for all the Props needed for different segments of the Show", "amount": "10,000,000" },
    { "value": "Provision for Pre-Show camping Coaches’ honorarium", "amount": "3,000,000" },
    { "value": "Provision for Internet facilities and connections", "amount": "2,000,000" },
    { "value": "Provision for brand new professional cameras", "amount": "21,000,000" },
    { "value": "Provision for Professional stage and production lights", "amount": "15,000,000" },
    { "value": "Provision for 2 big LED Screens", "amount": "20,000,000" },
    { "value": "Provision for Sound equipment/lapel microphones", "amount": "10,000,000" },
    { "value": "Provision for Solar panels, batteries and installation", "amount": "10,000,000" },
    { "value": "Provision for post production Gadgets and post production", "amount": "10,000,000" },
    { "value": "Provision for 14 days pre-show camping", "amount": "5,000,000" },
    { "value": "Provision for security personnel service", "amount": "2,000,000" },
    { "value": "Provision for the SHOWROOM set up for the Hidden Treasure Task", "amount": "5,000,000" },
    { "value": "Provision for the SHOWROOM set up for the Wisdom Task", "amount": "2,000,000" },
    { "value": "Provision for the SHOWROOM set up for the Melodious Task", "amount": "2,000,000" },
    { "value": "Provision for the SHOWROOM set up for the Keyword Task", "amount": "2,000,000" },
    { "value": "Provision for the SHOWROOM set up for the A million candle Task", "amount": "2,000,000" },
    { "value": "Provision for the SHOWROOM set up for the A step to your breakthrough", "amount": "2,000,000" },
    { "value": "Provision for the ULTIMATE NUMBERS’ GAME COURT set up", "amount": "3,000,000" },
    { "value": "Provision for the FAITH ALIVE GAME COURT", "amount": "3,000,000" },
    { "value": "Provision for the LIGHT UP THE WORLD GAME COURT", "amount": "3,000,000" },
    { "value": "Provision for one of the 4 days REALM OF GLORY gifts", "amount": "1,000,000" },
    { "value": "Provision for one of the 4 days REALM OF GLORY gifts", "amount": "1,000,000" },
    { "value": "Provision for one of the 4 days REALM OF GLORY gifts", "amount": "1,000,000" },
    { "value": "Provision for the executive wall robe", "amount": "2,000,000" },
    { "value": "Provision for the TARGETED LINES COMPETITION STAGE set up / prizes to be won", "amount": "2,000,000" },
    { "value": "Provision for THE TESTAMENT COMPETITION STAGE set up / prizes to be won", "amount": "2,000,000" },
    { "value": "Provision for THE FUNDAMENTAL COMPETITION STAGE set up / prizes to be won", "amount": "2,000,000" },
    { "value": "Provision for the AIR CONDITIONS", "amount": "3,000,000" },
    { "value": "Cash prizes for the Hidden treasure task", "amount": "2,000,000" },
    { "value": "Cash prizes for the A MILLION CANDLE task", "amount": "2,000,000" },
    { "value": "Cash prizes for A STEP TO YOUR BREAKTHROUGH", "amount": "2,000,000" },
    { "value": "Provision for logistics (A)", "amount": "1,000,000" },
    { "value": "Provision for logistics (B)", "amount": "1,000,000" },
];

console.log(contributionJSON.length) */

//This add this as the items as options to the contribution selection input
/* for (let i = 0; i < contributionJSON.length; i++) {
    contribution.innerHTML += `<option value="${contributionJSON[i].value}">${contributionJSON[i].value}</option>`
} */


//Presets amount value to first item
/* amount.value = `₦${contributionJSON[0].amount.toString()}` */

//Presents partnership category to first item
/* partnershipCategory.value = checkAmount(amount.value) */

//add onchange event listener to contribution
/* contribution.addEventListener("change" , ()=> {
    //changes price to respective item selected
    for (let i = 0; i < contributionJSON.length; i++) {
        if(contribution.value == contributionJSON[i].value){
            amount.value = `₦${contributionJSON[i].amount.toString()}`
        }
    }
    //change partnership category to respective amount shown
    partnershipCategory.value = checkAmount(amount.value)
}) */

///This function determines the partnership category from a string of amount
/* function checkAmount(e) {
    let parsedAmount = parseFloat(e.replace(/,|₦/g, ''))

    if(parsedAmount <= 5000000){
        return "1 star partner"
    }else if(parsedAmount > 5000000 && parsedAmount <= 10000000){
        return "3 stars partner"
    }else if(parsedAmount > 10000000 && parsedAmount <= 20000000){
        return "5 stars partner"
    }else if(parsedAmount > 20000000){
        return "7 stars partner"
    }
} */

/* const receiptUpload = document.getElementById("receipt-upload")
const receiptUploadError = document.getElementById("receipt-upload-error") */

///////// This validates the receipt upload
/* function validateReceiptUpload(input) {
    var file = input.files[0];
    let k = 2

    if (file) {

        if(receiptUpload.files.length === 0){
            k -= 1
            receiptUploadError.innerHTML = "Attach your receipt please"
            input.files.pop()
        }
        if ((fileExtension == 'jpg' || fileExtension == 'jpeg' || fileExtension !== 'png') && (receiptUpload.files.length !== 0)){
            receiptUploadError.innerHTML = ""
        }
    }

    if (k != 2){
        receiptUploadError.classList.remove("hidden")
        receiptUpload.style.borderColor = "hsl(0, 100%, 66%)"
    }else {
        receiptUpload.style.borderColor = "#0f1729"
        receiptUploadError.innerHTML = ""
    }
} */