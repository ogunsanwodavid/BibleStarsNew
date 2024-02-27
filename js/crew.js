////////// This JSON stores info about each crew member for easy change in the slider
const crewJSON = [
    //Crew member one details
    {
        "name" : "Person One",
        "image" : "./assets/crew/crew-1.png",
        "role" : "Lead Host",
        "bio" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eum corrupti repellendus aut reprehenderit adipisci, possimus esse laboriosam error provident reiciendis officiis dignissimos labore voluptatum magni quam ipsa voluptate recusandae voluptatibus alias tempora iusto libero."
    },

    //Crew member two details
    {
        "name" : "Person Two",
        "image" : "./assets/crew/crew-2.png",
        "role" : "Co-Host",
        "bio" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eum corrupti repellendus aut reprehenderit adipisci, possimus esse laboriosam error provident reiciendis officiis dignissimos labore voluptatum magni quam ipsa voluptate recusandae voluptatibus alias tempora iusto libero."
    },

    //Crew member three details
    {
        "name" : "Person Three",
        "image" : "./assets/crew/crew-3.png",
        "role" : "Analyst",
        "bio" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eum corrupti repellendus aut reprehenderit adipisci, possimus esse laboriosam error provident reiciendis officiis dignissimos labore voluptatum magni quam ipsa voluptate recusandae voluptatibus alias tempora iusto libero."
    },

    //Crew member four details
    {
        "name" : "Person Four",
        "image" : "./assets/crew/crew-4.png",
        "role" : "Director",
        "bio" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eum corrupti repellendus aut reprehenderit adipisci, possimus esse laboriosam error provident reiciendis officiis dignissimos labore voluptatum magni quam ipsa voluptate recusandae voluptatibus alias tempora iusto libero."
    },

    //Crew member five details
    {
        "name" : "Person Five",
        "image" : "./assets/crew/crew-5.png",
        "role" : "Co-host",
        "bio" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eum corrupti repellendus aut reprehenderit adipisci, possimus esse laboriosam error provident reiciendis officiis dignissimos labore voluptatum magni quam ipsa voluptate recusandae voluptatibus alias tempora iusto libero."
    },

    //Crew member six details
    {
        "name" : "Person Six",
        "image" : "./assets/crew/crew-6.png",
        "role" : "Co-host",
        "bio" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eum corrupti repellendus aut reprehenderit adipisci, possimus esse laboriosam error provident reiciendis officiis dignissimos labore voluptatum magni quam ipsa voluptate recusandae voluptatibus alias tempora iusto libero."
    },

    //Crew member seven details
    {
        "name" : "Person Seven",
        "image" : "./assets/crew/crew-7.png",
        "role" : "Co-Host",
        "bio" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eum corrupti repellendus aut reprehenderit adipisci, possimus esse laboriosam error provident reiciendis officiis dignissimos labore voluptatum magni quam ipsa voluptate recusandae voluptatibus alias tempora iusto libero."
    },

    //Crew member eight details
    {
        "name" : "Person Eight",
        "image" : "./assets/crew/crew-8.png",
        "role" : "Co-Host",
        "bio" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eum corrupti repellendus aut reprehenderit adipisci, possimus esse laboriosam error provident reiciendis officiis dignissimos labore voluptatum magni quam ipsa voluptate recusandae voluptatibus alias tempora iusto libero."
    }
]


/**** Variables declaration ********/
const dots = document.getElementsByClassName("dot")
const crewImage = document.getElementById("crew-image")
const crewMemberRole = document.getElementById("crew-member-role")
const crewMemberName = document.getElementById("crew-member-name")
const crewMemberBio = document.getElementById("crew-member-bio")


///This function defines the slider change of crew member's info
function changeCrewInfo(i) {
    const activeDot = dots.item(i)

    crewImage.src = crewJSON[i].image
    crewMemberRole.innerHTML = crewJSON[i].role
    crewMemberName.innerHTML = crewJSON[i].name
    crewMemberBio.innerHTML = crewJSON[i].bio

    for (let k = 0; k < dots.length; k++) {
        if(k != i){
            dots.item(k).classList.remove("crew-dot-active")
            activeDot.classList.add("crew-dot-active")
        }
    }
};

//Presets the crew info to first person
changeCrewInfo(0);

//Changes crew info on dot click
for (let i = 0; i < dots.length; i++) {
    dots.item(i).addEventListener("click" , ()=> {
        changeCrewInfo(i)
    })
}


////The function below changes the slider automatically
let slideindex = 0

function changeCrewInfo2() {
    let i
    for (i = 0; i < dots.length; i++) {
        changeCrewInfo(i)
    }
    slideindex++;
    if(slideindex > dots.length){slideindex = 1}
    changeCrewInfo(slideindex-1)

    //set function timeout
    setTimeout(changeCrewInfo2 , 5000)
}


//activates the function
changeCrewInfo2();
