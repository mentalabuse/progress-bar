
const { checklistForm } = document.forms;
const checklist = document.querySelector('.checklist')

checklist.addEventListener('change', async (e) => {
  e.preventDefault();
  console.log(e.target.classList);
  if (e.target.classList) {
    
    const row = e.target.closest('[data-name]');
    const { name } = row.dataset;
    
    const response = await fetch(`/checklist/${name}`, {
      method:'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user.id),
    });
 
  
  if (response.ok) {
    const result = await response.json();
    console.log(result);

   }
  }
});
