const buffer_array = Buffer.from([8,6,7,5,3,0,9]);

const buffer_string = Buffer.from("I'm a string!", "utf-8");

console.log(buffer_array.toString());
console.log(buffer_array.toString('hex'));
console.log(buffer_string);
const joined_buffer = Buffer.concat([buffer_array,buffer_string]);
console.log(joined_buffer);
console.log(joined_buffer.toJSON());