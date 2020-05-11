/**
 * Write a program, in a language of your choice, that can read the contents of a text file and print it to standard out. This is essentially a basic version of the cat (http://www.linfo.org/cat.html).
 */

// cant read local file on browser
// function readTextFile(file) {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', file, false);
//   xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4) {
//       const { status } = xhr;
//       if (status === 200) {
//         console.log(xhr.responseText);
//       } else {
//         console.log('Error reading file');
//       }
//     }
//   }
//   xhr.send(null);
// }

fs = require('fs');

function readTextFile(file) {
  fs.readFile(file, 'utf8', (e, data) => {
    if (e) return console.log(e);
    console.log('data', data);
  });
}
