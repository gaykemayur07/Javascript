/*const name="Mayur";
const sur="Gayke"
const num=50;

//console.log(name +" Gayke " + num );

console.log(`Hello My name is ${name} And Surname is ${sur} And my bank balance is ${num}`);
console.log(name.length);
console.log(name.toUpperCase());
console.log(sur.toLowerCase());

console.log(sur.charAt(3));
console.log(name.indexOf('M'));

*/
// Define a sample string
let str = "Hello World!";

// 1. length
console.log("Length:", str.length);

// 2. charAt()
console.log("charAt(1):", str.charAt(1));

// 3. slice()
console.log("slice(2,7):", str.slice(2,7));

// 4. substring()
console.log("substring(2,7):", str.substring(2,7));

// 5. substr()
console.log("substr(2,5):", str.substr(2,5));

// 6. toUpperCase()
console.log("toUpperCase:", str.toUpperCase());

// 7. toLowerCase()
console.log("toLowerCase:", str.toLowerCase());

// 8. trim()
console.log("trim:", str.trim());

// 9. replace()
console.log("replace 'World' with 'JS':", str.replace("World","JS"));

// 10. replaceAll()
let str2 = "a-b-c-d";
console.log("replaceAll '-' with '_':", str2.replaceAll("-","_"));

// 11. split()
console.log("split by space:", str.trim().split(" "));

// 12. repeat()
console.log("repeat 3 times:", "Hi".repeat(3));

// 13. padStart()
console.log("padStart:", "5".padStart(3,"0"));

// 14. padEnd()
console.log("padEnd:", "5".padEnd(3,"0"));

// Bonus: indexing directly
console.log("Indexing str[0]:", str[0]);

