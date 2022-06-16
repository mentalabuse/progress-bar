const checkBox = document.querySelector('input[name=checkMyList]')
const box = document.querySelector('.showList__header')

checkBox.addEventListener('change', async function (event) {
  event.preventDefault();

  if (this.checked) {
    const response = await fetch('/hrCheckList', {})

    if (response.ok) {
      const result = (await response.json()).findListHr;
      console.log(result)
      lists.remove();
      result.forEach((elem) => {
        box.insertAdjacentHTML('afterend', `
        <div class="lists">
          <div class="list" id="${elem.id}">
            <div>${elem.user}</div>
            <button class="deleteList"></button>
          </div>
        </div>
      `)
      });
    }
  } else {
    window.location = '/mainPage';
  }
})

