document.addEventListener("DOMContentLoaded", function() {
  var homeSection = document.getElementById("home-section");

  if (homeSection) {
    homeSection.scrollIntoView({ behavior: 'smooth' });
  }
});

/*Active style in navbar */
var header = document.getElementsByClassName("navbar-nav")[0];
var btns = document.getElementsByClassName("nav-link");
for(var i = 0 ; i < btns.length ; i++){
  btns[i].addEventListener("click",function(){
    var current = document.querySelector(".nav-link.active");
    current.classList.remove("active");
    this.classList.add("active");
  });
}

var head = document.getElementsByClassName("navbar-nav")[0];
var btn = document.getElementsByClassName("nav-colapse-link");
for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    var current = document.querySelector(".nav-colapse-link.active");
    current.classList.remove("active");
    this.classList.add("active");
  });
}


/*responsive navbar*/
var toggle = document.getElementsByClassName("navbar-toggler")[0];
var nav = document.getElementsByClassName("nav-wrap")[0];
var btnsNav = document.getElementsByClassName("nav-colapse-link");
var navbar = document.getElementsByClassName("navbar")[0];

toggle.addEventListener("click",function(){
  if(nav.style.display == "none"){
    nav.style.display = "block";
  }else{
    nav.style.display = "none";
  }
  
  nav.style.boxShadow = "-5px 5px 40px rgba(0, 0, 0, 0.1)";
});

for(var i=0 ; i < btnsNav.length ; i++){
  btnsNav[i].addEventListener("click",function(){
    nav.style.display = "none";
  });
}


/* Drag slider Testimonials */
$(document).ready(function () {
  var $carouselInner = $(".carousel-inner");

  $carouselInner.draggable({
      axis: "x",
      cursor: "grabbing",
      stop: function () {
          var deltaX = $(this).data("ui-draggable").originalPosition.left - $(this).data("ui-draggable").position.left;

          if (deltaX > 50) {
              $(".carousel").carousel('next');
          } else if (deltaX < -50) {
              $(".carousel").carousel('prev');
          }

          $(this).animate({
              left: 0
          }, 500);
      }
  });

  $carouselInner.on("selectstart", function () {
      return false;
  });

  $(".carousel").on('slide.bs.carousel', function (e) {
      var index = $(e.relatedTarget).index();
      $(".dot").removeClass("active");
      $(".dot").eq(index).addClass("active");
  });
});


/* NavBar active section automaticly */
const links = document.querySelectorAll(".navbar-nav a");
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  let scrollY = window.pageYOffset;

  links.forEach(link => {
    const sectionId = link.getAttribute("href").substring(1); 

    const section = document.getElementById(sectionId);

    if (section) {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 50;

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
  });
}
