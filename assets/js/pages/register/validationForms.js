let registerForm = document.getElementById("registerForm");
let formInputsRequired = document.getElementsByClassName(
  "form__input--required"
);
let registerButton = document.getElementById("registerButton");
let registerText = document.getElementById("registerText");
let registerIcon = document.getElementById("registerIcon");
let toggleRegisterButton = false;

function submitRegisterButton() {
  toggleRegisterButton = !toggleRegisterButton;
  if (toggleRegisterButton) {
    registerText.style.animationName = "hideRegisterButton";
    setTimeout(() => {
      registerText.style.display = "none";
      registerIcon.style.animationName = "submitRegisterButton";
      registerIcon.style.display = "inline-block";
      registerButton.style.color = "var(--darkBlue)";
      registerButton.style.backgroundColor = "var(--white)";
      registerButton.removeChild(registerText);
    }, 250);
    setTimeout(() => {
      registerIcon.style.opacity = 1;
    }, 750);
  }
}

function setError(index) {
  formInputsRequired[index].style.border = "2px solid var(--errorColor)";
}

function removeError(index) {
  formInputsRequired[index].style.border = "2px solid var(--lightBlue)";
}

registerForm.addEventListener("submit", (event) => {
  if (false) {
    submitRegisterButton();
  } else {
    event.preventDefault();
  }
});
