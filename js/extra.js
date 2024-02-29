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