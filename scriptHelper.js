// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   /*validate if user forgot to enter a value in any field. add alert to notify user all fields required
   make sure info is valid
   pilot/co-pilot names strings, fuel level/cargo mass numbers
   should return "Empty", "Not a Number", "Is a Number"*/
   if (testInput === "") {
    return "Empty";
   } else if (!isNaN(testInput)) {
    return "Is a Number";
   } else {
    return "Not a Number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   /*will take a document parameter and strings rep the 4 reqs. make sure to call in script
   cannot use == or === to check NaN. use built in isNaN(value) returns true/false*/
   let userAlert = "";
   let validArraySubmission = [
    ["Pilot", validateInput(pilot), "Empty"],
    ["Co-pilot", validateInput(copilot), "Empty"],
    ["Fuel Level", validateInput(fuelLevel), "Is a Number"],
    ["Cargo Mass", validateInput(cargoMass), "Is a Number"]
   ];
   /*for loop through array length. if index 1=2 use alert with template literal and warning message (1 for string 1 for number)*/
   for (let i = 0; i < validArraySubmission.length; i++) {
    if (i < 2) {
        if (validArraySubmission[i][1] === validArraySubmission[i][2]) {
            userAlert += `You must provide input for ${validArraySubmission[i][0]}.\n`;
        };
    } else {
        if (validArraySubmission[i][1] !== validArraySubmission[i][2]) {
            userAlert += `${validArraySubmission[i][0]} must be a number.\n`;
        };
    }
   }
   
   if (userAlert !== "") {
    alert(userAlert);
    return;
   };

   /*Do i need to be more specific for Inputs/use key words? double check instructions*/
   let fuelInput;
   if (fuelLevel >= 10000) {
    fuelInput = "acceptable levels";
   } else {
    fuelInput = "fuel too low";
   };

   let cargoInput;
   if (cargoMass <= 10000) {
    cargoInput = "acceptable weight";
   } else {
    cargoInput = "cargo too heavy";
   };

   /*write document portion (let xStatus = document.getElementById i think? double check dot notation and instruction keywords. also double check if co-pilot is copilot or coPilot*/
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
