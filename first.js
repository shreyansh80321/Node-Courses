
console.log('KG coding is best');

const fs = require('fs');
fs.writeFile("output.txt", "Writing file", (err) => {
  if (err) console.log('Error returned');
  else console.log('File written successfully');
})