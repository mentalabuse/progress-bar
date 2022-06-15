const deleteList = [...document.querySelectorAll('.deleteList')]

deleteList.forEach(el => el.addEventListener('click', async (e) => {
  e.preventDefault()
  const list = e.target.closest('.list')
  const response = await fetch(`/mainPage/${list.id}`, {
    method: 'DELETE'
  })

  if (response.ok) {
    list.remove()
  }
})
)
