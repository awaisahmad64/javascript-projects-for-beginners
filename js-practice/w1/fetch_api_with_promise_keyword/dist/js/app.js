function sendHTTPRequest(method, url) {
  const promise = new Promise((resoleve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onload = () => {
      //if we dont  const data = xhr.JSON.parse(xhr.response);

      resoleve(xhr.response);
    };
    xhr.open(method, url);
    xhr.send();
  });
  return promise;
}
const getData = () => {
  sendHTTPRequest('GET', 'https://jsonplaceholder.typicode.com/users').then(
    (res) => {
      return showGitData(res);
    }
  );
};
getData();
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
