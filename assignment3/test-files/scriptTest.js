//eyes
const eyeSelectionButton = document.getElementById("button-eyes");
const eyeColour1 = document.getElementById("eye-colour-1");
const eyeColour2 = document.getElementById("eye-colour-2");
const eyeColour3 = document.getElementById("eye-colour-3");
const eyeColour4 = document.getElementById("eye-colour-4");
const eyeColour5 = document.getElementById("eye-colour-5");

//function - making the buttons visible
//eyes
eyeSelectionButton.addEventListener("click", selectEyeColourAvailable);

function selectEyeColourAvailable() {
  eyeColour1.style.display = "block"; // all revealed once 'eyes' is clicked on
  eyeColour2.style.display = "block";
  eyeColour3.style.display = "block";
  eyeColour4.style.display = "block";
  eyeColour5.style.display = "block";
}

//declaring the other variables
const blueEyeSelected = document.getElementById("eyes_blue");
const brownEyeSelected = document.getElementById("eyes_brown");
const greenEyeSelected = document.getElementById("eyes_green");
const greyEyeSelected = document.getElementById("eyes_grey");
const pastelblueEyeSelected = document.getElementById("eyes_pastelblue");

eyeColour1.addEventListener("click", function chooseEyeColour1() {
  blueEyeSelected.style.display = "block";
});

eyeColour2.addEventListener("click", function chooseEyeColour2() {
  brownEyeSelected.style.display = "block";
});

eyeColour3.addEventListener("click", function chooseEyeColour3() {
  greenEyeSelected.style.display = "block";
});

eyeColour4.addEventListener("click", function chooseEyeColour4() {
  greyEyeSelected.style.display = "block";
});

eyeColour5.addEventListener("click", function chooseEyeColour5() {
  pastelblueEyeSelected.style.display = "block";
});
