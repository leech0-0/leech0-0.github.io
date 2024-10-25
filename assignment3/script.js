// **COMMENTS**

//declaring buttons
//eyes
const eyeSelectionButton = document.getElementById("button-eyes");
const eyeColour1 = document.getElementById("eye-colour-1");
const eyeColour2 = document.getElementById("eye-colour-2");
const eyeColour3 = document.getElementById("eye-colour-3");
const eyeColour4 = document.getElementById("eye-colour-4");
const eyeColour5 = document.getElementById("eye-colour-5");

//hair
const hairSelectionButton = document.getElementById("button-hair");
const hairColour1 = document.getElementById("hair-colour-1");
const hairColour2 = document.getElementById("hair-colour-2");
const hairColour3 = document.getElementById("hair-colour-3");
const hairColour4 = document.getElementById("hair-colour-4");
const hairColour5 = document.getElementById("hair-colour-5");

//skin
const skinSelectionButton = document.getElementById("button-skin");
const skinColour1 = document.getElementById("skin-colour-1");
const skinColour2 = document.getElementById("skin-colour-2");
const skinColour3 = document.getElementById("skin-colour-3");
const skinColour4 = document.getElementById("skin-colour-4");
const skinColour5 = document.getElementById("skin-colour-5");

//hat
const hatSelectionButton = document.getElementById("button-hat");
const hatColour1 = document.getElementById("hat-colour-1");
const hatColour2 = document.getElementById("hat-colour-2");
const hatColour3 = document.getElementById("hat-colour-3");
const hatColour4 = document.getElementById("hat-colour-4");
const hatColour5 = document.getElementById("hat-colour-5");

//shirt
const shirtSelectionButton = document.getElementById("button-shirt");
const shirtColour1 = document.getElementById("shirt-colour-1");
const shirtColour2 = document.getElementById("shirt-colour-2");
const shirtColour3 = document.getElementById("shirt-colour-3");
const shirtColour4 = document.getElementById("shirt-colour-4");
const shirtColour5 = document.getElementById("shirt-colour-5");

//piercings
const piercingsSelectionButton = document.getElementById("button-piercings");
const piercingsColour1 = document.getElementById("piercings-colour-1");
const piercingsColour2 = document.getElementById("piercings-colour-2");

//function - making options available

//eyes
eyeSelectionButton.addEventListener("click", selectEyeColourAvailable);

function selectEyeColourAvailable() {
  eyeColour1.style.display = "block"; // all revealed once 'eyes' is clicked on
  eyeColour2.style.display = "block";
  eyeColour3.style.display = "block";
  eyeColour4.style.display = "block";
  eyeColour5.style.display = "block";

  //making all others invisible
  hairColour1.style.display = "none";
  hairColour2.style.display = "none";
  hairColour3.style.display = "none";
  hairColour4.style.display = "none";
  hairColour5.style.display = "none";

  skinColour1.style.display = "none";
  skinColour2.style.display = "none";
  skinColour3.style.display = "none";
  skinColour4.style.display = "none";
  skinColour5.style.display = "none";

  hatColour1.style.display = "none";
  hatColour2.style.display = "none";
  hatColour3.style.display = "none";
  hatColour4.style.display = "none";
  hatColour5.style.display = "none";

  piercingsColour1.style.display = "none";
  piercingsColour2.style.display = "none";

  shirtColour1.style.display = "none";
  shirtColour2.style.display = "none";
  shirtColour3.style.display = "none";
  shirtColour4.style.display = "none";
  shirtColour5.style.display = "none";
}

//hair
hairSelectionButton.addEventListener("click", selectHairColourAvailable);

function selectHairColourAvailable() {
  hairColour1.style.display = "block"; // all revealed once 'hair' is clicked on
  hairColour2.style.display = "block";
  hairColour3.style.display = "block";
  hairColour4.style.display = "block";
  hairColour5.style.display = "block";

  //making all others invisible
  eyeColour1.style.display = "none";
  eyeColour2.style.display = "none";
  eyeColour3.style.display = "none";
  eyeColour4.style.display = "none";
  eyeColour5.style.display = "none";

  skinColour1.style.display = "none";
  skinColour2.style.display = "none";
  skinColour3.style.display = "none";
  skinColour4.style.display = "none";
  skinColour5.style.display = "none";

  hatColour1.style.display = "none";
  hatColour2.style.display = "none";
  hatColour3.style.display = "none";
  hatColour4.style.display = "none";
  hatColour5.style.display = "none";

  piercingsColour1.style.display = "none";
  piercingsColour2.style.display = "none";

  shirtColour1.style.display = "none";
  shirtColour2.style.display = "none";
  shirtColour3.style.display = "none";
  shirtColour4.style.display = "none";
  shirtColour5.style.display = "none";
}

//Skin
skinSelectionButton.addEventListener("click", selectSkinColourAvailable);

function selectSkinColourAvailable() {
  skinColour1.style.display = "block"; // all revealed once 'skin' is clicked on
  skinColour2.style.display = "block";
  skinColour3.style.display = "block";
  skinColour4.style.display = "block";
  skinColour5.style.display = "block";

  //making all others invisible
  eyeColour1.style.display = "none";
  eyeColour2.style.display = "none";
  eyeColour3.style.display = "none";
  eyeColour4.style.display = "none";
  eyeColour5.style.display = "none";

  hairColour1.style.display = "none";
  hairColour2.style.display = "none";
  hairColour3.style.display = "none";
  hairColour4.style.display = "none";
  hairColour5.style.display = "none";

  hatColour1.style.display = "none";
  hatColour2.style.display = "none";
  hatColour3.style.display = "none";
  hatColour4.style.display = "none";
  hatColour5.style.display = "none";

  piercingsColour1.style.display = "none";
  piercingsColour2.style.display = "none";

  shirtColour1.style.display = "none";
  shirtColour2.style.display = "none";
  shirtColour3.style.display = "none";
  shirtColour4.style.display = "none";
  shirtColour5.style.display = "none";
}

//HAT
hatSelectionButton.addEventListener("click", selectHatColourAvailable);

function selectHatColourAvailable() {
  hatColour1.style.display = "block"; // all revealed once 'hat' is clicked on
  hatColour2.style.display = "block";
  hatColour3.style.display = "block";
  hatColour4.style.display = "block";
  hatColour5.style.display = "block";

  //making all others invisible
  eyeColour1.style.display = "none";
  eyeColour2.style.display = "none";
  eyeColour3.style.display = "none";
  eyeColour4.style.display = "none";
  eyeColour5.style.display = "none";

  hairColour1.style.display = "none";
  hairColour2.style.display = "none";
  hairColour3.style.display = "none";
  hairColour4.style.display = "none";
  hairColour5.style.display = "none";

  skinColour1.style.display = "none";
  skinColour2.style.display = "none";
  skinColour3.style.display = "none";
  skinColour4.style.display = "none";
  skinColour5.style.display = "none";

  piercingsColour1.style.display = "none";
  piercingsColour2.style.display = "none";

  shirtColour1.style.display = "none";
  shirtColour2.style.display = "none";
  shirtColour3.style.display = "none";
  shirtColour4.style.display = "none";
  shirtColour5.style.display = "none";
}

// PIERCINGS
piercingsSelectionButton.addEventListener(
  "click",
  selectPiercingsColourAvailable
);

function selectPiercingsColourAvailable() {
  piercingsColour1.style.display = "block"; // all revealed once 'piercing' is clicked on
  piercingsColour2.style.display = "block";

  //making all others invisible
  eyeColour1.style.display = "none";
  eyeColour2.style.display = "none";
  eyeColour3.style.display = "none";
  eyeColour4.style.display = "none";
  eyeColour5.style.display = "none";

  hairColour1.style.display = "none";
  hairColour2.style.display = "none";
  hairColour3.style.display = "none";
  hairColour4.style.display = "none";
  hairColour5.style.display = "none";

  skinColour1.style.display = "none";
  skinColour2.style.display = "none";
  skinColour3.style.display = "none";
  skinColour4.style.display = "none";
  skinColour5.style.display = "none";

  hatColour1.style.display = "none";
  hatColour2.style.display = "none";
  hatColour3.style.display = "none";
  hatColour4.style.display = "none";
  hatColour5.style.display = "none";

  shirtColour1.style.display = "none";
  shirtColour2.style.display = "none";
  shirtColour3.style.display = "none";
  shirtColour4.style.display = "none";
  shirtColour5.style.display = "none";
}

//SHIRT
shirtSelectionButton.addEventListener("click", selectShirtColourAvailable);

function selectShirtColourAvailable() {
  shirtColour1.style.display = "block"; // all revealed once 'shirt' is clicked on
  shirtColour2.style.display = "block";
  shirtColour3.style.display = "block";
  shirtColour4.style.display = "block";
  shirtColour5.style.display = "block";

  //making all others invisible
  eyeColour1.style.display = "none";
  eyeColour2.style.display = "none";
  eyeColour3.style.display = "none";
  eyeColour4.style.display = "none";
  eyeColour5.style.display = "none";

  hairColour1.style.display = "none";
  hairColour2.style.display = "none";
  hairColour3.style.display = "none";
  hairColour4.style.display = "none";
  hairColour5.style.display = "none";

  skinColour1.style.display = "none";
  skinColour2.style.display = "none";
  skinColour3.style.display = "none";
  skinColour4.style.display = "none";
  skinColour5.style.display = "none";

  hatColour1.style.display = "none";
  hatColour2.style.display = "none";
  hatColour3.style.display = "none";
  hatColour4.style.display = "none";
  hatColour5.style.display = "none";

  piercingsColour1.style.display = "none";
  piercingsColour2.style.display = "none";
}

//RESET BUTTON
const resetButton = document.getElementById("reset");
const resetButtonTesting = document.getElementById("reset-test");
resetButton.addEventListener("click", resetworking);

function resetworking() {
  eyeColour1.style.display = "block"; //tester - replace
}

//allowing for colour to be clicked on to swap the image

//EYES
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

//HAIR

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

//SKIN FUNCTIONS

//HAT FUNCTIONS

//SHIRT FUNCTIONS

//PIERCING FUNCTIONS
