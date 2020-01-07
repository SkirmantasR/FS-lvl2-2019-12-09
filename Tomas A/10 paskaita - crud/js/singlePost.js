const postContainer = document.querySelector('.js-post');

let urlString = window.location.search; // ?post=15
let index = urlString.indexOf('='); // 5
let postId = Number(urlString.slice(index + 1)); // string kopija nuo 5+1 elemento iki galo, paversta skaičiumi

function renderPost(post) {
  postContainer.innerHTML = `
    <img src="https://unsplash.it/1110/400" alt="" class="post__img">
    <h1 class="post__header">${post.title}</h1>
    <p class="post__body">${post.body}!</p>
    <hr>
    <hr>`;
}

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  .then(res => res.json())
  .then(renderPost);
