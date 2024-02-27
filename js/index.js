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

    //cube effect
    /* effect: 'cube',
    cubeEffect: {
        shadow: false,
        shadowOffset : 0,
        slideShadows: false,
    }, */

    //swiper speed
    speed: 500,

    autoplay: {
        delay : 3000,
    }
});

for (let i = 0; i < swiper.pagination.bullets.length; i++) {
    swiper.pagination.bullets[i].style.borderRadius = "9999px"
}


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

/********* Script for the  Daily Review starts*/
const dayReviews = document.getElementsByClassName("day-review")
const colorShowcases = document.getElementsByClassName("color-showcase")
const dailyReviewTitles = document.getElementsByClassName("daily-review-title")
const connectingLines = document.getElementsByClassName("connecting-line")

///This does the automatic alternate colors of the review color showcase and heading
for (let i = 0; i < colorShowcases.length; i++) {
    if(i % 2 == 0){
        colorShowcases[i].style.backgroundColor = "#FCAE1E"
        dailyReviewTitles[i].style.backgroundColor = "#0F1729"
    }else{
        colorShowcases[i].style.backgroundColor = "#0F1729"
        dailyReviewTitles[i].style.backgroundColor = "#FCAE1E"
    }
}

///This does the automatic alternate colors of the review connecting lines except for the bottom divs
for (let i = 0; i < connectingLines.length - 1; i++) {
    if(i % 2 == 0){
        connectingLines[i].style.backgroundColor = "#FCAE1E"
    }else{
        connectingLines[i].style.backgroundColor = "#0F1729"
    }
}

//This makes only 3 reviews visible at first
for (let i = 0; i < dayReviews.length; i++) {
    if(i > 2){
        dayReviews[i].classList.add("hidden")
        dayReviews[i].classList.add("md:hidden")
    }    
}

const showMoreBtn = document.getElementById("show-more-btn")


//adding onclick event on the showmore btn
showMoreBtn.addEventListener("click" , () => {
    //check if show more button is meant to show more or not
    if(showMoreBtn.innerHTML == "Show More"){
        let k = 0;
        
        //checks number of k displayed
        for (let i = 0; i < dayReviews.length; i++) {
            if(!dayReviews[i].classList.contains("hidden")){
                k += 1
            }    
        }
        
        //if k is not the whole number of day reviews, make 3 more displayed
        if(k != dayReviews.length){
            for (let a = 0; a < 3; a++) {
                dayReviews[k + a].classList.remove("hidden")       
                dayReviews[k + a].classList.remove("md:hidden")
            }
        //else if the day reviews have been shown, make the div
        //turn show less and change its function
        }else if(k == dayReviews.length){
            showMoreBtn.innerHTML = "Show Less"
            console.log("k is 7")
        }
    }else if(showMoreBtn.innerHTML == "Show Less"){
        for (let i = 3; i < dayReviews.length; i++) {
            dayReviews[i].classList.add("hidden")
            dayReviews[i].classList.add("md:hidden")
        }
        dayReviews[2].scrollIntoView()
        showMoreBtn.innerHTML = "Show More"
    }
})



/********* Script for the  Daily Review ends*/



/********** Script for Latest Contents start */



/********** Script for Latest Contents ends */