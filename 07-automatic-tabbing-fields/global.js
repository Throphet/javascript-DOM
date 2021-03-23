// Your JavaScript goes here.
window.addEventListener("load", function(){
  let first = document.getElementById("first");
  let second = document.getElementById("second");
  let third = document.getElementById("third");

  first.addEventListener("keyup", function(){
    if(first.value.length == first.maxLength) {
      second.focus();
    }
  });
  second.addEventListener("keyup", function(){
    if(second.value.length == second.maxLength) {
      third.focus();
    }
  });
});