const {addList} = document.forms
const lists = document.querySelector('.lists')

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

addList.addEventListener('click', async (event) => {
  event.preventDefault();

  if (event.target.classList.contains('logout')) {
    const response = await fetch('/logout', {});
    if (response.ok) {
      window.location = '/';
    }
  }
})
