const bicycleInfo = document.getElementById("bicycle-info");
const bikeSelect = document.getElementById("bike-select");

bikeSelect.addEventListener("change", bikeSelection)

function bikeSelection(event)
{
    let bicycle = event.target.value;
    let bicycleSelected;

    if (bicycle == "trek") {
        bicycleSelected = trek;
    } else if (bicycle == "stumpjumper") {
        bicycleSelected = stumpjumper;
    }

    displayInfo(bicycleSelected);
}

function displayInfo(bicycleSelected)
{
    bicycleInfo.innerHTML = `<p>${bicycleSelected.name}</p>`;
}

const trek = {
    name: "Trek 7.2fx",
    type: "Hybrid",
    color: "Black",
    frame: "FX Alpha Silver Aluminum, DuoTrap S compatible, rack & fender mounts",
    fork: "High-tensile steel w/lowrider mounts, CLIX dropouts"
}

const stumpjumper = 
{
    name: "Specialized S-Works Stumpjumper",
    type: "Mountain Bike",
    color: "Black",
    manual: "https://media.specialized.com/support/collateral/Specialized_Owners_Manual_World.pdf"
}