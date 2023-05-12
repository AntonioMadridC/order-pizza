const toppings = document.getElementById("toppings")
const selectedToppings = []

toppings.addEventListener('change', (event) => {
    console.log(event.target.type)
    if (event.target.type == "checkbox") {
        const value = event.target.value;
        if (event.target.checked) {
            selectedToppings.push(value)
        }
        else {

            const index = selectedToppings.indexOf(value)
            selectedToppings.splice(index, 1);
        }
        let extraToppings = []
        if (selectedToppings.length > 3) {
            for (let index = 3; index < selectedToppings.length; index++) {
                extraToppings.push(selectedToppings[index])
            }
        }
        document.getElementById("extraToppings").innerHTML = extraToppings.join(", ")
        document.getElementById("selectedToppings").innerHTML = selectedToppings.join(", ")
        document.getElementById("costExtra").innerHTML = `$${(extraToppings.length * 800).toLocaleString('es-CL')}`
    }
})

const tipInput = document.getElementById("tipInput")
const tipText = document.getElementById("tip")
var tip = ""
tipInput.addEventListener("focusin", (event) => {
    if (tip === "") {
        tip = 1000
        tipText.innerHTML = `$${tip.toLocaleString('es-CL')}`
    }
});

tipInput.addEventListener("focusout", (event) => {
    if (tipInput.value != "") {
        tip = parseInt(tipInput.value)
        tipText.innerHTML = `$${tip.toLocaleString('es-CL')}`
    }
});

const sendTip = document.getElementById("sendTip")
sendTip.addEventListener("click", (event) => {
    if (tip === "") {
        alert("Aún no ha definido una propina")
    } else {
        alert(`su propina de $${tip.toLocaleString('es-CL')} ha sido enviada`)
    }
});