const allBtnsChangersRole = document.querySelectorAll('.btnChangeRole');

allBtnsChangersRole.forEach((el) => el.addEventListener('click', async (e) => {
  e.preventDefault();
  const user = e.target.closest('.employeeUser');
  const select = document.getElementById(`${user.id}`).value;
  console.log(user.id, select);
  // const response = await fetch(`/users/${user.id}`, {
  //   method: 'PUT',
  // });
  //
  // if (response.ok) {
  //   user.remove();
  // }
}));
// changeRoleForm.addEventListener('submit', async (e) => {
//   e.preventDefault();
//   const fromData = new FormData(changeRoleForm);
//   const data = Object.fromEntries(fromData);
//   console.log(data);
//

  // const response = await fetch('/users:id', {
  //   method: 'PUT',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(data),
  // });
  //
  // if (response.ok) {
  //   employeeUsers.insertAdjacentHTML('afterbegin', `
  //     <div>${data.employeeName} - ${data.employeeMail} - ${data.emploeeRole}</div>
  //     <button class="deleteUser">X</button>
  //   `);
  // } else {
  //   alert('Что-то пошло не так');
  // }
// });
