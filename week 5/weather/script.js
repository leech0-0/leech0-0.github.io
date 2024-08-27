function checkWeather() {
  let temp = document.querySelector("#temp");
  let body = document.querySelector("body");
  let outer = document.querySelector(".outer");
  console.log(temp);
  if (temp.value >= 40) {
    console.log("It is burning hot");
    body.style.backgroundColor = "crimson";
    outer.style.borderColor = "teal";
  } else if (temp.value < 40 && temp.value >= 30) {
    console.log("It is sunny and warm");
    body.style.backgroundColor = "limegreen";
    outer.style.borderColor = "peach";
  } else if (temp.value < 30 && temp.value >= 10) {
    console.log("It is a pleasant weather");
    body.style.backgroundColor = "aqua";
    outer.style.borderColor = "lilac";
  } else {
    console.log("It is freezing cold");
    body.style.backgroundColor = "grey";
    outer.style.borderColor = "coral";
  }
}

//temp,body and outer - responding to html and css docs
