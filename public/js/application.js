const e = require("express");


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
    window.location = '/mainPage'
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

const progresses = document.querySelectorAll('.progress-bar')
progresses.forEach(el => {
  const current = el.textContent.replace('%','');
  if (current < 50) {
    el.classList.add('bg-danger')
    if (el.classList.contains('bg-success')) {
      el.classList.remove('bg-success')
    }
    if (el.classList.contains('bg-warning')) {
      el.classList.remove('bg-warning')
    }
  }
  if (current >= 50 && current < 80 ) {
    el.classList.add('bg-warning')
    if (el.classList.contains('bg-danger')) {
      el.classList.remove('bg-danger')
    }
    if (el.classList.contains('bg-success')) {
      el.classList.remove('bg-success')
    }
  }
  if (current >= 80) {
    el.classList.add('bg-success')
    if (el.classList.contains('bg-danger')) {
      el.classList.remove('bg-danger')
    }
    if (el.classList.contains('bg-warning')) {
      el.classList.remove('bg-warning')
    }
  }
})

const copy = document.querySelectorAll('.copy')

// function myFunction() {
//     const lists = document.querySelector('.lists')
//     list.addEventListener('click' ,(event) =>{
//       e.preventDefault();
//       const row = event.target.closest('[data-name]');
//       const {name} = row.dataset;
//     })
//     const text = document.querySelector('.buttons > a').href
//     console.log(text);
// }


copy.forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault()
    el.classList.add('copying')
    setTimeout(() => {
    el.classList.remove('copying')
    }, 500);
  })
})
