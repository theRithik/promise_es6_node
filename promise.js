

///promise are used to handle multiple asynchronous operations, 
//thus avoiding the call back hell which would be created due to unmanageble codes by the callbacks

console.log('started')
new Promise((resolve, reject)=>{
    // if(a==b){
    //    resolve()
    //}
   // else{
    //    reject()
  //  }
resolve()
})
.then(()=>{
    return 1
})
.then((value)=>{
    setTimeout(()=>{
        console.log('1 sec')
    }, value*1000)
    return 2
})
.then((value)=>{
    setTimeout(()=>{
        console.log('2 sec')
    }, value*1000)
    return 3
})
.then((value)=>{
    setTimeout(()=>{
        console.log('3 sec')
    }, value*1000)
    return 4
})
.catch((err)=>{
    console.log(err)
})
console.log('stopped')
