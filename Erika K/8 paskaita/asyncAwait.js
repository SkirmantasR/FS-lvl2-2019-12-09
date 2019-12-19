
let darbaiPradeti = new Date();

const nutinkuosiuSienas = () => {
    return new Promise((res, rej) => {
      console.log("Pradeta tinkuot", new Date() - darbaiPradeti);
      setTimeout(() => {
        res("nutinkavau");
      }, 1000);
    });
  };
  
  const nuglaistysiuSienas = () => {
    return new Promise((res, rej) => {
      console.log("Pradeta glaistyti", new Date() - darbaiPradeti);
      setTimeout(() => {
        res("nuglaistyta");
      }, 1000);
    });
  };
  
  const nudazysiuSienas = () => {
    return new Promise((res, rej) => {
      console.log("Pradeta dazyti", new Date() - darbaiPradeti);
      setTimeout(() => {
        res("nudazyta");
      }, 1000);
    });
  };

  async function a(){
    
      return ('pavyko');
      throw ('nepavyko');
  }

  function a(){
      return new Promise.resolve('pavyko');
      throw new Promise.reject('nepavyko');
  }



  // async tai pranesimas, kad bus grazinamas Promise ir darbai aprasyti funkcijos viduje vyks asinchroniskai
 // await galimas naudoti tik ASYNC funkcijos viduje
async function darysiuDarbusPaeiliui(){
 let tinkavimas =  await nutinkuosiuSienas();
 let nuglaistymas = await nuglaistysiuSienas();
 let dazymas = await nudazysiuSienas();

 return Promise.all(tinkavimas, nuglaistymas, dazymas);


}

darysiuDarbusPaeiliui()
.then(data => {
    console.log('Darbai baigti', new Date() - darbaiPradeti);
})

