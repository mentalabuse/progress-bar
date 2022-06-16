const { addEmployeeForm } = document.forms;
const employeeUsers = document.querySelector('.employeeUser');

addEmployeeForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const fromData = new FormData(addEmployeeForm);
  const data = Object.fromEntries(fromData);
  console.log(data);

  const response = await fetch('/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    employeeUsers.insertAdjacentHTML('afterbegin', `
      <div>${data.employeeName} - ${data.employeeMail} - Admin status: ${data.employeeRole}</div>
      <button class="deleteUser">DELETE USER</button>
    `);
  } else {
    alert('Что-то пошло не так');
  }
});
