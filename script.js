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
    //separated out event handlers so "load" and "submit" aren't tied together (was getting errors where submit button was frozen)
    uponFormSubmit();
});

function uponFormSubmit() {
    //bringing in vars to use in form submission
    //list hidden initially so user doesn't get shuttle info before inputting anything at all
    const formSubmit = document.getElementById("formSubmit");
    const list = document.getElementById("faultyItems");
    list.style.visibility = "hidden";

    let pilotName = document.querySelector("input[name=pilotName]")
    let copilotName = document.querySelector("input[name=copilotName]")
    let fuelLevel = document.querySelector("input[name=fuelLevel]")
    let cargoMass = document.querySelector("input[name=cargoMass]")

    formSubmit.addEventListener("click", function(event) {
        //preventing page from automatically reloading after input, setting up values to use when invoking formSubmission
        //waits for specified input before taking next action (submitting the form and not refreshing the page)
        event.preventDefault();
        formSubmission(document, list, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value)
    })
}