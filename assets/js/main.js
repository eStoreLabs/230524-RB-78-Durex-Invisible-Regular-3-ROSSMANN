const section = document.querySelector('.es-know')
const containers = document.querySelectorAll('.es-know__container')
const showNewContent = () => {
  containers.forEach((container) => {
    if (container.classList.contains('es-know__container--active')) {
      container.classList.remove('es-know__container--active')
      container.classList.add('es-know__container--inactive')
    } else {
      container.classList.add('es-know__container--active')
      container.classList.remove('es-know__container--inactive')
    }
  })
}
section.addEventListener('click', showNewContent)
