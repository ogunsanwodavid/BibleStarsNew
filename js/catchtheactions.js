const pointerScroll = (elem) => {

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