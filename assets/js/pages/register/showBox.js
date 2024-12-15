let registerModal = document.getElementById("registerModal");
let showRegisterBox = false;

function toggleRegisterBox() {
  showRegisterBox = !showRegisterBox;
  if (showRegisterBox) {
    registerModal.style.display = "flex";
    registerModal.style.animationName = "showRegisterBox";
    registerModal.firstElementChild.style.animationName = "showFormsBox";
    setTimeout(() => {
      registerModal.firstElementChild.style.opacity = 1;
    }, 1000);
    showRegisterBox = true;
  } else {
    registerModal.style.animationName = "closeRegisterBox";
    registerModal.firstElementChild.style.animationName = "closeFormsBox";
    registerModal.firstElementChild.style.opacity = 0;
    setTimeout(() => {
      registerModal.style.display = "none";
    }, 750);
    showRegisterBox = false;
  }
}

function closeRegisterBox() {
  if (showRegisterBox) {
    toggleRegisterBox();
  }
}
