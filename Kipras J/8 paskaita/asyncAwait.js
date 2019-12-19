let darbaiPradeti = new Date();

const nutinkuosiuSienas = (darbuotojuSkaicius) => {
  return new Promise((res, rej) => {
    console.log('Pradėta tinkuot', new Date() - darbaiPradeti)
    setTimeout(() => {
      res('Nutinkuota');
    }, 1000 / darbuotojuSkaicius);
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


async function a(){
    return ('pavyko');
    throw('nepavyko');
}

function a(){
    return new Promise.resolve('pavyko');
    return new Promise.reject('nepavyko');
}


// async - tai pranešimas jog bus gražinamas Promise ir darbai aprašyti funkcijos viduje vyks asinchroniškai
// await - galimas naudoti TIK ASYNC FUNKCIJOS VIDUJE 
async function darysiuDarbusPaeiliui(){
    let tinkavimas = await nutinkuosiuSienas();
    let nuglaistymas = await nuglaistysiuSienas();
    let dazymas = nudazysiuSienas();

    return new Promise.all(tinkavimas, nuglaistymas, dazymas);
}

darysiuDarbusPaeiliui()
    .then(data =>{
     console.log('Darbai baigsti', new Date() - darbaiPradeti);
     
    })