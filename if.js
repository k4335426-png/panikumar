let result = prompt('what is your name');
console.log(result);
console.log(result == 'pani');

let status = prompt('how is the book');
console.log(status == 'good');


if (status == 'good') {
    console.log('you buy a book');
}
if (status !== 'good') {
    console.log('do not buy the book');
}


let age = prompt("what is your age");

if (age >= 18) {
    console.log("you are eligible for vote");

} else {
    console.log("you are not elgible for vote");

}
let yourMarks = prompt("your marks");
console.log("yourMarks");
if (yourMarks >= 75) {
    console.log("you are distinction");
}
if (yourMarks >= 60) {
    console.log("you are first class");
}