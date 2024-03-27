// controle video speed
// let vid = document.getElementById("bgvideo");
// function getPlaySpeed() { 
//     alert(vid.playbackRate);
//   } 
  
//   function setPlaySpeed() { 
//     vid.playbackRate = 0.5;
//   }
// nav fixed and shows with scroll
window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  var homeSection = document.getElementById('home');
  var navbarHeight = navbar.offsetHeight;
  var homeSectionOffset = homeSection.offsetTop;
  var scrollPosition = window.scrollY;

  if (scrollPosition >= homeSectionOffset) {
      navbar.classList.add('fixed-nav');
  } else {
      navbar.classList.remove('fixed-nav');
  }
});




// about me section details 
var ttls = document.getElementsByClassName("ttl");
var aboutcontents = document.getElementsByClassName("aboutcontent");

function opentab(tabname) {
    for (title of ttls) {
        title.classList.remove("active-link");
    }
    for (content of aboutcontents) {
        content.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link"); // Corrected class name
    document.getElementById(tabname).classList.add("active-tab"); // Corrected ID
}

