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
