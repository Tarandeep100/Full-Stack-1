const fs = require('fs');

let readStream = fs.createReadStream("data.txt");
let writeStream = fs.createWriteStream("output.txt");

//readstream on.data event to read the data from the file.
readStream.on("data", function (data) {
    console.log(data);
    let dataChunks = data.toString(); //converting to string
    console.log(dataChunks);
    writeStream.write(dataChunks); //wrting the data to output.txt
});

//readstream on.end event
readStream.on('end', function () {
    writeStream.close(() => {
        console.log('\nwrite is completed!');
    })
})

