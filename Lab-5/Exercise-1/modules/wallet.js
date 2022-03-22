const cryptoHash = require("crypto");
const getAddress = () => {
    const address = cryptoHash.createHash('sha256').digest('hex');
    console.log(`wallet address is ${address}`);
}
const depositAmount = (amount) => {
    console.log(`Amount: ${amount} deposited`);
}

module.exports = {
    getAddress,
    depositAmount
}