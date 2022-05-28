const burgerMenu = document.getElementsByClassName("header__navs__header-ul__burger-menu")[0]
const rightContainer = document.getElementsByClassName("header__navs__header-ul__nav header__navs__header-ul__nav--right")[0]
const openBtn = document.querySelector("#openBtn")
const closeBtn = document.querySelector("#closeBtn")


function toggleMenu() {
  if (rightContainer.classList.contains("header__navs__header-ul__nav__active")) {
    rightContainer.classList.remove("header__navs__header-ul__nav__active");
    closeBtn.style.display = "none";
    openBtn.style.display = "block";
  } else {
    rightContainer.classList.add("header__navs__header-ul__nav__active");
    closeBtn.style.display = "block";
    openBtn.style.display = "none";
  }
}

burgerMenu.addEventListener("click", toggleMenu);