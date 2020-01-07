const postContainer = document.querySelector('.js-post');

let urlString = window.location.search; // ?post=15
let index = urlString.indexOf('='); // 5
let postId = Number(urlString.slice(index + 1)); // string kopija nuo 5+1 elemento iki galo, paversta skaičiumi

function renderPost(data) {
  postContainer.innerHTML = `
    <img src="https://unsplash.it/1110/400" alt="" class="post__img">
    <h1 class="post__header">${data.post.title}</h1>
    <div class="user-info">
      <a class="user-name" href="./userPosts.html?user=${data.user.id}">${data.user.name}</a>
      <img src="https://unsplash.it/120/120">
      <a class="user-email" href="mailto: ${data.user.email}">${data.user.email}</a>
      <a class="user-phone" href="tel: ${data.user.phone}">${data.user.phone}</a>
    </div>
    <p class="post__body">${data.post.body}</p>
    <hr>`;
}

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  .then(res => res.json())
  .then((post) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
      .then(res => res.json())
      .then(user =>renderPost({ post, user }))
  });
