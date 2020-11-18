//common side navbar call

$(document).ready(function () {
  $(".sidenav").sidenav();
});

//Get the top button
var mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Footer and Navbar

let header = $(`
<nav class="black">
<div class="nav-wrapper">
    <a href="#!" class="brand-logo"><img src="/images/logo.jpg" style="width:53px; border-radius:10%;"></a>
    <a href="#" data-target="mobile-demo" class="white-text sidenav-trigger"><i
            class="material-icons">menu</i></a>
    <ul class="right hide-on-med-and-down">
        <li><a class="white-text" href="#home">Home</a></li>
        <li><a class="white-text" href="#education">Education</a></li>
        <li><a class="white-text" href="#projects">Projects</a></li>
        <li><a class="white-text" href="#skills">Skills</a></li>
        <!--TOGGLE FOR LIGHT/DARK MODE-->
        <li>
        <label for="switch" class="theme-switch">
        <input class="toggle-checkbox" type="checkbox" id="switch" name="theme" />
          <div class='toggle-slot'>
          <div class='sun-icon-wrapper'>
          <div class="iconify sun-icon" data-icon="feather-sun" data-inline="false"> </div>
          </div>
          <div class='toggle-button'></div>
          <div class='moon-icon-wrapper'>
          <div class="iconify moon-icon" data-icon="feather-moon" data-inline="false"> </div>
          </div>
          </div>
          </label>
        </li>
    </ul>
</div>
</nav>

<!--Side Nav Bar -->
<ul class="sidenav" id="mobile-demo">
  <li><a class="white-text" href="#home">Home</a></li>
  <li><a class="white-text" href="#education">Education</a></li>
  <li><a class="white-text" href="#projects">Projects</a></li>
  <li><a class="white-text" href="#skills">Skills</a></li>

<!--TOGGLE FOR LIGHT/DARK MODE-->
        <li>
        <label for="switch" class="theme-switch">
        <input class="toggle-checkbox" type="checkbox" id="switch" name="theme" />
          <div class='toggle-slot side-toggle'>
          <div class='sun-icon-wrapper'>
          <div class="iconify sun-icon" data-icon="feather-sun" data-inline="false"> </div>
          </div>
          <div class='toggle-button'></div>
          <div class='moon-icon-wrapper'>
          <div class="iconify moon-icon" data-icon="feather-moon" data-inline="false"> </div>
          </div>
          </div>
          </label>
        </li>
</ul>`);

let footer = $(`
<footer class="webintern-footer">
<div class="webintern-footer-inner">
  <div class="container">
    <div class="row">
      <div class="col-lg-12 col-md-12 pt-12" >
      <div class="col-sm-12 col-md-12">
        <a class="webintern-footer-logo" href="#">
          <center><img src="/images/kim.jpg"style="width: 100px; border-radius:5px;"/></center>
        </a>
        <div class="simple-text text-center dark padding-sm">
          <p >
            "Develop a passion for learning. If you do, you will never cease to grow."
          </p>
        <div class="empty-space xs-25 sm-25"></div>
      </div>
    </div>
    <!-- Social media icons for footer -->

<div class="social-icons-footer">
  <a class="social-icon-footer twitter" href="https://twitter.com/kimzaras" target="_blank" rel="author">
    <i class="fab fa-twitter"></i>
      </a>
  <a class="social-icon-footer youtube" href="https://www.youtube.com/channel/UCmkl8BoVYma83_fvl8NbZkg" target="_blank" rel="author">
    <i class="fab fa-youtube"></i>
      </a>
  <a class="social-icon-footer linkedin" href="https://www.linkedin.com/in/kimza-abdirahman-21839817a" target="_blank" rel="author">
    <i class="fab fa-linkedin-in"></i>
      </a>
  <a class="social-icon-footer tumblr" href="https://abdihakimza.tumblr.com/" target="_blank" rel="author">
    <i class="fab fa-tumblr"></i>
      </a>
  <a class="social-icon-footer github" href="https://www.github.com/abdikeem" target="_blank" rel="author">
    <i class="fab fa-github"></i>
      </a>
  <br>

 <p style="color:white"> Email:&nbsp<a href="mailto:">kimza.co.ke@gmail.com</a>
 <p style="color:white; margin-left:0px;"> Phone:&nbsp<a href="callto:">+254208000360</a>
<p style="color:white; text-align:center;"> copyright &copy 2020 Abdihakim</p>
</div>
    </div>
  </div>
</div>
</footer>`);
let bodyElement = $(`body`);
bodyElement.prepend(header);
bodyElement.append(footer);

/*JavaScript for toggle for light/dark mode*/

var checkbox = document.querySelector('input[name=theme]');
if(checkbox)
 {
 checkbox.addEventListener('change', function(){
   if(this.checked)
   {
     trans()
     document.documentElement.setAttribute('data-theme', 'dark')
   }
   else
   {
     trans()
     document.documentElement.setAttribute('data-theme', 'light')
   }
 });

 let trans = () => {
   document.documentElement.classList.add('transition');
   window.setTimeout(() => {
     document.documentElement.classList.remove('transition')
   }, 1000)
 }}
