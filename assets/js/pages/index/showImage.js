const inputFile = document.getElementById("inputFile");
const previewContainer = document.getElementById("previewContainer");
const previewImage = document.getElementById("previewImage");

function showImage(event) {
  const reader = new FileReader();
  console.log("Sla");
  reader.addEventListener("load", function (event) {
    previewImage.src = event.target.result;
    previewImage.style.display = "inline-block";
  });
  reader.readAsDataURL(event.target.files[0]);
}

function removeImage() {
  inputFile.value = "";
  previewImage.src = "";
  previewImage.style.display = "none";
}

inputFile.addEventListener("change", showImage, false);
