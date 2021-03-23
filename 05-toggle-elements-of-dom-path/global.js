// Your JavaScript goes here.
window.addEventListener("load", function(){
  let button = document.getElementById("toggle_button");
  let toggleElements = document.getElementsByClassName("second_five")[0]; // Paļaujos uz to ka ir tikai viena klase ar nosaukumu "second_five"
  button.addEventListener("click", function(){
    Array.from(toggleElements.children).forEach(function(toggle){
      if(toggle.style.display == "none") {
        toggle.style.display = "flex";
      }
      else {
        toggle.style.display = "none";
      }
    });
  });
});