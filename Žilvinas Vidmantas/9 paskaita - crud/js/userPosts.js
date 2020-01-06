const userContainer = document.querySelector('.js-user');
let userId = 4;


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


fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
  .then(res => res.json())
  .then(renderUser);