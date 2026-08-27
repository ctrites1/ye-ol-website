const nav = document.querySelector(".navigation");
const hamburger = document.querySelector("#hamburger-toggle");
const menu = document.querySelector("#menu");

const changeVisibility = () => {
  menu.style.visibility = hamburger.checked ? "visible" : "hidden";
};

const updateHamburgerARIA = () => {
  hamburger.setAttribute("aria-expanded", hamburger.checked ? "true" : "false");
  menu.setAttribute("aria-hidden", !hamburger.checked ? "true" : "false");
};

hamburger.addEventListener("change", changeVisibility);
hamburger.addEventListener("change", updateHamburgerARIA);

window.addEventListener("click", (event) => {
  const eventPath = event.composedPath();
  const isTargeted = eventPath.includes(nav);
  if (!isTargeted) {
    hamburger.checked = false;
    changeVisibility();
    updateHamburgerARIA();
  }
});
