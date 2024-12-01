let displayCredentials = document.getElementById("displayCredentials");
let showRegisterBox = false;

function toggleRegisterBox() {
  showRegisterBox = !showRegisterBox;
  if (showRegisterBox) {
    displayCredentials.style.display = "flex";
    displayCredentials.style.animationName = "showRegisterBox";
    displayCredentials.firstElementChild.style.animationName = "showFormsBox";
    setTimeout(() => {
      displayCredentials.firstElementChild.style.opacity = 1;
    }, 750);
    showRegisterBox = true;
  } else {
    displayCredentials.style.animationName = "closeRegisterBox";
    displayCredentials.firstElementChild.style.animationName = "closeFormsBox";
    displayCredentials.firstElementChild.style.opacity = 0;
    setTimeout(() => {
      displayCredentials.style.display = "none";
    }, 750);
    showRegisterBox = false;
  }
}
