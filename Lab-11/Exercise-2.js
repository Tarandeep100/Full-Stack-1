const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

const buf = Buffer.from([0x62,0x75,0x66,0x66,0x65,0x72]);


eventEmitter.on('convert', ()=>{
    for(const b of buf){
        console.log(b);
    }
    console.log("buffer converted");
})


eventEmitter.emit('convert');