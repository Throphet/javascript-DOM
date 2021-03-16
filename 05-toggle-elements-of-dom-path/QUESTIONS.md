# DOM Atomic 05: Toggle Elements of DOM Path

## Questions

---

> Describe the contract you used for finding the movies to toggle in the DOM. How is this function different from other functions that find elements in the DOM?

Es neieguvu pašus elementus uzreiz, bet gan sākumā ieguvu to parent (vecāku?) elementu. No tā es varēju piekļūt visiem parent children (vecāku bērniem?).
+ document.getElementsByClassName("second_five")[0].children;