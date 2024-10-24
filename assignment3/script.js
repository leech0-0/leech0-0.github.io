// **COMMENTS**

//EYES
const eyeSelectionButton = document.getElementById("button-eyes");
const eyeColour1 = document.getElementById("eye-colour-1");
const eyeColour2 = document.getElementById("eye-colour-2");
const eyeColour3 = document.getElementById("eye-colour-3");
const eyeColour4 = document.getElementById("eye-colour-4");
const eyeColour5 = document.getElementById("eye-colour-5");

eyeSelectionButton.addEventListener("click", selectEyeColourAvailable);

function selectEyeColourAvailable() {
  eyeColour1.style.display = "block"; // all revealed once 'eyes' is clicked on
  eyeColour2.style.display = "block";
  eyeColour3.style.display = "block";
  eyeColour4.style.display = "block";
  eyeColour5.style.display = "block";
}

//allowing for colour to be clicked on to swap the image

//blue eyes selected
const blueEyeSelected = document.getElementById("eyes_blue");

eyeColour1.addEventListener("click", chooseEyeColour1);

function chooseEyeColour1() {
  eyes_blue.style.display = "block";
}

//brown eyes selected
const brownEyeSelected = document.getElementById("eyes_brown");

eyeColour2.addEventListener("click", chooseEyeColour2);

function chooseEyeColour2() {
  eyes_brown.style.display = "block";
}

//green eyes selected
const greenEyeSelected = document.getElementById("eyes_green");

eyeColour3.addEventListener("click", chooseEyeColour3);

function chooseEyeColour3() {
  eyes_green.style.display = "block";
}

//grey eyes selected
const greyEyeSelected = document.getElementById("eyes_grey");

eyeColour4.addEventListener("click", chooseEyeColour4);

function chooseEyeColour4() {
  eyes_grey.style.display = "block";
}

//pastel blue eyes selected
const pastelblueEyeSelected = document.getElementById("eyes_pastelblue");

eyeColour5.addEventListener("click", chooseEyeColour5);

function chooseEyeColour5() {
  eyes_pastelblue.style.display = "block";
}

// //HAIR
const hairSelectionButton = document.getElementById("button-hair");
const hairColour1 = document.getElementById("hair-colour-1");
const hairColour2 = document.getElementById("hair-colour-2");
const hairColour3 = document.getElementById("hair-colour-3");
const hairColour4 = document.getElementById("hair-colour-4");
const hairColour5 = document.getElementById("hair-colour-5");

hairSelectionButton.addEventListener("click", selectHairColourAvailable);

function selectHairColourAvailable() {
  hairColour1.style.display = "block"; // all revealed once 'hair' is clicked on
  hairColour2.style.display = "block";
  hairColour3.style.display = "block";
  hairColour4.style.display = "block";
  hairColour5.style.display = "block";
}

// //blonde hair selected
const blondeHairSelected = document.getElementById("blonde-hair");

hairColour1.addEventListener("click", chooseHairColour1);

function chooseHairColour1() {
  blondeHairSelected.style.display = "block";
}

// //brown hair selected
const brownHairSelected = document.getElementById("brown-hair");

hairColour2.addEventListener("click", chooseHairColour2);

function chooseHairColour2() {
  brownHairSelected.style.display = "block";
}

// //green hair selected
const greenHairSelected = document.getElementById("green-hair");

hairColour3.addEventListener("click", chooseHairColour3);

function chooseHairColour3() {
  greenHairSelected.style.display = "block";
}

// //purple hair selected
const purpleHairSelected = document.getElementById("purple-hair");

hairColour4.addEventListener("click", chooseHairColour4);

function chooseHairColour4() {
  purpleHairSelected.style.display = "block";
}

// //red hair selected
const redHairSelected = document.getElementById("red-hair");

hairColour5.addEventListener("click", chooseHairColour5);

function chooseHairColour5() {
  redHairSelected.style.display = "block";
}
