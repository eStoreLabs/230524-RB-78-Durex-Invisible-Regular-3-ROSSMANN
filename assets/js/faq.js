const esQuestion = document.querySelectorAll(".es-faq__heading");
const esArrow = document.querySelectorAll(".es-faq__arrow");
esQuestion.forEach((question) => {
  question.addEventListener("click", toggleAnswer);
});
function toggleAnswer(e) {
  const esArrow = e.target.closest(".es-faq__single").children[0].children[1];
  esArrow.classList.toggle("es-faq__arrow--open");
  const closestElement = e.target.closest(".es-faq__single").children[0];
  closestElement.parentElement.children[1].classList.toggle(
    "es-faq__content--open"
  );
}
