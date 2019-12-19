// fetch - tai promis'as, kuris skirtas duomenims iš serverio gauti

// vienu metu pradedamos 2 asinchroniniės užduotys 
const getTodos = fetch('https://jsonplaceholder.typicode.com/todos');

const getUsers =fetch('https://jsonplaceholder.typicode.com/users');

// ------------------
//                   \
//                    \_____getTodos___/
//                    |
//                    |
//                    |_____getUsers
//