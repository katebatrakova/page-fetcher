const URL = process.argv.slice(2, 3).toString();
const filePath = process.argv.slice(3).toString();


const request = require('request');

//access the size
// var stats = fs.statSync(filePath)
// var fileSizeInBytes = stats["size"]
// //Convert the file size to megabytes (optional)
// var fileSizeInMegabytes = fileSizeInBytes

const fs = require('fs');


request(URL, 'utf8', (error, response, body) => {
  if (error) console.log('error:', error);
  // done(body);
  console.log(body);

  fs.writeFile(filePath, body, 'utf8', (err) => {
    if (err) console.log(err);
    console.log('The file has been saved!');
  });
});







// const data = new Uint8Array(Buffer.from('Hello Node.js'));
