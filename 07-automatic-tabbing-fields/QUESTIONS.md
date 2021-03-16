# DOM Atomic 07: Automatic Tabbing Fields

## Questions

---

> What are some refactoring techniques you might apply to the provided solution?

Šis paņēmiens der tikai noteikti 3 input logiem, taču tā kā mēs iegūstam telefona numuru pēc formāta xxx-xxx-xxxx, tad papildus input logs nebūtu vajadzīgs, taču ja ir jāizpilda personīgā informācija, kur vajag pārlekt uz vairākiem logiem, varētu izmantot form tagu iekš index.html un iegūt visus input elementus ar document.forms\[index], vai ar document.getElementsByTagName("input") sarakstā.