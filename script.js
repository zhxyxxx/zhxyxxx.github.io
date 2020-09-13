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


//switch Language
var ja = document.querySelectorAll(".Japanese");
var en = document.querySelectorAll(".English");
var ch = document.querySelectorAll(".Chinese");
var j_btn = document.querySelector("#Japanese");
var e_btn = document.querySelector("#English");
var c_btn = document.querySelector("#Chinese");

j_btn.onclick = () => {
  ch.forEach(function(value, index, array) {
    value.style.display = "none";
  });
  en.forEach(function(value, index, array) {
    value.style.display = "none";
  });
  ja.forEach(function(value, index, array) {
    value.style.display = "block";
  });
};

e_btn.onclick = () => {
  ch.forEach(function(value, index, array) {
    value.style.display = "none";
  });
  ja.forEach(function(value, index, array) {
    value.style.display = "none";
  });
  en.forEach(function(value, index, array) {
    value.style.display = "block";
  });
};

c_btn.onclick = () => {
  ja.forEach(function(value, index, array) {
    value.style.display = "none";
  });
  en.forEach(function(value, index, array) {
    value.style.display = "none";
  });
  ch.forEach(function(value, index, array) {
    value.style.display = "block";
  });
};
