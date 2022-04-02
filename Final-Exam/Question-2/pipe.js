const fs = require('fs');
const zlib = require('zlib');

let readStream = fs.createReadStream('output.txt');
let writeStream = fs.createWriteStream('output.txt.gz');
let zipStream = zlib.createGzip();

readStream.pipe(zipStream).pipe(writeStream);