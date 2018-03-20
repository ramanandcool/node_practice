var addition=(a,b)=>{return new Promise(function(resolve, reject) {
  if(typeof a==='number'&&typeof b==='number')
    resolve(a+b);
    else
      reject('aruments must be numbers');

    });
};
addition(10,20).then((res)=>{
  console.log( 'success'+res );},
(errmsg)=>{console.log(errmsg);});
