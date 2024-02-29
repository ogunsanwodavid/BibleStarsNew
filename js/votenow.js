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


 



 /************************** This script for the PERMANENT voting functionality ****************************************/
 const voteModal = document.getElementById("vote-modal")
 const voteModalMain = document.getElementById("vote-modal-main")
 var desktopWidth = window.matchMedia("(min-width:900px)")
 const closeVoteModalIcon = document.getElementById("close-vote-modal-icon")
 const votedStarName= document.getElementById("voted-star-name")
 const starId = document.getElementById("star-id")
 const voteEmail = document.getElementById("vote-email")
 const voteEmailError = document.getElementById("vote-email-error")
 var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
 const voteNumber = document.getElementById("vote-number")
 const voteNumberError = document.getElementById("vote-number-error")
 const price = document.getElementById("price")
 const unitPrice = 200

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

//Function to input the voted star details into the modal
function enterVotedStarDetails(e) {
  //enter voted star name
  votedStarName.innerHTML = e.getAttribute('starname')
  //enter voted star's id
  starId.value = e.getAttribute('starid')
}

//Function to remove the inputed voted star details from the modal
function removeVotedStarDetails() {
  //remove voted star name
  votedStarName.innerHTML = ""
  //remove voted star's id
  starId.value = ""
  //remove email address and all added features
  voteEmail.value = ""
  voteEmail.style.borderColor = ""
  voteEmailError.classList.add("hidden")
  // remove number of votes
  voteNumber.value = ""
  voteNumber.style.borderColor = ""
  voteNumberError.classList.add("hidden")
  //remove price
  price.value = ""
}

/////Loops through the voteButtons and show the modal
for (let i = 0; i < voteButtons.length; i++) {
  voteButtons[i].addEventListener("click" , ()=> {
    showvoteModal();
    enterVotedStarDetails(voteButtons[i])
  })
}

/////closes the modal
closeVoteModalIcon.addEventListener("click" , ()=> {
    closevoteModal();
    removeVotedStarDetails()
})

////tis closes the modal if anywhere outside the modal has been clicked.
voteModal.addEventListener("click" , (event)=> {
    var isClickedInside = voteModalMain.contains(event.target);

    // If the clicked element is outside the div, log a message
    if (!isClickedInside) {
      closevoteModal()
    }
})

////oninput event listener on the votenumber input
voteNumber.addEventListener("input", ()=> {
  //autocalculates price
  price.value = unitPrice * parseInt(voteNumber.value)

  //prevents first character of votenumber from being 0
  if(voteNumber.value.charAt(0) === "0"){
    voteNumber.value = ""
  }
  
  //empties price field if votenumber is empty
  if(voteNumber.value == ""){
    price.value = ""
  }
})

//This redos all error styles if input matches email format
voteEmail.addEventListener("input" , ()=> {
  if(emailPattern.test(voteEmail.value)){
    voteEmailError.classList.add("hidden")
    voteEmail.style.borderColor = "#0f1729"
  }
})

//This redos all error styles if input is not empty
voteNumber.addEventListener("input" , ()=> {
  if(voteNumber.value !== ""){
    voteNumberError.classList.add("hidden")
    voteNumber.style.borderColor = "#0f1729"
  }
})

/********* The function below validates the entire vote form and proceeds to payment if all conditions are met*/
function validateVote(event) {
  let k = 3;
  
  //Prevent default
  event.preventDefault();

  //Prevent empty email and incorrect email format

  //prevents empty email
  if(voteEmail.value.trim() === ""){
      voteEmailError.classList.remove("hidden")
      voteEmail.style.borderColor = "hsl(0, 100%, 66%)"
      /* signUpName.scrollIntoView() */
      k -= 1;
  }else{
      if(!voteEmail.classList.contains("hidden")){
          voteEmailError.classList.add("hidden")
      };
      voteEmail.style.borderColor = "#0f1729"
  }

  //prevents incorrect email format
  if(!emailPattern.test(voteEmail.value)){
      voteEmailError.classList.remove("hidden")
      voteEmail.style.borderColor = "hsl(0, 100%, 66%)"
      /* signUpName.scrollIntoView() */
      k -= 1;
  }else{
      if(!voteEmail.classList.contains("hidden")){
          voteEmailError.classList.add("hidden")
      };
      voteEmail.style.borderColor = "#0f1729"
  }

  //Prevent empty vote number
  if(voteNumber.value.trim() === ""){
    voteNumberError.classList.remove("hidden")
    voteNumber.style.borderColor = "hsl(0, 100%, 66%)"
    /* signUpName.scrollIntoView() */
    k -= 1;
  }else{
      if(!voteNumber.classList.contains("hidden")){
        voteNumberError.classList.add("hidden")
      };
      voteNumber.style.borderColor = "#0f1729"
  }

  /**** Proceeds to payment if every condition is met */
  if (k == 3){
    proceedPayment()
  }else{
    return
  }
}

////// BACKEND DEV SHOULD ADD CODE FOR PROCEEDING TO PAYMENT FUNCTION 
function proceedPayment() {
  window.alert("proceeded to payment")
}

 /************************** This script for the PERMANENT voting functionality ****************************************/