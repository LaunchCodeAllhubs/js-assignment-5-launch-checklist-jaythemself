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
   values pilot/co-pilot names strings, fuel level/cargo mass numbers. do i need to separate out cargo and fuel and wrap Number(testInput)? come back
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
   cannot use == or === to check NaN. use built in isNaN(value) returns true/false
   double check and make sure instructions don't care if i address alert in above function or in this one*/
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
    /*ik brain is fried rn but there has to be a better way to write this ^^^^. might need to expand it and iterate through instead of trying to 
    write as little code as possible, sometimes less does not mean most concise*/
   }
   
   if (userAlert !== "") {
    alert(userAlert);
    return;
   };

   /*Do i need to be more specific for Inputs/use key words? double check instructions <--instructions do not specify. maybe check grading specs to 
   be extra safe?*/
   let fuelInput;
   if (fuelLevel >= 10000) {
    fuelInput = "acceptable fuel levels";
   } else {
    fuelInput = "fuel too low";
   };

   let cargoInput;
   if (cargoMass <= 10000) {
    cargoInput = "acceptable cargo weight";
   } else {
    cargoInput = "cargo too heavy";
   };

   /*write document portion (let xStatus = document.getElementById i think? double check dot notation and finish validating*/
}

/*Rest of book instructions for this section:
update the li elements pilotStatus and copilotStatus to include the pilot's name and the co-pilot's name.
If the user submits a fuel level that is too low (less than 10,000 liters), change faultyItems to visible with an updated fuel status stating that 
    there is not enough fuel for the journey. The text of the h2 element, launchStatus, should also change to "Shuttle not ready for launch" and the 
    color should change to red.
If the user submits a cargo mass that is too large (more than 10,000 kilograms), change the list to visible with an updated cargo status stating 
    that there is too much mass for the shuttle to take off. The text of launchStatus should also change to "Shuttle not ready for launch" and 
    the color should change to a particular shade of red, #C7254E
If the shuttle is ready to launch, change the text of launchStatus to a particular shade of green #419F6A and display "Shuttle is ready for launch"*/

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
