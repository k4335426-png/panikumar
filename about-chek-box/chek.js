let male = document.getElementById("male");
let female = document.getElementById("female");
let submit = document.getElementById("submit");
submit.addEventListener("click", function() {
    if (male.checked) {
        alert("your gender male");
    } else if (female.checked) {
        alert("your gender is female");
    } else {
        alert("click the chek box");
    }
})