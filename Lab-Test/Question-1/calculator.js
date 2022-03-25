const multiplyTwoNumbers = (x,y) => {
    if(Number.isInteger(x) && Number.isInteger(y))
        return x*y;
    else
        throw Error("The number is not not an integer");
}

const evenDoubler = (x) =>{
    if(!Number.isInteger(x))
        throw Error(`${x} is not an integer`);
    if(x % 2 == 0)
        return x*x;
    else
        return 0;
}

module.exports = {
    multiplyTwoNumbers,
    evenDoubler
} 
    