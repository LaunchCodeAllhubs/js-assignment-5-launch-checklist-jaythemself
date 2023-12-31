//DRY scriptHelper: maybe valid/invalidForm vars that hold launchStatus/color/list visibility? can formSub be more concise?
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  //UX display of randomly selected planet used in script.js event handler (listed planets section)
  let missionTarget = document.getElementById("missionTarget");
  missionTarget.innerHTML = `
               <h2>Mission Destination</h2>
               <ol>
                   <li>Name: ${name}</li>
                   <li>Diameter: ${diameter}</li>
                   <li>Star: ${star}</li>
                   <li>Distance from Earth: ${distance} </li>
                   <li>Number of Moons: ${moons}</li>
               </ol>
               <img src="${imageUrl}">
               `;
}

//make validateInput and formSubmission code more dry. !validForm = visibility, Shuttle Not Ready, red?
function validateInput(testInput) {
 //testing to make sure user input isn't empty/not filled out and that appropriate fields are a string or a number
   if (testInput === "") {
    return "Empty";
   } else if (isNaN(testInput)) {
    return "Not a Number";
   } else if (!isNaN(testInput)) {
    return "Is a Number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
 //creating variables for innerHTML dot notation and sending up alerts if validateInput results were unwanted
  let pilotStatus = document.getElementById("pilotStatus");
  let copilotStatus = document.getElementById("copilotStatus");
  let fuelStatus = document.getElementById("fuelStatus");
  let cargoStatus = document.getElementById("cargoStatus");
  let launchStatus = document.getElementById("launchStatus");
  
  if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty") {
    window.alert("All fields of the form must be filled out.");
    list.style.visibility = "hidden";
   } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoMass) === "Not a Number") {
    window.alert("Provided information is invalid, please check your input.");
    list.style.visibility = "visible";
   } else {
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    list.style.visibility = "visible";
   }
   //adjusting innerHTML for specific feedback on what is wrong, adjusting display of results for user
   if (fuelLevel <= 10000 && cargoMass >= 10000) {
    fuelStatus.innerHTML = "Fuel level too low for launch";
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    launchStatus.style.color = "rgb(199, 37, 78)";
    list.style.visibility = "visible";
   } else if (fuelLevel <= 10000 && cargoMass < 10000) {
    fuelStatus.innerHTML = "Fuel level too low for launch";
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    launchStatus.style.color = "rgb(199, 37, 78)";
    list.style.visibility = "visible";
   } else if (fuelLevel > 10000 && cargoMass >= 10000) {
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    launchStatus.style.color = "rgb(199, 37, 78)";
    list.style.visibility = "visible";
   } else {
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
    launchStatus.innerHTML = "Shuttle is Ready for Launch";
    launchStatus.style.color = "rgb(65, 159, 106)";
    list.style.visibility = "visible";
   }
}

async function myFetch() {
  //fetching planet list from api provided in read me
  let planetsReturned;
  planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      return response.json();
      });
  return planetsReturned;
}

function pickPlanet(planets) {
 //selecting a random planet from provided planet list
   return planets[Math.floor(Math.random() * planets.length)];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;