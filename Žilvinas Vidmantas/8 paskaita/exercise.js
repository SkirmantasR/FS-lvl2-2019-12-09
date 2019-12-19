async function getData(){
    const getTodos = fetch('https://jsonplaceholder.typicode.com/todos');
    const getUsers = fetch('https://jsonplaceholder.typicode.com/users');
    return Promise.all([getTodos, getUsers]);
}

function BindTodosToUsers([todos, users]){
    // let todos = data[0];
    // let users = data[1];
    console.log(todos);
    console.log(users);
    
}


getData()
    .then(data =>{
        return Promise.all(data.map(response => response.json()));
        // Ekvivalentu bet HARD CODE, kas yra absoliuti tragedija
        return Promise.all.map([data[0].json(), data[1].json()]);
    })
    .then(BindTodosToUsers);

