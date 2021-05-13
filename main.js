const toggleAction = document.querySelector(".nav__toggle");
const menu = document.querySelector(".nav__menu");
const sns = document.querySelector(".nav__sns");

toggleAction.addEventListener("click", () => {
  menu.classList.toggle("active");
  sns.classList.toggle("active");
});
