const {
  addList
} = document.forms
const lists = document.querySelector('.lists')
const logout = document.querySelector('.logout')

addList.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(addList))
  const response = await fetch('/addList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  if (response.ok) {
    lists.insertAdjacentHTML('afterbegin', `
      <div>${data.userName}</div>
      <button class="deleteList"></button>
    `)
  }
});

logout.addEventListener('click', async (event) => {
  event.preventDefault();

  const response = await fetch('/logout', {
    method: 'POST',
  });
  if (response.ok) {
    window.location = '/';
  }

})


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
