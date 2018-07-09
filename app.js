//File System module in node.

const fs = require ('fs');

//Synchronous version of readdir.
// const files = fs.readdirSync('./');
// console.log(files);

//ASynchronous version of readdir.
fs.readdir('./', (err, files) => {
    if(err) console.log('Error', err);
    else console.log('Result', files);
});

