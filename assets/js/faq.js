const esQuestion = document.querySelectorAll(".es-faq__heading");
const esArrow = document.querySelectorAll(".es-faq__arrow");
esQuestion.forEach((question) => {
  question.addEventListener("click", toggleAnswer);
});

function toggleAnswer(event) {
  const faqSingle = event.target.closest(".es-faq__single");
  const faqArrow = faqSingle.querySelector(".es-faq__arrow");
  const faqContent = faqSingle.querySelector(".es-faq__content");

  faqArrow.classList.toggle("es-faq__arrow--open");
  faqContent.classList.toggle("es-faq__content--open");
}
