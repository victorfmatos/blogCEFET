let registerModal = document.getElementById("registerModal");
let buttonRegister = document.getElementById("buttonRegister");
let showRegisterBox = false;

function toggleRegisterBox() {
  showRegisterBox = !showRegisterBox;
  buttonRegister.removeEventListener("click", toggleRegisterBox);
  if (showRegisterBox) {
    registerModal.style.display = "flex";
    registerModal.style.animationName = "showRegisterBox";
    registerModal.firstElementChild.style.animationName = "showFormsBox";
    setTimeout(() => {
      registerModal.firstElementChild.style.opacity = 1;
      buttonRegister.addEventListener("click", toggleRegisterBox);
    }, 1000);
    showRegisterBox = true;
  } else {
    registerModal.style.animationName = "closeRegisterBox";
    registerModal.firstElementChild.style.animationName = "closeFormsBox";
    registerModal.firstElementChild.style.opacity = 0;
    setTimeout(() => {
      registerModal.style.display = "none";
      buttonRegister.addEventListener("click", toggleRegisterBox);
    }, 750);
    showRegisterBox = false;
  }
}

function closeRegisterBox() {
  if (showRegisterBox) {
    toggleRegisterBox();
  }
}

buttonRegister.addEventListener("click", toggleRegisterBox);
