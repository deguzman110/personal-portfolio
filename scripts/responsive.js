// nav responsiveness

function myFunction() {
  var x = document.querySelectorAll("nav li")
  if (x.className === "nav li") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}
