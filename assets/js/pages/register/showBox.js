const registerModal = document.getElementById("registerModal");
const loginModal = document.getElementById("loginModal");
const buttonRegister = document.getElementById("buttonRegister");
const buttonLogin = document.getElementById("buttonLogin");
const modalButtonsClose = document.querySelectorAll(".modal__button--close");

let isModalOpen = false;
let activeModal = null;
let isAnimating = false;

function toggleModal(event) {
  if (isAnimating) return;

  isAnimating = true;
  const requestedModal =
    event.target.id === "buttonRegister" ? registerModal : loginModal;

  if (isModalOpen && activeModal) {
    if (activeModal === requestedModal) {
      closeModal(activeModal);
    } else {
      switchModals(activeModal, requestedModal);
    }
  } else {
    openModal(requestedModal);
  }
}

function openModal(modal) {
  modal.style.display = "flex";
  modal.style.animationName = "showBox";
  modal.firstElementChild.style.animationName = "showFormsBox";

  setTimeout(() => {
    modal.firstElementChild.style.opacity = 1;
    isModalOpen = true;
    activeModal = modal;
    isAnimating = false;
  }, 800);
}

function closeModal(modal) {
  console.log(modal.target);
  modal =
    modal.target?.closest(".modal--register") ??
    modal.target?.closest(".modal--login") ??
    modal;
  modal.style.animationName = "closeBox";
  modal.firstElementChild.style.animationName = "closeFormsBox";
  modal.firstElementChild.style.opacity = 0;

  setTimeout(() => {
    modal.style.display = "none";
    isModalOpen = false;
    activeModal = null;
    isAnimating = false;
  }, 750);
}

function switchModals(currentModal, newModal) {
  currentModal.style.animationName = "closeBox";
  currentModal.firstElementChild.style.animationName = "closeFormsBox";
  currentModal.firstElementChild.style.opacity = 0;

  setTimeout(() => {
    currentModal.style.display = "none";
    openModal(newModal);
  }, 750);
}

buttonRegister.addEventListener("click", toggleModal);
buttonLogin.addEventListener("click", toggleModal);
modalButtonsClose.forEach((element) =>
  element.addEventListener("click", closeModal)
);
