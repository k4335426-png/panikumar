let studentId = 12;
let studentName = 'raju';
let studentClass = 7;
alert('i am pani ');
class student {
    static studentClass;
    constructor(studentId, studentName) {
        this.studentId = studentId;
        this.studentName = studentName;
    }
}

let stu = new student(12, "raju ");
let stu1 = new student(13, "rudra");
console.log(stu.studentId, stu.studentName);
console.log(stu1.studentId, stu1.studentName);
console.log(studentClass);




console.log('i love my family');
let a = 34;
let b = 43;
console.log(typeof a);

let c = a + b;
let d = a - b;
let e = b % a;
console.log(c);
console.log(d);
console.log(e);


// we want to know data types  and bilt-in data types
//now about number

let num = 23;
console.log(num);
console.log(Number(num));
console.log(typeof num);

let nikilMarks = 65;
console.log(nikilMarks);
let nikilMarks1 = Number(76);
console.log(nikilMarks1);
console.log(typeof nikilMarks, typeof nikilMarks1);





//about string
let name = 'nikil';
console.log(name);
let name1 = String('raj');
console.log(name1);
let marks;
console.log(marks);
let physicsMarks = null;
console.log(physicsMarks);