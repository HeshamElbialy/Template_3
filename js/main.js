// change nav style on scroll
let myNav = document.getElementById("myNav");

window.onscroll = () => {
  if (window.scrollY > 200) {
    myNav.classList.add("navOnScroll");
  } else {
    myNav.classList.remove("navOnScroll");
  }
};
