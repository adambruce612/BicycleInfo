const bicycleInfo = document.getElementById("bicycle-info");

function bicycleSelection()
{
    let bicycle = document.getElementById("bikes").value;
    displayInfo(bicycle);
}

const trek = 
{
    name: "Trek 7.2fx",
    type: "Hybrid",
    color: "Black",
    frame: "FX Alpha Silver Aluminum, DuoTrap S compatible, rack & fender mounts",
    fork: "High-tensile steel w/lowrider mounts, CLIX dropouts"
}


function displayInfo()
{
    bicycleInfo.innerHTML = `<p>${trek.name}</p>`
}