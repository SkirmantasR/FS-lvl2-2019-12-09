


async function getData(){
    const getTodos = fetch('https://jsonplaceholder.typicode.com/todos');
    const getUsers =fetch('https://jsonplaceholder.typicode.com/users');
    return Promise.all([getTodos, getUsers]);

}

getData()
.then(data =>{
    return Promise.all.map(response=> response.json());
    
});