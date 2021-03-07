var regexFname = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i;
var regexLname = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i;
var regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
var regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;


login = (e) => {
    e.preventDefault();
    let fName = document.getElementById("fname").value;
    let lName = document.getElementById("lname").value;
    let eMail = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let formGroup = document.getElementsByClassName("form-group");
    let errorTxt = document.getElementsByClassName("error-msg");

    if (!!fName && !!lName && !!eMail && !!pass) {
        location.replace("/dashboard.html")
    } else {
        for (var i = 0; i < formGroup.length; i++) {
            formGroup[i].classList.add("error");
        }

        for (var i = 0; i < errorTxt.length; i++) {
            errorTxt[i].innerText = "please fill";
        }
    }
}

formValidation = (id) => {
    let fName = document.getElementById("fname");
    let lName = document.getElementById("lname");
    let eMail = document.getElementById("email");
    let pass = document.getElementById("pass");

    let resultFname = regexFname.test(fName.value);
    let resultLname = regexLname.test(lName.value);
    let resultEmail = regexEmail.test(eMail.value);
    let resultPass = regexPass.test(pass.value);

    if (id === "fname") {
        if (!resultFname) {
            fName.parentElement.classList.add("error")
            fName.nextElementSibling.innerText = "Invalid first name"
        }

    }

    if (id === "lname") {
        if (!resultLname) {
            lName.parentElement.classList.add("error")
            lName.nextElementSibling.innerText = "Invalid lastst name"
        }
    }

    if (id === "email") {
        if (!resultEmail) {
            eMail.parentElement.classList.add("error")
            eMail.nextElementSibling.innerText = "Invalid Email address"
        }

        else {
            eMail.parentElement.classList.remove("error")
            eMail.nextElementSibling.innerText = ""
        }
    }

    if (id === "pass") {
        if (!resultPass) {
            pass.parentElement.classList.add("error")
            pass.nextElementSibling.innerText = "Invalid password"
        }
        else {
            pass.parentElement.classList.remove("error")
            pass.nextElementSibling.innerText = ""
        }
    }
}


handleOnFocus = (e) => {
    e.target.parentElement.classList.add("active")
}

handleOnBlur = (e) => {

    let id = e.target.id;
    let value = e.target.value;

    if (id === "fname") {
        if (!value) {
            e.target.parentElement.classList.add("error");
            e.target.nextElementSibling.innerText = "Please fill first name";
        }

        else {
            e.target.parentElement.classList.remove("error");
            e.target.nextElementSibling.innerText = "";
        }
    }

    if (id === "lname") {
        if (!value) {
            e.target.parentElement.classList.add("error");
            e.target.nextElementSibling.innerText = "Please fill last name";
        }

        else {
            e.target.parentElement.classList.remove("error");
            e.target.nextElementSibling.innerText = "";
        }
    }

    if (id === "email") {
        if (!value) {
            e.target.parentElement.classList.add("error")
            e.target.nextElementSibling.innerText = "Please fill email address"
        }

        else {
            e.target.parentElement.classList.remove("error");
            e.target.nextElementSibling.innerText = "";
        }
    }

    if (id === "pass") {
        if (!value) {
            e.target.parentElement.classList.add("error")
            e.target.nextElementSibling.innerText = "Please fill password"
        }

        else {
            e.target.parentElement.classList.remove("error");
            e.target.nextElementSibling.innerText = "";
        }
    }

    if (!e.target.value) {
        e.target.parentElement.classList.remove("active")
    }
}