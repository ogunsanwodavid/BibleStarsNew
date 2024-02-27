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

 const starsImages = this.document.getElementsByClassName("star-image")


 document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("scroll", function() {
    

    // If box is in viewport, add the rotate class
    for (let i = 0; i < starsImages.length; i++) {
      let position = starsImages[i].getBoundingClientRect();
      
      if (position.top >= 0 && position.bottom <= window.innerHeight) {
        starsImages[i].classList.add("rotate");
      } else {
        starsImages[i].classList.remove("rotate");
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {

  for (let i = 0; i < starsImages.length; i++) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          starsImages[i].classList.add("rotate");
          observer.unobserve(starsImages[i]); // Stop observing once flipped
        }
      });
    }, { threshold: 0.5 }); // Trigger when half of the box is visible

    observer.observe(starsImages[i]);
  }
});