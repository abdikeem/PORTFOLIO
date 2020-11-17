var trigger = $('.navbar-toggler'),
overlay     = $('.overlay'),
navc     = $('.navbar-collapse'),
active      = false;


$('.navbar-toggler, .navbar-nav li a, .overlay').on('click', function () {
    $('.navbar-toggler').toggleClass('active')
  //   $('#js-navbar-menu').toggleClass('active');
  //   $('.navbar-collapse').toggleClass('show');
    overlay.toggleClass('active');
    navc.toggleClass('active');
});  

$('#mh-header').onePageNav({
    currentClass: 'active', 
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
});

function myFunction() {
  var x = document.getElementById("nav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}