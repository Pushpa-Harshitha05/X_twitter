function getblue() {
  document.getElementById("bluefor").style.backgroundColor = "rgb(14 165 233)";
  document.getElementById("bluefoll").style.backgroundColor = "transparent";
  document.getElementById("for").style.fontWeight = "bold";
  document.getElementById("foll").style.fontWeight = "normal";
}

function getbluecolor() {
  document.getElementById("bluefoll").style.backgroundColor = "rgb(14 165 233)";
  document.getElementById("bluefor").style.backgroundColor = "transparent";
  document.getElementById("foll").style.fontWeight = "bold";
  document.getElementById("for").style.fontWeight = "normal";
}

window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;

  if (scrollPosition < this.lastScrollPosition) {
    document.getElementById("footlist").style.backgroundColor = "white";
  } else {
    document.getElementById("footlist").style.backgroundColor =
      "rgba(156, 163, 175, 0.55)";
  }

  this.lastScrollPosition = scrollPosition;
});
