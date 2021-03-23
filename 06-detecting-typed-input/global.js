// Your JavaScript goes here.
window.addEventListener("load", function(){
  let form = document.getElementById("full_name");
  let output = document.getElementById("greeting");
  form.addEventListener("keyup", function(){
    if(form.value.length > 0) {
      output.textContent = "Labdien, " + form.value + "!";
    }
    else {
      output.textContent = "";
    }
  });
});