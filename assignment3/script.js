// **COMMENTS**

//declaring buttons
//eyes
const eyeSelectionButton = document.getElementById("button-eyes");
const eyeColour1 = document.getElementById("eye-colour-1");
const eyeColour2 = document.getElementById("eye-colour-2");
const eyeColour3 = document.getElementById("eye-colour-3");
const eyeColour4 = document.getElementById("eye-colour-4");
const eyeColour5 = document.getElementById("eye-colour-5");

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
