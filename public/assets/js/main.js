window.onload = function () {
  window.addEventListener("scroll", function (e) {
    if (window.pageYOffset > 100) {
      document.querySelector("header").classList.add("is-scrolling");
    } else {
      document.querySelector("header").classList.remove("is-scrolling");
    }
  });

  const menu__btn = document.querySelector(".header__hamburger");
  const mobile__menu = document.querySelector(".header__nav--mobile");

  menu__btn.addEventListener("click", function () {
    menu__btn.classList.toggle("header__hamburger--is-active");
    mobile__menu.classList.toggle("header__hamburger--is-active");
  });
};
