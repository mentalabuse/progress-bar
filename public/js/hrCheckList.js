const checkBox = document.querySelector('input[name=checkMyList]')
const list = document.querySelectorAll('.list')

checkBox.addEventListener('change', (event) => {

  list.forEach(el => {
    console.log(el.dataset);
    console.log(el.dataset.id, el.dataset.usid);
    if (el.dataset.id != el.dataset.usid) {
      el.classList.toggle('hide')
    }
  })
})
