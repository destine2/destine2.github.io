

let hamburgerBtn = document.getElementById("hamburgerBtn");
let sideMenu = document.getElementById('sideMenu')

let showingSideMenu = false;



hamburgerBtn.addEventListener('click', ()=>{
    if(showingSideMenu === false){
        sideMenu.style.left = "0px";
        showingSideMenu =  true
        hamburgerBtn.style.marginLeft = "-3%"
        hamburgerBtn.classList.remove('fa-bars')
        hamburgerBtn.classList.add('fa-plus')
        hamburgerBtn.style.rotate = '45deg';
        
    }else{
        hamburgerBtn.style.rotate = '0deg';
        hamburgerBtn.style.marginLeft = "-3%"
        hamburgerBtn.classList.add('fa-bars')
        hamburgerBtn.classList.remove('fa-plus')
        sideMenu.style.left = "-500px";
        showingSideMenu =  false
    }
})

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let moon = document.getElementById('moon');

let header = document.getElementById('header');
let experienceSection = document.getElementById('experience');
let experienceImg = document.getElementById('experienceImg');
let servicesSection = document.getElementById('services');
let aboutSection = document.getElementById('about');
let visitSection = document.getElementById('visiting-hours');



let changed = false;

moon.addEventListener('click', ()=> {
    if (changed === false) {
        moon.classList.remove('fa-moon');
        moon.classList.add('fa-sun');
        header.style.background = "#144901a1";
        sideMenu.style.background = "#144901a1";

        experienceSection.style.background = "#6e6e6e";
        experienceSection.style.color = "#f5f5f5";
        experienceImg.style.background = "#6e6e6e";

        servicesSection.style.background = "#3c3c3c";

        aboutSection.style.background = "#6e6e6e";

        visitSection.style.background = "#3c3c3c";

        changed = true;
    } else {
        moon.classList.remove('fa-sun');
        moon.classList.add('fa-moon');
        header.style.background = "#4aff08a1";
        sideMenu.style.background = "#0abf0096";

        experienceSection.style.background = "#f5f5f5";
        experienceSection.style.color = "black";
        experienceImg.style.background = "#f5f5f5";

        servicesSection.style.background = "white";

        aboutSection.style.background = "#f5f5f5";

        visitSection.style.background = "white";

        changed = false;
        
    }
})