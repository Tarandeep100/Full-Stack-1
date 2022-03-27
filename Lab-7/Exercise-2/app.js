var express = require('express');
const res = require('express/lib/response');
var app = express();

var requestTime = function(req,res,next){
    req.requestTime = Date.now();
    next();
}

app.use(requestTime);

app.get('/greet', (req,res) => {
    console.log("GET received: " + req.requestTime);
    res.send('hello world!');
});

// app.post('/greet', (req,res) => {
//     console.log("GET received: " + req.requestTime);
//     res.send('hello world!');
// });

// app.put('/greet', (req,res) => {
//     console.log("GET received: " + req.requestTime);
//     res.send('hello world!');
// });

// app.delete('/greet', (req,res) => {
//     console.log("GET received: " + req.requestTime);
//     res.send('hello world!');
// });



app.listen(3000);
