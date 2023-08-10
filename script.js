//still unsure when/where i should be using const vs let? if i use const will user's later attempts not be overwritten w first input?
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
    //call function here that includes second event handler instead of putting the event handler inside?? can't think of another
    //reason why it would keep refreshing page on submission/refusing to clock submit button as a button
    //okay no still refreshing page on submission. lot of elements coming up null or void??
    uponFormSubmit();
});

function uponFormSubmit() {
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
        //why not working when placed outside the first event handler? why breaking if form called formSubmit like index?
        //okay it's still saying null and void in places but now the test webpage is functioning correctly soooo????
        event.preventDefault();
        formSubmission(document, list, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value)
    })
}

   
    

