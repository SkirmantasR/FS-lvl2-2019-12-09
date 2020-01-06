let darbaiPradeti = new Date();

const nutinkuosiuSienas = (darbuotojuSk = 1) => {
    return new Promise((res, rej) => {
        console.log('Pradėta tinkuot', new Date() - darbaiPradeti)
        setTimeout(() => {
            res('Nutinkuota');
        }, 1500 / darbuotojuSk);
    })
}

const nuglaistysiuSienas = () => {
    return new Promise((res, rej) => {
        console.log('Pradėta glaistyt', new Date() - darbaiPradeti)
        setTimeout(() => {
            res('Nuglaistyta');
        }, 1000);
    })
}

const nudazysiuSienas = () => {
    return new Promise((res, rej) => {
        console.log('Pradėta dažyt', new Date() - darbaiPradeti)
        setTimeout(() => {
            res('Nudažyta');
        }, 1000);
    })
}

// --------------------- Veikia identiškai -----------------
// async function a(){
//     return ('pavyko');
//     throw ('nepavyko');
// }

// function a(){
//     return new Promise.resolve('pavyko');
//     return new Promise.reject('nepavyko');
// }
// --------------------- Veikia identiškai -----------------



// async - tai pranešimas jog bus gražinamas Promise ir darbai aprašyti funkcijos viduje vyks asinchroniškai
// await - galimas naudoti TIK ASYNC FUNKCIJOS VIDUJE 
async function darysiuDarbusPaeiliui() {
    let tinkavimas = await nutinkuosiuSienas();
    let nuglaistymas = await nuglaistysiuSienas();
    let dazymas = await nudazysiuSienas();

    return 'baigti';
}

async function darysiuVisusDarbusIskart() {
    let tinkavimas = nutinkuosiuSienas();
    let nuglaistymas = nuglaistysiuSienas();
    let dazymas = nudazysiuSienas();

    return Promise.all([tinkavimas, nuglaistymas, dazymas]);
}

darysiuDarbusPaeiliui()
    .then((msg) => {
        console.log('Darbai baigti paeiliui', new Date() - darbaiPradeti);
        console.log(msg);
    })


// darysiuVisusDarbusIskart()
//     .then(() => {
//         console.log('Darbai baigti pradedant vienu metu', new Date() - darbaiPradeti);
//     })