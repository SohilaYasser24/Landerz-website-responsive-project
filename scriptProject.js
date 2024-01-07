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
  nav.style.display = "block";
  nav.style.boxShadow = "-5px 5px 40px rgba(0, 0, 0, 0.1)";
});

for(var i=0 ; i < btnsNav.length ; i++){
  btnsNav[i].addEventListener("click",function(){
    nav.style.display = "none";
  });
}


/* Drag slider Testimonials */
$(document).ready(function () {
    
    $(".carousel-inner").draggable({
      axis: "x", 
      cursor: "grabbing",
      stop: function () {

        var deltaX = $(this).data("ui-draggable").originalPosition.left - $(this).data("ui-draggable").position.left;
        
        if (deltaX > 50) {
          $(this).carousel('next');
        } else if (deltaX < -50) {
          $(this).carousel('prev');
        }
        
        $(this).animate({
          left: 0
        }, 500); 
      }
    });

    $(".carousel-inner").on("selectstart", function () {
      return false;
    });
});