/* Challenge 1: Use the setTimeOut function to trigger a callback after a delayed amount of time ie. 5
seconds, so that the text is spoken after the first “Hello, Alex”
*/
let say = require("say");
setTimeout( () => {
    say.speak("Hello, Alex");
}, 5000)