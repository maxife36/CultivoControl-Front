const sectionSelector = document.querySelector("#section-selector")

sectionSelector.addEventListener("change", () => {
    const sectionSelectorValue = sectionSelector.value
    const sectionSelectorText = sectionSelector[sectionSelectorValue].text
    console.log(sectionSelectorText);

    if (sectionSelectorText === "Mediciones") window.location.href = "/mediciones";
    if (sectionSelectorText === "Agregados") window.location.href = "/agregados";

})



