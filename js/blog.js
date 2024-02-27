/******* This script dynamically changes the features of the heading blog content using the data stored in the object below*/
const headingBlogData = 
    {
        "href": "./blog/eachblogpage.html",
        "alt": "some description",
        "image": "./assets/home/stock1.jpg",
        "title" : "Heading Blog Title. Heading Blog Title",
        "date": "31st January, 2023"
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
        "href": "#",
        "alt": "some description",
        "image": "./assets/home/stock2.jpg",
        "title": "Blog Title 1 Here. Blog Title 1 Here.",
        "date": "29th January, 2023"
    },
    {
        "href": "#",
        "alt": "some description",
        "image": "./assets/home/stock3.jpg",
        "title": "Blog Title 2 Here. Blog Title 2 Here.",
        "date": "28th January, 2023"
    },
    {
        "href": "#",
        "alt": "some description",
        "image": "./assets/home/stock4.jpg",
        "title": "Blog Title 3 Here. Blog Title 3 Here.",
        "date": "27th January, 2023"
    },
    {
        "href": "#",
        "alt": "some description",
        "image": "./assets/home/stock1.jpg",
        "title": "Blog Title 4 Here. Blog Title 4 Here.",
        "date": "26th January, 2023"
    },
    {
        "href": "#",
        "alt": "some description",
        "image": "./assets/home/stock2.jpg",
        "title": "Blog Title 5 Here. Blog Title 5 Here.",
        "date": "25th January, 2023"
    },
    {
        "href": "#",
        "alt": "some description",
        "image": "./assets/home/stock3.jpg",
        "title": "Blog Title 6 Here. Blog Title 6 Here.",
        "date": "24th January, 2023"
    },
    {
        "href": "#",
        "alt": "some description",
        "image": "./assets/home/stock4.jpg",
        "title": "Blog Title 7 Here. Blog Title 7 Here.",
        "date": "23th January, 2023"
    },
    {
        "href": "#",
        "alt": "some description",
        "image": "./assets/home/stock1.jpg",
        "title": "Blog Title 8 Here. Blog Title 8 Here.",
        "date": "22nd January, 2023"
    },
    {
        "href": "#",
        "alt": "some description",
        "image": "./assets/home/stock2.jpg",
        "title": "Blog Title 9 Here. Blog Title 9 Here.",
        "date": "21st January, 2023"
    },
    {
        "href": "#",
        "alt": "some description",
        "image": "./assets/home/stock3.jpg",
        "title": "Blog Title 10 Here. Blog Title 10 Here.",
        "date": "20th January, 2023"
    },
    {
        "href": "#",
        "alt": "some description",
        "image": "./assets/home/stock4.jpg",
        "title": "Blog Title 11 Here. Blog Title 11 Here.",
        "date": "19th January, 2023"
    },
    {
        "href": "#",
        "alt": "some description",
        "image": "./assets/home/stock1.jpg",
        "title": "Blog Title 12 Here. Blog Title 12 Here.",
        "date": "18th January, 2023"
    },
]

const mainBlogContents = document.getElementsByClassName("blog-content")
const mainBlogImages = document.getElementsByClassName("blog-image")
const mainBlogTitles = document.getElementsByClassName("blog-title")
const mainBlogDates = document.getElementsByClassName("blog-date")


for (let i = 0; i < mainBlogContents.length; i++) {
    mainBlogContents[i].href = mainBlogJSON[i].href
    mainBlogContents[i].alt = mainBlogJSON[i].alt
    mainBlogImages[i].src = mainBlogJSON[i].image
    mainBlogImages[i].srcset = mainBlogJSON[i].image
    mainBlogTitles[i].innerHTML = mainBlogJSON[i].title
    mainBlogDates[i].innerHTML = mainBlogJSON[i].date
}



/********** This script is for the search input */
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

}


//This makes only 6 blog contents visible at first
for (let i = 0; i < mainBlogContents.length; i++) {
    if(i > 5){
        mainBlogContents[i].classList.add("hidden")
        mainBlogContents[i].classList.add("md:hidden")
    }    
}

const showMoreBtn = document.getElementById("show-more-btn")


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
