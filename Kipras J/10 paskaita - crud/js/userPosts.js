const userContainer = document.querySelector('.js-user');
const tableData = document.querySelector('.table>tbody');


let urlString = window.location.search;
let index = urlString.indexOf('=');
let userId = Number(urlString.slice(index + 1));

function renderTableData(posts) {
  $('.table').removeClass('d-none');
  $('h2.my-4')
    .html('Recent posts')
    .removeClass('text-center');
  tableData.innerHTML = '';
  posts.forEach(post => renderRow(post))
}

function renderRow(post) {
  let row = document.createElement('tr');
  row.innerHTML = `
  <td><a href="./singlePost.html?post=${post.id}">${post.title}</a></td>
  <td><p>${post.body}</p></td>`;
  tableData.appendChild(row);
}

function displayNoPosts() {
  $('.alert-warning').removeClass('fade');
  $('.table').addClass('d-none');
  setTimeout(() => {
    $('.alert-warning').addClass('fade');
  }, 5000);
}

function renderUser(user) {
  userContainer.innerHTML = `
    <img src="https://unsplash.it/250/250" alt="" class="user-img">
    <div class="user-info">
      <h1 class="mb-1">${user.name}</h1>
      <h3 class="mt-0 text-muted">${user.username}</h3>
      <ul class="mt-5">
        <li><span class="mr-2">Email</span>${user.email}</li>
        <li><span class="mr-2">Address</span>${user.address.street}, ${user.address.city}</li>
        <li><span class="mr-2">Phone</span>${user.phone}</li>
      </ul>
    </div>`;
}

function noUserAlert() {

}


fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
  .then(res => {
    if (res.status !== 200) {
      throw new Error('There is no such user: ' + res.status);
    }
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(posts => {
        let userPosts = posts.filter(post => post.userId === userId);
        if (userPosts.length > 0) renderTableData(userPosts);
        else displayNoPosts();
      });
    return res.json();
  })
  .then(renderUser)
  .catch(() => {
    $('h2.my-4')
      .html('There is no such user')
      .addClass('text-center');
  })





