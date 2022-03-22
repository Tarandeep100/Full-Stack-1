const events = require("events");
const wallet = require("../Exercise-1/modules/wallet");
const eventEmitter = new events.EventEmitter();

const fn = () => {
    console.log("call me");
}

const transactionReceived = () => {
    wallet.getAddress();
    console.log("Transaction Received...");
    wallet.depositAmount(100);
}

eventEmitter.on('call', fn);
eventEmitter.emit('call');

eventEmitter.on('deposited', transactionReceived);
eventEmitter.emit('deposited');