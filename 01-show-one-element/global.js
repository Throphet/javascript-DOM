window.addEventListener("load", function(){
  // 1. Get the DOM element which will be clicked.
  let showMore = document.getElementById("more_text_link");
  
  // 2. Add a listener for the 'click' event onto that element.
  showMore.addEventListener("click", function(){
  
    // 3. The block for the listener should get the DOM
    //    element containing the text to reveal.
    let showMoreText = document.getElementById("more_text_content");
    
    // 4. Modify that DOM element's style to change it's 'display'
    //    from a hidden value to a shown value.
    if(showMoreText.style.display == "none") 
    {
      showMoreText.style.display = "inline";
      showMore.textContent = "Less...";
    }
    
    // 5. Also modify the DOM to hide the "More info..." link.
    else {
      showMoreText.style.display = "none";
      showMore.textContent = "More...";
    }
      
  });
});