const userContainer = document.querySelector('.js-user');
const tableData = document.querySelector('.table>tbody');
let userId = 50;

function renderTableData(posts) {
  $('.table').removeClass('d-none');
  tableData.innerHTML = '';
  posts.forEach(post => renderRow(post))
}

function renderRow(post) {
  let row = document.createElement('tr');
  row.innerHTML = `
  <td><a href="./singlePost.htm l?post=${post.id}">${post.title}</a></td>
  <td><p>${post.body}</p></td>`;
  tableData.appendChild(row);
}

function displayNoPosts(){
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

function noUserAlert(){

}


fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
  .then(res => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => {
      let userPosts = posts.filter(post => post.userId === userId);
      if (userPosts.length > 0) renderTableData(userPosts);
      else displayNoPosts();
    });
    res.json()
  })
  .then(renderUser)
  .catch(err => {
  $('.table').addClass('d-none');
  $('.js-user>h2').addClass('d-none');
    console.log(err);
  })



