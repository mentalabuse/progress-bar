const allBtnsChangersRole = document.querySelectorAll('.btnChangeRole');

allBtnsChangersRole.forEach((el) => el.addEventListener('click', async (e) => {
  e.preventDefault();
  const user = e.target.closest('.employeeUser');
  const select = user.querySelector('select');
  const newRole = select.value;

  const response = await fetch(`/users/${user.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ employeeRole: newRole }),
  });

  if (response.ok) {
    const result = await response.json();
    const userInfo = user.querySelector('.userInfo');
    userInfo.textContent = `${result.name} - ${result.email} - Admin status: ${newRole}`;
  }
}));
