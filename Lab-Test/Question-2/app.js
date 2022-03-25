const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

let currentRound = 0;

const playGame = (num) => {   
    myEmitter.on('ping', () => {
        setTimeout(()=>{
            console.log(`Round ${currentRound}`);
            console.log('ping..');
            myEmitter.emit('pong');
        },2000);        
    });
    
    myEmitter.on('pong', () => {
        setTimeout(()=>{
            console.log('pong..');
            if(currentRound < num){
                currentRound += 1;
                myEmitter.emit('ping');
            }
            else{
                console.log("game completed..");
            }
        },2000);
    });

    if(currentRound < num){
        currentRound += 1;
        myEmitter.emit('ping');
    }
}
playGame(4);