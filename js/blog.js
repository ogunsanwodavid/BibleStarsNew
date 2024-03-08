/******* This script dynamically changes the features of the heading blog content using the data stored in the object below*/
const headingBlogData = 
    {
        "href": "./blog/the-organisers-are-set-to-raise-100-partners.html",
        "alt": "The Organisers of Bible Stars are set to raise 100 Partners for Bible Stars Reality Show",
        "image": "./assets/blog/blog-1.jpg",
        "title" : "Breaking News: The Organisers of Bible Stars are set to raise 100 Partners for Bible Stars Reality Show",
        "date": "7th March, 2024"
    }


const headingBlogContent = document.getElementById("heading-blog-content")
const headingBlogImage = document.getElementById("heading-blog-image")
const headingBlogTitle = document.getElementById("heading-blog-title")
const headingBlogDate = document.getElementById("heading-blog-date")


headingBlogContent.href = headingBlogData.href
headingBlogContent.alt = headingBlogData.alt
headingBlogImage.src = headingBlogData.image
headingBlogImage.srcset = headingBlogData.image
headingBlogTitle.innerHTML = headingBlogData.title
headingBlogDate.innerHTML = headingBlogData.date  



/******* This script dynamically changes the properties of the main blog content using the data stored in the JSON below*/

const mainBlogJSON = [
    ////// ADD NEW CONTENTS FROM THE TOP PLEASE AND ADD NEW DIVS IN THE HTML FILE TO COMPLEMENT THE CHANGE
    {
        "href": "./blog/your-dream-reality-show-is-set-to-hit-your-screen.html",
        "alt": "Your Dream Reality Show is set to hit your screens",
        "image": "./assets/blog/blog-3.jpg",
        "title": "Breaking News: Your Dream Reality Show is set to hit your screens – GET READY TO TUNE IN!",
        "date": "8th March, 2024"
    },
]

const mainBlogContents = document.getElementsByClassName("blog-content")
const mainBlogImages = document.getElementsByClassName("blog-image")
const mainBlogTitles = document.getElementsByClassName("blog-title")
const mainBlogDates = document.getElementsByClassName("blog-date")
const showMoreBtn = document.getElementById("show-more-btn")
const noSearchResults = document.getElementById("no-search-results")

/******* Dynamically edits contents of blog divs on page load*/
for (let i = 0; i < mainBlogContents.length; i++) {
    mainBlogContents[i].href = mainBlogJSON[i].href
    mainBlogContents[i].alt = mainBlogJSON[i].alt
    mainBlogImages[i].src = mainBlogJSON[i].image
    mainBlogImages[i].srcset = mainBlogJSON[i].image
    mainBlogTitles[i].innerHTML = mainBlogJSON[i].title
    mainBlogDates[i].innerHTML = mainBlogJSON[i].date
    
    //Hides the show more button if the blog divs are 6 or less
    if(mainBlogContents.length <= 6){
        showMoreBtn.classList.add("hidden")
        showMoreBtn.classList.add("md:hidden")
    }

    //Displays the show more button if the blog divs are more than 6
    if(mainBlogContents.length > 6) {
        showMoreBtn.classList.remove("hidden")
        showMoreBtn.classList.remove("md:hidden")
    }
}



/********** This script is for the search input functionality */
const blogSearch = document.getElementById("blog-search")
const currentSearchResults = document.getElementsByClassName("current-search")

function searchBlogs() {
    // Get the search query from the input field
    var searchQuery = blogSearch.value.toLowerCase()

    for (let i = 0; i < mainBlogContents.length; i++) {
        var text = mainBlogTitles[i].textContent.toLowerCase();

        // Check if the text content of the div contains the search query
        if(text.includes(searchQuery)){
            mainBlogContents[i].classList.remove("hidden")
            mainBlogContents[i].classList.remove("md:hidden")
            mainBlogContents[i].classList.add("current-search")
        }else{
            mainBlogContents[i].classList.add("hidden")
            mainBlogContents[i].classList.add("md:hidden")
            mainBlogContents[i].classList.remove("current-search")
        }
    }

    //This makes only 6 search results visible at first
    for (let i = 0; i < currentSearchResults.length; i++) {
        if(i > 5){
            currentSearchResults[i].classList.add("hidden")
            currentSearchResults[i].classList.add("md:hidden")
        } 
    }

    //Shows "No Results Found" if there are no search results
    if(searchQuery != "" && currentSearchResults.length == 0){
        noSearchResults.classList.remove("hidden")
        noSearchResults.classList.remove("md:hidden")
    }else{
        noSearchResults.classList.add("hidden")
        noSearchResults.classList.add("md:hidden")
    }

    //Hides Show more button if there are six or less search results
    if(currentSearchResults.length <= 6){
        showMoreBtn.classList.add("hidden")
        showMoreBtn.classList.add("md:hidden")
    }

    //Displays Show more button if there are more than six search results
    if(currentSearchResults.length > 6) {
        showMoreBtn.classList.remove("hidden")
        showMoreBtn.classList.remove("md:hidden")
    }
    
}


//This makes only 6 blog contents visible at first
for (let i = 0; i < mainBlogContents.length; i++) {
    if(i > 5){
        mainBlogContents[i].classList.add("hidden")
        mainBlogContents[i].classList.add("md:hidden")
    }
}



//adding onclick event on the showmore btn to show 6 more blog contents on each click
showMoreBtn.addEventListener("click" , () => {
    //check if show more button is meant to show more or not
    //and if the search input is empty
    if(showMoreBtn.innerHTML == "Show More" && blogSearch.value.toLowerCase() == ""){
        let k = 0;
        
        //checks number of blog contents currently displayed
        for (let i = 0; i < mainBlogContents.length; i++) {
            if(!mainBlogContents[i].classList.contains("hidden")){
                k += 1
            }    
        }
        
        //if k is not the whole number of blog contents, make 6 more displayed
        if(k != mainBlogContents.length){
            for (let a = 0; a < 6; a++) {
                mainBlogContents[k + a].classList.remove("hidden")       
                mainBlogContents[k + a].classList.remove("md:hidden")
            }
        //else if all the blog contents have been shown, make the div
        //turn show less and change its function
        }else if(k == mainBlogContents.length){
            showMoreBtn.innerHTML = "Show Less"
        }
    }else if(showMoreBtn.innerHTML == "Show Less" && blogSearch.value.toLowerCase() == ""){
        for (let i = 6; i < mainBlogContents.length; i++) {
            mainBlogContents[i].classList.add("hidden")
            mainBlogContents[i].classList.add("md:hidden")
        }
        mainBlogContents[5].scrollIntoView()
        showMoreBtn.innerHTML = "Show More"
    }

    //and if the search input is having an entry
    //this runs another script
    else if(showMoreBtn.innerHTML == "Show More" && blogSearch.value.toLowerCase() != ""){
        let k = 0
        //checks number of blog contents currently displayed
        for (let i = 0; i < currentSearchResults.length; i++) {
            if(!currentSearchResults[i].classList.contains("hidden")){
                k += 1
            }    
        }
        
        //if k is not the whole number of blog contents, make 6 more displayed
        if(k != currentSearchResults.length){
            for (let a = 0; a < 6; a++) {
                currentSearchResults[k + a].classList.remove("hidden")       
                currentSearchResults[k + a].classList.remove("md:hidden")
            }
        //else if all the blog contents have been shown, make the div
        //turn show less and change its function
        }else if(k == currentSearchResults.length){
            showMoreBtn.innerHTML = "Show Less"
        }
    }
    else if(showMoreBtn.innerHTML == "Show Less" && blogSearch.value.toLowerCase() != ""){
        for (let i = 6; i < currentSearchResults.length; i++) {
            currentSearchResults[i].classList.add("hidden")
            currentSearchResults[i].classList.add("md:hidden")
        }
        currentSearchResults[0].scrollIntoView()
        showMoreBtn.innerHTML = "Show More"
    }
})
