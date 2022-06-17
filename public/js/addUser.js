const {
  addEmployeeForm
} = document.forms;
const employeeUsers = document.querySelector('.employeeUsers');

addEmployeeForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const fromData = new FormData(addEmployeeForm);
  const data = Object.fromEntries(fromData);

  const response = await fetch('/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    window.location = '/users'
  }
});

const deleteUserList = [...document.querySelectorAll('.deleteUser')];

deleteUserList.forEach((el) => el.addEventListener('click', async (e) => {
  e.preventDefault();
  const user = e.target.closest('.employeeUser');
  const response = await fetch(`/users/${user.id}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    user.remove();
  }
}));


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


const logout2 = document.querySelector('.logout2')


logout2.addEventListener('click', async (event) => {
  event.preventDefault();

  const response = await fetch('/logout', {
    method: 'POST',
  });
  if (response.ok) {
    window.location = '/';
  }
})
