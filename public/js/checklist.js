

const checklist = document.querySelector('.checklist')

checklist.addEventListener('change', async (e) => {
  e.preventDefault();
  if (e.target.type == 'checkbox') {
    const row = e.target.closest('[data-name]');
    const {name} = row.dataset;
    await fetch(`/checklist/${checklist.id}/${name}/${row.checked}`, {
      method: 'PUT',
    });
  }
  if (e.target.type == 'text') {
    const row = e.target.closest('[data-name]');
    const {name} = row.dataset;
    await fetch(`/checklist/${checklist.id}/${name}/${row.value}`, {
      method: 'PUT',
    });
  }
});


const {changeListEmployeer} = document.forms;
console.log('changeListEmployeer: ', changeListEmployeer);


changeListEmployeer.addEventListener('submit' , async (event) => {
  event.preventDefault();
  const fromData = new FormData(changeListEmployeer);
  const data = Object.fromEntries(fromData);
  
  const response = await fetch(`/checklist/${checklist.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if(response.ok) {

    const bName = document.getElementById('userName');
    const bMentor = document.getElementById('mentorName');
    bName.textContent = `${data.userName}`;
    bMentor.textContent= `${data.mentorName}`;
  }
})

