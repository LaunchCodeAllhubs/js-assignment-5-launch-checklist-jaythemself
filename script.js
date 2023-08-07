// Write your JavaScript code here!

window.addEventListener("load", function() {
 //putting together helper.js functions. listed planets uses myFetch to access provided api of full list, then selects one at random with pickPlanet
 let listedPlanets;
 let listedPlanetsResponse = myFetch();
 listedPlanetsResponse.then(function (result) {
     listedPlanets = result;
     console.log(listedPlanets);
     let selectedPlanet = pickPlanet(listedPlanets);
     console.log(selectedPlanet);
     addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);
 });

 let submitButton = document.getElementById("formSubmission");
 //preventing page from automatically reloading after input, setting up values to use when invoking formSubmission dot notation line 27
 //still unsure when/where i should be using const vs let? if i use const will user's later attempts not be ignored??
 submitButton.addEventListener("click", function (event) {
     event.preventDefault();
     let pilotInput = document.getElementById("pilotName");
     let copilotInput = document.getElementById("copilotName");
     let fuelInput = document.getElementById("fuelLevel");
     let cargoInput = document.getElementById("cargoMass");

     let list = document.getElementById("faultyItems");

     formSubmission(document, list, pilotInput.value, copilotInput.value, fuelInput.value, cargoInput.value);
 });
});