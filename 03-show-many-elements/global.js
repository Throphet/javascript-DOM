window.addEventListener("load", function(){
  let showButton = document.getElementById("button");
  let showElements = document.getElementsByClassName("show_me");
  showButton.addEventListener("click", function(){
    Array.from(showElements).forEach(function(show) {
      show.style.display = "flex";
    });
  });
});