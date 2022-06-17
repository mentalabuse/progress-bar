const checkBox = document.querySelector('input[name=checkMyList]')
const list = document.querySelectorAll('.list')

checkBox.addEventListener('change', (event) => {

  list.forEach(el => {
    if (el.dataset.id != el.dataset.usid) {
      el.classList.toggle('hide')
    }
  })
})

