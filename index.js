const navigationItems = document.querySelectorAll(".navigation-item");

function navigationItemSelect(evt) {
  navigationItems.forEach((item) => {
    item.classList.remove("active");
  });
  const itemSelected = evt.target;
  const itemName = itemSelected.getAttribute("data-item");
  itemSelected.classList.add("active");
  document.documentElement.style.setProperty(
    "--active-primary-color",
    `var(--${itemName}-primary-color)`
  );
  document.documentElement.style.setProperty(
    "--active-secondary-color",
    `var(--${itemName}-secondary-color)`
  );
}

navigationItems.forEach((item) => {
  item.addEventListener("click", navigationItemSelect);
});
