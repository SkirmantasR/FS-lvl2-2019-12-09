// fetch - tai Promise'as kuris skirtas duomenis iš serverio gauti

// Vienu metu pradedamos 2 asynchroninės užduotys
const getTodos = fetch('hps://jsonplaceholder.typicode.com/todos');
const getUsers = fetch('https://jsonplaceholder.typicode.com/users');

// ----------------------------------- Pasileidžia kartu - Concurrent
//                  \
//                   \_____getTodos-><pending>
//                   |
//                   |
//                   |_____getUsers-><pending>
//

const getData = Promise.all([getTodos, getUsers]);
// ---------------------
//   \
//    \_____getTodos-><pending>---<resolved1>_________
//    |                                               \___getData____resolve([resolve1, resolve2] )
//    |                                               /
//    |_____getUsers-><pending>-----------<resolved2>
//
getData
    .then(responses => Promise.all([responses[0].json(), responses[1].json()]))
    .then(data => {
        let todos = data[0];
        let users = data[1];
        console.table(todos);
        console.table(users);
    })
    .catch((msg) => {
        console.log(msg);
    })


