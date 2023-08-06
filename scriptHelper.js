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
   should return "Empty", "Not a Number", "Is a Number"*/
   /*if (testInput === "") {
    return "Empty";
   } else if (!isNaN(testInput)) {
    return "Is a Number";
   } else {
    return "Not a Number";
   }*/
   let numInput = Number(testInput);

   if (testInput === "") {
    return "Empty";
   } else if (isNaN(numInput)) {
    return "Not a Number";
   } else if (isNaN(numInput) === false) {
    return "Is a Number";
   }
   /*by wrapping numInput in Number() isn't it guaranteed that Not a Number will never get triggered, even if user inputs 
   a string? Or would Number(string) come back as undefined? Idr.
   Check back over prev work in replit to refresh memory on how I validated input then, if still doesn't click talk w TA*/
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   /*will take a document parameter and strings rep the 4 reqs. make sure to call in script
   cannot use == or === to check NaN. use built in isNaN(value) returns true/false
   double check and make sure instructions don't care where alert is addressed*/
  let pilotStatus = document.getElementById("pilotStatus");
  let copilotStatus = document.getElementById("copilotStatus");
  let fuel = document.getElementById("fuelStatus");
  let cargo = document.getElementById("cargoStatus");

  if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuel) === "Empty" || validateInput(cargo) === "Empty") {
    alert("All fields of the form must be filled out.");
    /*ik brain is fried rn but there has to be a better way to write this ^^^^. might need to expand it and iterate through instead of trying to 
    write as little code as possible, sometimes less does not mean most concise
    Yeah getting rid of array of valid submission idk where I was going with this i can barely make sense of it and it's been like. a day and a half.
    Just rewrite this whole section more in line w prev validations. maybe rewrite below too it'll be annoying taking leftover scraps and fitting
    it to new stuff. keeping track of variable names my beloathed. Don't code w a migraine kids*/
   } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuel) === "Not a Number" || validateInput(cargo) === "Not a Number") {
    alert("Provided information is invalid, please check your input.");
   } else {
    list.style.visibility = "visible";
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is readt for launch`;
    let launchStatus = document.getElementById("launchStatus");

    /*add function to check values after checking validity? makes most sense to put it there but check instructions. reference prev GA, #3 i think*/
   }
   
   /*
   Do i need to be more specific for Inputs/use key words? double check instructions <--instructions do not specify. maybe check grading specs to 
   be extra safe?
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

   write document portion (let xStatus = document.getElementById i think? double check dot notation and finish validating/user feedback. 
   also innerHTML*/
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
