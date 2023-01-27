const getMyDate = async () => {
  const apiUsersUrl = 'https://jsonplaceholder.typicode.com/users';
  const users = await fetch(apiUsersUrl);
  const usersData = await users.json();
  return showGitData(usersData);
};
getMyDate();
const showGitData = (data) => {
  const table = document.getElementById('table');
  for (let i = 0; i < data.length; i++) {
    table.innerHTML += `
        <tr>
          <td>${data[i].name}</td>
          <td>${data[i].email}</td>
          <td>${data[i].address.street}, ${data[i].address.city}, ${data[i].address.zipcode}</td>
        </tr>
    `;
  }
};
