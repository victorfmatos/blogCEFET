const postContent = document.getElementById("postContent");
const postButton = document.getElementById("postButton");
const postForm = document.getElementById("postForm");
let validateWordLength = true;

function submitPost() {
  postButton.classList.add("submitted");

  setTimeout(() => {
    postButton.classList.remove("submitted");
  }, 2000);

  setTimeout(() => {
    postContent.value = "";
    inputFile.value = "";
    previewImage.src = "";
    previewImage.style.display = "none";
  }, 2250);
}

function validatePost() {
  const formTextareaRequiredWords = postContent.value.split(" ");
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
  postContent.style.border = "2px solid var(--errorColor)";
}

function removeError() {
  postContent.style.border = "2px solid var(--darkBlue)";
}

postForm.addEventListener("submit", (event) => {
  if (validatePost()) {
    submitPost();
  } else {
    event.preventDefault();
  }
});
