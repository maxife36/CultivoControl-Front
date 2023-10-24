const sectionSelector = document.querySelector("#section-selector")

sectionSelector.addEventListener("change", () => {
    const sectionSelectorValue = sectionSelector.value
    const sectionSelectorText = sectionSelector[sectionSelectorValue].text
    console.log(sectionSelectorText);

    if (sectionSelectorText === "Mediciones") window.location.href = "/mediciones";
    if (sectionSelectorText === "Agregados") window.location.href = "/agregados";

})


const submitButton = document.querySelector("#btn-submit");


submitButton.addEventListener("click", (event) => {
event.preventDefault()
console.log(this);
/*     const MeasureInputs = document.querySelectorAll("input[type='number']")
    const CheckBoxInputs = document.querySelectorAll("input[type='checkbox']")
    const NoteInput = document.querySelector("#inp-observaciones")

    const measureKeys = [...MeasureInputs].map(el => el.name)
    const measureValues = [...MeasureInputs].map(el => Number(el.value))
    const checkboxKeys = [...CheckBoxInputs].map(el => el.name)
    const checkboxValues = [...CheckBoxInputs].map(el => el.checked)
    const noteKey = NoteInput.name
    const noteValue = NoteInput.value



  let measureData = {horasDeLuz:}

    measureKeys.forEach((el,index) =>{
        if(el != horasDeLuz ){
            measureData[el] = measureValues[index]
        }else{
            measureValues[index] === horasLuzPredetermiando
        }
    })
    checkboxKeys.forEach((el,index) => measureData[el] = checkboxValues[index] )
    measureData[noteKey] = noteValue  */
})
