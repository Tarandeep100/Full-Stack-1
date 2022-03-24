require( 'console-stamp' )( console );

console.log('Logger Started!!');

setTimeout(()=> {
    console.log("Logger Delayed!")
},5000);