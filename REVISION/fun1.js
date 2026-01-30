console.log(x); // undefined
var x = 10;
// var → Hoisted & initialized as undefined

/*

console.log(y); // ❌ Error
let y = 10;
// let → Hoisted but in Temporal Dead Zone 

*/


for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(`var : ${i}`), 1000);
}

for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(`let : ${i}`), 1000);
}


var m = 30
let n = 40
const o = 50
p = 60

console.table([m , n , o , p])