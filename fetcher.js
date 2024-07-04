const needle = require('needle');
const fs = require('node:fs');
const { stdin } = require('node:process');
const readline = require('node:readline');
const url = process.argv[2];
const path = process.argv[3];
needle.get(url, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.

  //I just needed the body to passdown to the fs 
  fs.writeFile(path, body, err => {
    if (err) {
      console.error(err);
    } else {
      // file written successfully
      //check file
      // fs.stat(path, (file) =>  {
      //   if (file) {
      //     consol
      //     process.stdin()
      //   }
      // })
      const stats = fs.statSync(path);
      const fileSize = stats.size
      console.log(`Downloaded and saved ${fileSize} bytes to ${path}`);
    }
  });
});
