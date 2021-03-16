window.addEventListener("load", function(){

    let hideButton = document.getElementById("button");
    let hideElements = document.getElementsByClassName("hide_me");
    hideButton.addEventListener("click", function(){

        Array.from(hideElements).forEach(function(hide) {
            hide.style.display = "none";
        });

    });
});