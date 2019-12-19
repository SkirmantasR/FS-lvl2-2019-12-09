
const nutinkuosiuSienas = () => {
    return new Promise((res, rej) => {
      console.log('Pradėta tinkuot', new Date() - darbaiPradeti)
      setTimeout(() => {
        res('Nutinkuota');
      }, 1000);
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
  
  nutinkuosiuSienas()
    .then(msg => {
      console.log(msg);
      nuglaistysiuSienas()
        .then(msg => {
          console.log(msg);
          nudazysiuSienas()
            .then(msg => {
              console.log(msg);
              console.log('Baigti darbai', new Date() - darbaiPradeti)
            })
        })
    })
  
  