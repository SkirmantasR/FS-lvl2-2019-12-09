// Promise -
let iPromiseYouMoreThan10 = new Promise((res, rej) => {
    setTimeout(() => {
        let num = Math.floor(Math.random() * 21);
        if (num > 10) {
            res('I did as I said');
        } else {
            rej('I lied');
        }
    }, 1000);
});

iPromiseYouMoreThan10
    .then((data) => {
        console.log(data)
    })
    .catch((data) => {
        console.error(data)
    })