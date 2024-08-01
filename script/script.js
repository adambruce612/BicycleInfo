const bicycleInfo = document.getElementById("bicycle-info");
const bikeSelect = document.getElementById("bike-select");
const trek = document.getElementById("trek");
const stumpjumper = document.getElementById("stumpjumper");

let activeSelection;

bikeSelect.addEventListener("change", bikeSelection)

function bikeSelection(event)
{
    let bicycle = event.target.value;
    let bicycleSelected;

    if (bicycle == "trek") {
        trek.classList.remove("hidden");
    } else if (bicycle == "stumpjumper") {
        stumpjumper.classList.remove("hidden");
    }
}




