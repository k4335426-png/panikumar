let loginform = document.querySelector(".login-form");


loginform.addEventListener("submit", function(e) {
    e.preventDefault();
    const form = e.target;
    const username = form.querySelector("#username").value;
    const password = form.querySelector("#password").value;
    if (username === "pani" && password === "1234") {
        document.write("login is sucsess");
    } else {
        document.write("your username or password are incurrect");

    }




    document.querySelector("#reset").addEventListener("click", function(e) {
        form.querySelector("#username").value = " ";
        form.querySelector("#password").value = " ";

    })
});