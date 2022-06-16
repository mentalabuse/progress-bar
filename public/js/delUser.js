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
