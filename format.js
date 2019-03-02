const fs = require('fs');
let data = fs.readFileSync('data.txt');
data = data.toString().split('\n');
let len = data.length / 12
let arr = []
for (let i = 0; i < len; i++){
  let temp = data.splice(0, 12);
  arr.push(temp)
}
arr.splice(-1, 1)
console.log(arr);
