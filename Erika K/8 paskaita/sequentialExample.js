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

nutinkuosiuSienas().then(msg => {
  console.log(msg);
  nuglaistysiuSienas().then(msg => {
    console.log(msg);
    nuglaistysiuSienas().then(msg => {
      console.log(msg);
      console.log("Baigti Darbai", new Date() - darbaiPradeti);
    });
  });
});
