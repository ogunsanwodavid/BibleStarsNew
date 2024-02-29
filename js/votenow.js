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


 



 /******************** This script for the PERMANENT voting functionality ****************************/
 const voteModal = document.getElementById("vote-modal")
 const voteModalMain = document.getElementById("vote-modal-main")
 var desktopWidth = window.matchMedia("(min-width:900px)")
 const closeVoteModalIcon = document.getElementById("close-vote-modal-icon")
 const votedStarName= document.getElementById("voted-star-name")

 function showvoteModal() {
  if(desktopWidth.matches){
      //Display no Voting Modal for desktop
      voteModal.classList.remove("hidden")
      voteModal.classList.add("flex")
  }else{
      //Display no Voting Modal for mobile
      voteModal.classList.remove("hidden")
      voteModal.classList.add("block")
  }
}

function closevoteModal() {
if(desktopWidth.matches){
    //Display no Voting Modal for desktop
    voteModal.classList.remove("flex")
    voteModal.classList.add("hidden")
}else{
    //Display no Voting Modal for mobile
    voteModal.classList.remove("block")
    voteModal.classList.add("hidden")
}
}

/////This script ensures a smooth responsiveness of the no Voting Modal
function voteModalResp(e) {
  if(e.matches && voteModal.classList.contains("block")){
      voteModal.classList.remove("block")
      voteModal.classList.add("flex")
  }else{
      voteModal.classList.remove("flex")
      voteModal.classList.add("block")
  }
}

desktopWidth.addListener(voteModalResp)
voteModalResp(desktopWidth)

/////Loops through the voteButtons and show the modal
for (let i = 0; i < voteButtons.length; i++) {
  voteButtons[i].addEventListener("click" , ()=> {
    showvoteModal();
  })
}

/////closes the modal
closeVoteModalIcon.addEventListener("click" , ()=> {
    closevoteModal();
})

////tis closes the modal if anywhere outside the modal has been clicked.
voteModal.addEventListener("click" , (event)=> {
    var isClickedInside = voteModalMain.contains(event.target);

    // If the clicked element is outside the div, log a message
    if (!isClickedInside) {
      closevoteModal()
    }
})


 /******************** This script for the PERMANENT voting functionality ****************************/