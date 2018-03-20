var somepromise= new Promise((resolve, reject)=> {
  setTimeout(()=>{
    resolve('hey it worked');
    resolve();
    reject('unable to fullfil the Promises');
  },2500);});
somepromise.then((msg)=>{
  console.log('success',msg);
}
,(errorMessage)=>{console.log('Error',errorMessage);
});
