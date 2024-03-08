/* const pointerScroll = (elem) => {

    let isDrag = false;
    
    const dragStart = () => isDrag = true;
    const dragEnd = () => isDrag = false;
    const drag = (ev) => isDrag && (elem.scrollLeft -= ev.movementX);
    
    elem.addEventListener("pointerdown", dragStart);
    addEventListener("pointerup", dragEnd);
    addEventListener("pointermove", drag);
  };

const videoCategoriesContents = document.getElementById("video-categories-contents")
pointerScroll(videoCategoriesContents);
 */
/* const previousIcon = document.getElementById("previous-icon")
const nextIcon = document.getElementById("next-icon") */

/* // Add event listener for the "previousIcon" button
previousIcon.addEventListener("click", function() {
    videoCategoriesContents.scrollBy({
        left: -100,
        behavior: 'smooth'
    });
});

// Add event listener for the "nextIcon" button
nextIcon.addEventListener("click", function() {
    videoCategoriesContents.scrollBy({
        left: 100,
        behavior: 'smooth'
    });
}); */

/* // Set the amount to scroll
const scrollAmount = 100;

// Function to scroll left
function scrollLeft() {
    videoCategoriesContents.scrollLeft -= scrollAmount;
}

// Function to scroll right
function scrollRight() {
    videoCategoriesContents.scrollLeft += scrollAmount;
}

// Add event listeners to the buttons
previousIcon.addEventListener("mousedown", function(event) {
    event.preventDefault();
    scrollLeft();
    // Continuously scroll left while mouse is down
    const interval = setInterval(scrollLeft, 200);
    // Stop scrolling when mouse is released
    window.addEventListener("mouseup", function() {
        clearInterval(interval);
    });
});

nextIcon.addEventListener("mousedown", function(event) {
    event.preventDefault();
    scrollRight();
    // Continuously scroll right while mouse is down
    const interval = setInterval(scrollRight, 200);
    // Stop scrolling when mouse is released
    window.addEventListener("mouseup", function() {
        clearInterval(interval);
    });
}); */


/************** Script for the Exclusive Hour swiper js **********/
const theExlusiveHourSwiper = new Swiper('.exclusive-hour-swiper', {
    // Optional parameters
    direction: 'horizontal',

    // If we need pagination
   /*  pagination: {
        el: '.swiper-pagination',
    }, */

    // Navigation arrows
    navigation: {
        nextEl: '.exclusive-hour-swiper-button-next',
        prevEl: '.exclusive-hour-swiper-button-prev',
    }, 

    //swiper speed
    /* speed: 1000,

    autoplay: false */

    slidesPerView: 1,

    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 480px
        690: {
        slidesPerView: 2,
        spaceBetween: 24,

        },
        // when window width is >= 640px
        1047: {
        slidesPerView: 3,
        spaceBetween: 24,
        }
    }
}
);

/************** Script for the Exclusive Hour swiper js **********/



/************** Script for the Catch A Glimpse swiper js **********/
const catchAGlimpseSwiper = new Swiper('.catch-a-glimpse-swiper', {
    // Optional parameters
    direction: 'horizontal',

    // If we need pagination
   /*  pagination: {
        el: '.swiper-pagination',
    }, */

    // Navigation arrows
    navigation: {
        nextEl: '.catch-a-glimpse-swiper-button-next',
        prevEl: '.catch-a-glimpse-swiper-button-prev',
    }, 


    //swiper speed
    /* speed: 1000,

    autoplay: false */

    slidesPerView: 1,

    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 480px
        690: {
        slidesPerView: 2,
        spaceBetween: 24,

        },
        // when window width is >= 640px
        1047: {
        slidesPerView: 3,
        spaceBetween: 24,
        }
    }
}
);

/************** Script for the Catch The Glimpse swiper js **********/



/************** Script for the On Your Mandate swiper js **********/
const onYourMandateSwiper = new Swiper('.on-your-mandate-swiper', {
    // Optional parameters
    direction: 'horizontal',

    // If we need pagination
   /*  pagination: {
        el: '.swiper-pagination',
    }, */

    // Navigation arrows
    navigation: {
        nextEl: '.on-your-mandate-swiper-button-next',
        prevEl: '.on-your-mandate-swiper-button-prev',
    }, 

    //swiper speed
    /* speed: 1000,

    autoplay: false */

    slidesPerView: 1,

    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 480px
        690: {
        slidesPerView: 2,
        spaceBetween: 24,

        },
        // when window width is >= 640px
        1047: {
        slidesPerView: 3,
        spaceBetween: 24,
        }
    }
}
);

/************** Script for the On Your Mandate swiper js **********/



/************** Script for the Life in The Big House swiper js **********/
const lifeInTheBigHouseSwiper = new Swiper('.life-in-the-big-house-swiper', {
    // Optional parameters
    direction: 'horizontal',

    // If we need pagination
   /*  pagination: {
        el: '.swiper-pagination',
    }, */

    // Navigation arrows
    navigation: {
        nextEl: '.life-in-the-big-house-swiper-button-next',
        prevEl: '.life-in-the-big-house-swiper-button-prev',
    }, 

    //swiper speed
    /* speed: 1000,

    autoplay: false */

    slidesPerView: 1,

    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 480px
        690: {
        slidesPerView: 2,
        spaceBetween: 24,

        },
        // when window width is >= 640px
        1047: {
        slidesPerView: 3,
        spaceBetween: 24,
        }
    }
}
);

/************** Script for the Life in The Big House swiper js **********/
