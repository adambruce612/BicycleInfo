const bicycleInfo = document.getElementById("bicycle-info");
const bikeSelect = document.getElementById("bike-select");
const trek = document.getElementById("trek");
const stumpjumper = document.getElementById("stumpjumper");
const fatboy = document.getElementById("fatboy");

bikeSelect.addEventListener("change", bikeSelection);

let activeSelection = null;

function bikeSelection(event)
{
    let bicycle = event.target.value;

    if (activeSelection != null)
    {
        activeSelection.classList.add("hidden");
    }

    if (bicycle == "trek") {
        trek.classList.remove("hidden");
        activeSelection = trek;
    } else if (bicycle == "stumpjumper") {
        stumpjumper.classList.remove("hidden");
        activeSelection = stumpjumper;
    } else if (bicycle == "fatboy")
    {
        fatboy.classList.remove("hidden");
        activeSelection = fatboy;
    }

    console.log(activeSelection);
}




