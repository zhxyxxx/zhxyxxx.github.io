// scroll to top button
var pagetop = document.getElementById("pageTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 20) {
    pagetop.style.display = "block";
  } else {
    pagetop.style.display = "none";
  }
}
