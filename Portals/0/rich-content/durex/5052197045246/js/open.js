const imgElement = document.querySelector('.es-tip__img--top');
const windowHeight = window.innerHeight;


function handleScroll() {
  const scrollPosition = window.scrollY;
  const maxMarginBottom = -100;
  const minMarginBottom = 35;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercentage = scrollPosition / maxScroll;
  const margin = ((1 - scrollPercentage) * (maxMarginBottom - minMarginBottom)) + minMarginBottom;

  imgElement.style.marginBottom = `${margin}px`;
}

window.addEventListener('scroll', handleScroll);