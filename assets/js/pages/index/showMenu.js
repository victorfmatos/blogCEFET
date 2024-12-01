let header__nav = document.getElementById("header__nav");
let header__menu_close = document.getElementById("header__menu-close");
let showSideBar = false;
let lastPosition = 0;

function toggleSidebar() {
  showSideBar = !showSideBar;
  if (showSideBar) {
    header__nav.style.right = "0";
    header__nav.style.animationName = "showSidebar";
    header__menu_close.style.filter = "blur(2px)";
    showSideBar = true;
  } else {
    header__nav.style.right = "-50vw";
    header__nav.style.animationName = "closeSidebar";
    header__menu_close.style.filter = "";
    showSideBar = false;
  }
}

function closeSidebar() {
  if (showSideBar) {
    toggleSidebar();
  }
}

function detectScrollDown() {
  let atualPosicao = window.scrollY;

  if (atualPosicao > lastPosition) {
    closeSidebar();
  }

  lastPosition = atualPosicao;
}

window.addEventListener("scroll", detectScrollDown, false);
