// BROWSER!!!!! setTimeout-we set minimum time after which browser can call the function in setTimeout.
//but if javascript is loading.then this will work after javascript has completed execution.
//set timer is controlled by browser

//set timer gets called only after javascript is completely loaded.so normal use case like setting DOM won't be affected.
//also,if a console.log is being used in set timer.then,the message will be in last in the console 

boilWater(1000);
for(let i=0;i<10000;i++){
console.log(`still busy`);//only after this for loop is done the setTimer fires
}

function boilWater(time) {
  console.log('boiling...');//this excutes first since this is not in set timer
  setTimeout(() => {
    console.log('done.');
  }, time);
}
