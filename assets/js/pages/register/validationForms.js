let registerForm = document.getElementById("registerForm");
let formInputsRequired = document.getElementsByClassName(
  "form__input--required"
);
let registerButton = document.getElementById("registerButton");
let registerText = document.getElementById("registerText");
let registerIcon = document.getElementById("registerIcon");
let toggleRegisterButton = false;
let validateSentForm = false;
const emailRegex = /^\w+([-+.']\w+)*@aluno.cefet-rj.br|@cefet-rj.br/;

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
  return false;
}

function validateUsername() {
  if (formInputsRequired[0].value.length < 3) {
    setError(0);
    return false;
  } else {
    removeError(0);
    return true;
  }
}

function validateEmail() {
  if (!emailRegex.test(formInputsRequired[1].value)) {
    setError(1);
    return false;
  } else {
    removeError(1);
    return true;
  }
}

function validateMainPassword() {
  if (formInputsRequired[2].value.length < 8) {
    setError(2);
    return false;
  } else {
    removeError(2);
    validateConfirmPassword();
    return true;
  }
}

function validateConfirmPassword() {
  if (
    !(formInputsRequired[2].value == formInputsRequired[3].value) ||
    formInputsRequired[3].value.length < 8
  ) {
    setError(3);
    return false;
  } else {
    removeError(3);
    return true;
  }
}

function setError(index) {
  formInputsRequired[index].style.border = "2px solid var(--errorColor)";
}

function removeError(index) {
  formInputsRequired[index].style.border = "2px solid var(--darkBlue)";
}

registerForm.addEventListener("submit", (event) => {
  if (
    validateUsername() &&
    validateEmail() &&
    validateMainPassword() &&
    validateConfirmPassword() &&
    !validateSentForm
  ) {
    submitRegisterButton();
    validateSentForm = true;
  } else {
    event.preventDefault();
  }
});
