let text = `hello`
let result = text.length
console.log(`${text} is of ${result} words`);
console.log(text.charAt(0));
console.log(text.charCodeAt(0));
console.log(text.codePointAt(0));


let textt = "Apple, Banana, Kiwi";
let part = textt.slice(4)
console.log(part);
console.log(textt.substring(7,13));


console.log(textt.toUpperCase());
console.log(textt.toLowerCase());
console.log( textt.isWellFormed());

let t = "          jrwhfh            "
console.log(t.trim());   //The trim() method removes whitespace from both sides of a string:
console.log(t.trimStart());   //The trim() method removes whitespace from starting
console.log(t.trimEnd());   //The trim() method removes whitespace from ending



