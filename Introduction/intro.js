let lowerline = document.getElementById("lowerline");

document.addEventListener('DOMContentLoaded' , ()=>{
    setTimeout(()=>{
    lowerline.style.visibility = "visible"
    setTimeout(()=>{
    lowerline.style.top = "75"+"%"
    } , 1000)
} , 1000)
    
})


let upperline = document.getElementById("upperline");

document.addEventListener('DOMContentLoaded' , ()=>{
    setTimeout(()=>{
    upperline.style.visibility = "visible"

    setTimeout(()=>{
    upperline.style.top = "25"+"%"
    } , 1000)
} , 1000)
    
})

/// Setting up the upperlinemiddle

let upperlinemiddle = document.getElementById("upperlinemiddle");

document.addEventListener('DOMContentLoaded' , ()=>{
    setTimeout(()=>{
    upperlinemiddle.style.visibility = "visible"
    setTimeout(()=>{
    upperlinemiddle.style.top = "21"+"%"
    } , 1000)
}, 1000)
    
})


///Setting up the lowermiddlekine 

let lowerlinemiddle = document.getElementById("lowerlinemiddle");

document.addEventListener('DOMContentLoaded' , ()=>{
    setTimeout(()=>{
    lowerlinemiddle.style.visibility = "visible"
    
    setTimeout(()=>{
        lowerlinemiddle.style.top = "79.3"+"%"
    } , 1000)
} , 1000)
    
})

/// Setting up the upperlinemiddle image

let danix = document.getElementById("danix");

document.addEventListener('DOMContentLoaded' , ()=>{
    setTimeout(()=>{
    danix.style.visibility = "visible"
    setTimeout(()=>{
    danix.style.top = "8"+"%"
    } , 1000)
} , 1000)
    
})

/// Setting up the container 

let container = document.querySelector(".container");

document.addEventListener('DOMContentLoaded' , ()=>{
    setTimeout(() => {
        container.style.visibility = "visible"
        setTimeout(()=>{
            container.style.bottom = "12.3"+"%"
        } , 1000)
    }, 1000);
  
    
})

let newDiv = document.querySelector(".newDiv");
document.addEventListener('DOMContentLoaded' , ()=>{
     newDiv.style.opacity = "0"
     newDiv.style.zIndex = "-1"
    
})

/// Setting up the Container

let container2 = document.querySelector(".container2");
setTimeout(()=>{
    container2.style.opacity = "1";
    container2.style.zIndex = "1000"
} , 2400)



//// Trasfer to social media

document.addEventListener('DOMContentLoaded', function () {
    const twiterIcon = document.querySelector('.twiter2');
    const githubIcon = document.querySelector('.github2');
    const instagramIcon = document.querySelector('.instagram2');
    const youtubeIcon = document.querySelector('.youtube2');
    const spotifyIcon = document.querySelector('.spotify2');

    const githubURL = 'https://github.com/Deepak2250';
    const instagramURL = 'https://www.instagram.com/dj_danix__/';
    const spotifyURL = 'https://open.spotify.com/user/316ryv3bgd2kbtpuanpl53pqjjdm?si=c58c53ec8d56425a';

    // Event listeners for each icon
    twiterIcon.addEventListener('click', function () {
        alert("I Dont Have Twiter Account")
    });

    githubIcon.addEventListener('click', function () {
        window.open(githubURL, '_blank');
    });

    instagramIcon.addEventListener('click', function () {
        window.open(instagramURL, '_blank');
    });

    youtubeIcon.addEventListener('click', function () {
        alert("I Dont Give U MY Yt Channel")
    });

    spotifyIcon.addEventListener('click', function () {
        window.open(spotifyURL, '_blank');
    });
});



let About = document.getElementById("about");
About.addEventListener('click' , ()=>{
    window.location.href = "About.html"
})


let projects = document.getElementById("projects");
projects.addEventListener('click' , ()=>{
    window.location.href = "Projects.html"
   
})



/// Setting Up the Service Buttton

let Service = document.getElementById("Service");
Service.addEventListener('click' ,()=>{
    alert("I Dont Provide Services Right Now")
})