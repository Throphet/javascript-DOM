# DOM Atomic 02: Hide Many Elements

## Questions

---

> How did you go about selecting the DOM elements to hide? Describe the "contract" for that function.

Ieguvu sarakstu ar elementiem, kuriem 'class' atribūts ir vienāds ar 'hide_me'.
+ document.getElementsByClassName("hide_me")

---

> Describe how you were able to hide each element. Were you able to do it as one operation, or did you use a loop of some kind? Describe the "contracts" that were utilized to accomplish your goal.

 Pārveidoju iegūto elementu sarakstu par Array (masīvu?) lai to varētu ievietot forEach ciklā, no kā ieguvu katru elementu, kuriem mainīju stilu, specifiski display = none.
 + Array.from(hideElements)
