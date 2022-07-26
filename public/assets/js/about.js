const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header__list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

let lists = document.querySelectorAll("li");

lists.forEach(element => {
  list.addEventListener("click", () => {
    lists.forEach(lst=>lst.classList.remove("active"))
    this.clasList.add("active");
  })
})