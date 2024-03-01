 /********* This script shuffles the star card arrangement ********/
 
 // Function to shuffle an array (Fisher-Yates shuffle algorithm)
 function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Get the container element
  const starCardsContainer = document.getElementById('star-cards-container');

  // Convert the child elements into an array
  const divs = Array.from(starCardsContainer.children);

  // Shuffle the array of divs
  const shuffledDivs = shuffleArray(divs);

  // Clear the container
  starCardsContainer.innerHTML = '';

  // Reinsert the shuffled divs into the container
  shuffledDivs.forEach(div => {
    starCardsContainer.appendChild(div);
  });

 /********* This script shuffles the card arrangement ********/


 /************** This script ensures the cards rotate when they appear on the page and on scroll */
 const starsImages = this.document.getElementsByClassName("star-image")


 document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("scroll", function() {
    

    // If box is in viewport, add the rotate class
    for (let i = 0; i < starsImages.length; i++) {
      let position = starsImages[i].getBoundingClientRect();
      
      if (position.top >= 0 && position.bottom <= window.innerHeight) {
        starsImages[i].classList.add("flipped");
      } else {
        starsImages[i].classList.remove("flipped");
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {

  for (let i = 0; i < starsImages.length; i++) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          starsImages[i].classList.add("flipped");
          observer.unobserve(starsImages[i]); // Stop observing once flipped
        }
      });
    }, { threshold: 0.5 }); // Trigger when half of the box is visible

    observer.observe(starsImages[i]);
  }
});

 /************** This script ensures the cards rotate when they appear on the page and on scroll */


 /***** THE VOTE BUTTONS */
 const voteButtons = document.getElementsByClassName("vote-btn")


 



 /******************** This script for the TEMPORARY voting functionality ****************************/
const noVotingModal = document.getElementById("no-voting-modal")
const noVotingModalMain = document.getElementById("no-voting-modal-main")
var desktopWidth = window.matchMedia("(min-width:900px)")
const gotItBtn = document.getElementById("got-it-btn")

function shownoVotingModal() {
    if(desktopWidth.matches){
        //Display no Voting Modal for desktop
        noVotingModal.classList.remove("hidden")
        noVotingModal.classList.add("flex")
    }else{
        //Display no Voting Modal for mobile
        noVotingModal.classList.remove("hidden")
        noVotingModal.classList.add("block")
    }
}

function closenoVotingModal() {
  if(desktopWidth.matches){
      //Display no Voting Modal for desktop
      noVotingModal.classList.remove("flex")
      noVotingModal.classList.add("hidden")
  }else{
      //Display no Voting Modal for mobile
      noVotingModal.classList.remove("block")
      noVotingModal.classList.add("hidden")
  }
}

/////This script ensures a smooth responsiveness of the no Voting Modal
function noVotingModalResp(e) {
    if(e.matches && noVotingModal.classList.contains("block")){
        noVotingModal.classList.remove("block")
        noVotingModal.classList.add("flex")
    }else{
        noVotingModal.classList.remove("flex")
        noVotingModal.classList.add("block")
    }
}

desktopWidth.addListener(noVotingModalResp)
noVotingModalResp(desktopWidth)

/////Loops through the voteButtons and show the modal
for (let i = 0; i < voteButtons.length; i++) {
  voteButtons[i].addEventListener("click" , ()=> {
    shownoVotingModal();
  })
}

/////closes the modal
gotItBtn.addEventListener("click" , ()=> {
    closenoVotingModal();
})

////tis closes the modal if anywhere outside the modal has been clicked.
noVotingModal.addEventListener("click" , (event)=> {
    var isClickedInside = noVotingModalMain.contains(event.target);

    // If the clicked element is outside the div, log a message
    if (!isClickedInside) {
      closenoVotingModal()
    }
})


 /******************** This script for the TEMPORARY voting functionality ****************************/
