let navigationHeader = document.getElementById("navigationHeader");
let overlay = document.getElementById("overlay");
let showSideBar = false;
let lastPosition = 0;

function toggleSidebar() {
  showSideBar = !showSideBar;
  if (showSideBar) {
    header__navigation.style.right = "0";
    header__navigation.style.animationName = "showSidebar";
    overlay.style.backdropFilter = "blur(2px)";
    overlay.style.animationName = "showSidebarFilter";
    showSideBar = true;
  } else {
    header__navigation.style.right = "-50vw";
    header__navigation.style.animationName = "closeSidebar";
    overlay.style.backdropFilter = "blur(0px)";
    overlay.style.animationName = "closeSidebarFilter";
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
