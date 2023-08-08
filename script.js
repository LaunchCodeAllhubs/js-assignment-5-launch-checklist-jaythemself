//preventing page from automatically reloading after input, setting up values to use when invoking formSubmission dot notation line 27
//still unsure when/where i should be using const vs let? if i use const will user's later attempts not be ignored??
//stack overflow:const myTextbox = document.getElementById("my-textbox");
//                     myTextbox.addEventListener("keydown", checkName, false);

window.addEventListener("load", function () {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        let selectedPlanet = pickPlanet(listedPlanets)
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image)
    })

    let list = document.getElementById("faultyItems")
    list.style.visibility = "hidden"
    let form = document.querySelector("form")

    form.addEventListener("submit", function (event) {
        event.preventDefault()
        let pilotInput = document.querySelector("input[name=pilotName]")
        let pilot = pilotInput.value
        let copilotInput = document.querySelector("input[name=copilotName]")
        let copilot = copilotInput.value
        let fuelInput = document.querySelector("input[name=fuelLevel")
        let fuelLevel = Number(fuelInput.value)
        let cargoInput = document.querySelector("input[name=cargoMass]")
        let cargoLevel = Number(cargoInput.value)

        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)
    })
});