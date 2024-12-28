const inputFile = document.getElementById("inputFile");
const formSubgroup = document.getElementById("previewContainer");
const subgroupImage = document.getElementById("previewImage");

function showImage(event) {
  const reader = new FileReader();
  console.log("Sla");
  reader.addEventListener("load", function (event) {
    subgroupImage.src = event.target.result;
    subgroupImage.style.display = "inline-block";
  });
  reader.readAsDataURL(event.target.files[0]);
}

function removeImage() {
  inputFile.value = "";
  subgroupImage.src = "";
  subgroupImage.style.display = "none";
}

inputFile.addEventListener("change", showImage, false);
