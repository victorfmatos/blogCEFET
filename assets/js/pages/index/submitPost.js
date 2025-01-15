const formTextareaRequired = document.getElementById("postContent");
let validateWordLength = true;

function validatePost() {
  const formTextareaRequiredWords = formTextareaRequired.value.split(" ");
  validateWordLength = formTextareaRequiredWords.some(
    (word) => word.length > 3
  );
  if (formTextareaRequiredWords.length <= 1 || !validateWordLength) {
    setError();
    return false;
  } else {
    removeError();
    return true;
  }
}

function setError() {
  formTextareaRequired.style.border = "2px solid var(--errorColor)";
}

function removeError() {
  formTextareaRequired.style.border = "2px solid var(--darkBlue)";
}
