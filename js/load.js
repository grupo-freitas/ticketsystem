const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
  event.preventDefault()

  document.querySelector('.load').style.display = ' flex '

})