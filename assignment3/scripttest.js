function loadImage() {
  const selector = document.getElementById("imageSelector");
  const imageUrl = selector.value;
  const imageContainer = document.getElementById("imageContainer");

  // Clear previous image
  imageContainer.innerHTML = "";

  // If an image is selected, create an img element and set its src
  if (imageUrl) {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = "Selected Image";
    imageContainer.appendChild(img);
  }
}
