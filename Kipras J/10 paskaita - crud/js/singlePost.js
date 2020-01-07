const postContainer = document.querySelector('.js-posts');
let urlString = window.location.search;
let index = urlString.indexOf('=');
let postId = Number(urlString.slice(index + 1));

function renderPosts(posts){
    postContainer.innerHTML = `
    <img src="https://unsplash.it/1140/400" alt="" class="post_image">
        <h1 class="post_title">${posts.title}</h1>
        <p class="post_text">${posts.body}</p>
    `;
}

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(res => res.json())
    .then(renderPosts);