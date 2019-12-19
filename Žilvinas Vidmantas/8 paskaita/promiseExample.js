// Promise - tai šalutinėje gijoje veikiantis(concurrent) procesas, kuris gali turėti 3 būsenas
// -- vykdomas (pending)
// -- įvykdytas sėkmingai (resolved)
// -- atmestas (rejected)
// 'resolved' atveju vykdomas 'then' blokas
// 'rejected' atveju vykdomas 'catch' blokas
let iPromiseYouMoreThan10 = new Promise((res, rej) => {
  setTimeout(() => {
    console.log('Vykdo promiso bloką');
    let num = Math.floor(Math.random() * 21);
    if (num > 10) {
      res('I did as I said');
    } 
    rej('I lied');
  }, 1000);
});


iPromiseYouMoreThan10
  .then((data) => {
    console.log(data)
  })
  .catch((data) => {
    console.error(data)
  })

  
