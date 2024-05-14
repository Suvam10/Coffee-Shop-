const nav = document.querySelector(".navigation-wrap");
window.onscroll = () => {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("scroll-on");
  } else {
    nav.classList.remove("scroll-on");
  }
};

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".nav-collapse.collapse");
navBar.forEach((a) => {
  a.addEventListener("click", () => {
    navCollapse.classList.remove("show");
  });
});
