var header = document.getElementById("header");
var navigationHeader = document.getElementById("navigationHeader");
var asideBarButtons = document.querySelectorAll(".asideBar > button");
var mobileContent = document.getElementById("mobileContent");
var showSideBar = false;
var lastPosition = 0;

function toggleSidebar() {
  showSideBar = !showSideBar;
  if (showSideBar) {
    navigationHeader.style.right = "0";
    navigationHeader.style.animationName = "showSidebar";
    mobileContent.style.filter = "blur(2px)";
    showSideBar = true;
  } else {
    navigationHeader.style.right = "-50vw";
    navigationHeader.style.animationName = "closeSidebar";
    mobileContent.style.filter = "";
    showSideBar = false;
  }
}

function closeSidebar() {
  if (showSideBar) {
    toggleSidebar();
  }
}

function scrollDown() {
  var atualPosicao = window.scrollY;

  if (atualPosicao > lastPosition) {
    closeSidebar();
  }

  lastPosition = atualPosicao;
}

window.addEventListener("scroll", scrollDown, false);
