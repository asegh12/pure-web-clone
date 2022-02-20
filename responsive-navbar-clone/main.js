var bnt = document.querySelector(".hamburger");
var menubar = document.querySelector(".menu-bar");
var social = document.querySelector(".social");

bnt.addEventListener('click', function() {
  menubar.classList.toggle("active");
  social.classList.toggle("active");
});
