/**
 * Finds the correct height of the accordion content
 * @param {HTMLElement} accordion The accordion
 */
function getContentHeight(accordion) {
  const accordionInner = accordion.querySelector(".accordion__inner");

  if (accordion.classList.contains("is-open")) return 0;
  return accordionInner.getBoundingClientRect().height;
}

/**
 * Updates accordion
 * @param {HTMLElement} accordion The accordion
 * @param {Number} height px value of height to update
 */
function updateAccordion(accordion, height) {
  const accordionContent = accordion.querySelector(".accordion__content");

  accordion.classList.toggle("is-open");
  accordionContent.style.height = `${height}px`;
}

const accordionContainer = document.querySelector(".accordion-container");
accordionContainer.addEventListener("click", (event) => {
  const accordionHeader = event.target.closest(".accordion__header");
  if (!accordionHeader) return;

  const accordion = accordionHeader.parentElement;
  const height = getContentHeight(accordion);

  updateAccordion(accordion, height);
});
