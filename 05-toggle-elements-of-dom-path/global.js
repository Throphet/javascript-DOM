// Your JavaScript goes here.
window.addEventListener("load", function(){

  let button = document.getElementById("toggle_button");
  let toggleElements = document.getElementsByClassName("second_five")[0];
  // Paļaujos uz to ka ir tikai viena klase ar nosaukumu "second_five"
  // Alternatīvs: let toggleElements = document.querySelectorAll(".second_five li");

  button.addEventListener("click", function(){
    Array.from(toggleElements.children).forEach(function(toggle){

      if(toggle.style.display == "none") {
        toggle.style.display = "list-item";
      }
      else {
        toggle.style.display = "none";
      }

    });
  });
});