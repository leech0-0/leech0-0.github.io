document.getElementById("button1").addEventListener("click", function () {
  loadImage(
    "https://i.pinimg.com/474x/a5/ee/0e/a5ee0e6568a56d871750041e73a96584.jpg"
  );
});

document.getElementById("button2").addEventListener("click", function () {
  loadImage(
    "https://i.pinimg.com/474x/fb/a6/db/fba6db3afbdf5e21e3812df539afe19a.jpg"
  );
});

function loadImage(imagePath) {
  const imgElement = document.getElementById("image");
  imgElement.src = imagePath;
  imgElement.style.display = "block"; // Show the image
}
