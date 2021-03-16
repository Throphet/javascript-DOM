// Your JavaScript goes here.
window.addEventListener("load", function(){
    let button = document.getElementById("button");
    let toggleElements = document.getElementsByClassName("toggle_me");
    button.addEventListener("click", function(){
        Array.from(toggleElements).forEach(function(toggle){
            if(toggle.style.display == "none") {
                toggle.style.display = "flex";
            }
            else {
                toggle.style.display = "none";
            }
        });
    });
});