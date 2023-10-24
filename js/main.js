const accordions = Array.from(document.querySelectorAll(".accordion"));

accordions.forEach((item) => {
  const accordionHeader = item.querySelector(".accordion__header");

  accordionHeader.addEventListener("click", (e) => {
    item.classList.toggle("is-open");
  });
});
