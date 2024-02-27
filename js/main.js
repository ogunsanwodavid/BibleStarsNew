//////This script is responsive for images loading lazily throughout the website
/* document.addEventListener("DOMContentLoaded", () => {
    const lazyLoadImages = document.querySelectorAll("img.lazy");
  
    function loadAllImages() {
      lazyLoadImages.forEach((img) => img.setAttribute("src", img.dataset.src));
    }
  
    // Check if browser supports native lazy loading
    if ("loading" in HTMLImageElement.prototype) {
      loadAllImages();
    }
    
    // Check if browser support intersection observer
    else if ("IntersectionObserver" in window) {
      const imgsObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (entry.target.dataset.src) {
                entry.target.src = entry.target.dataset.src;
              }
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -60px 0px" }
      );
      lazyLoadImages.forEach((img) => imgsObserver.observe(img));
    }
    
    // If browser doesn't support both, then load all images
    else {
      loadAllImages();
    }
  }); */


/////////This script is responsible for the hidden sidebar navigation
const sideBar = document.getElementById("sidebar")
const friesMenuIcon = document.getElementById("fries-menu-icon")
const closeIcon = document.getElementById("close-icon")

/** The fries menu icon makes the width of the sidebar 100% */
friesMenuIcon.addEventListener("click" , ()=> {
    if(sideBar.classList.contains("w-0")){
        sideBar.classList.remove("w-0")
        sideBar.classList.add("w-full")
    }
})


/** The fries menu icon makes the width of the sidebar 0% */
closeIcon.addEventListener("click" , ()=> {
    if(sideBar.classList.contains("w-full")){
        sideBar.classList.remove("w-full")
        sideBar.classList.add("w-0")
    }
})