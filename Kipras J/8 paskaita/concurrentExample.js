// fetch - tai Promise'as kuris skirtas duomenis iš serverio gauti

// Vienu metu pradedamos 2 asynchroninės užduotys
const getTodos = fetch('https://jsonplaceholder.typicode.com/todos');
const getUsers = fetch('https://jsonplaceholder.typicode.com/users');

// -----------------------------------
//                  \
//                   \_____getTodos-><pending>
//                   |
//                   |
//                   |_____getUsers-><pending>
//

const getData = Promise.all([getTodos, getUsers]);

// -----------------------
//                  \
//                   \_____getTodos-><pending>
//                   |
//                   |
//                   |_____getUsers-><pending>
//
getData
    .then( data =>{ 
        console.log(data);
    })
    .catch((data)=>{
        console.error('sss')
    })

    console.log