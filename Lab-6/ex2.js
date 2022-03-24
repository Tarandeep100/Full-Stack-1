let count = 10;
let intervalId = setInterval(()=>{
    console.log("count",count);
    if(count == 1){
        stopInterval(intervalId);
    }
    count-=1;
},1000);

stopInterval = () => {
    clearInterval(intervalId);
    console.log("time is up!");
}
