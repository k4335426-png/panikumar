let bioform = document.querySelector(".bio-form");
let isSeatAvailable = prompt("is seat available");




if (isSeatAvailable == "yes") {
    console.log("seat is available");
    let areFiftyYearsOld = prompt("are you 50 years old");
    if (areFiftyYearsOld == "yes") {
        console.log("age above 50");
        let areYouHaveAadhar = prompt("are you have aadhar");
        if (areYouHaveAadhar == "yes") {
            console.log("i have aadhar");
            alert('please come in side the bus');
        } else {
            console.log('above two ok then you have no aadher');
        }

    } else {
        console.log('seat is available but you are not 50 years');
    }

} else {
    console.log('seat is not available');
}
document.querySelector("#reset").addEventListener("click", function() {
    querySelector("name").value = "";
    querySelector("age").value = "";
    querySelector("study").value = "";
    querySelector("ocupation").value = "";
});