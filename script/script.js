const bicycleInfo = document.getElementById("bicycle-info");
const bikeSelect = document.getElementById("bike-select");
const trek = document.getElementById("trek");

console.log(trek);


bikeSelect.addEventListener("change", bikeSelection)

function bikeSelection(event)
{
    let bicycle = event.target.value;
    let bicycleSelected;

    if (bicycle == "trek") {
        trek.className = "visible";
    } else if (bicycle == "stumpjumper") {
        bicycleSelected = stumpjumper;
    }
}




