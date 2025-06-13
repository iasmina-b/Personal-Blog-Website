function validateForm() {
    let firstName = document.getElementsByName("firstName")[0].value;
    let lastName = document.getElementsByName("lastName")[0].value;
    let email = document.getElementsByName("email")[0].value;
    let birthDate = document.getElementsByName("birthDate")[0].value;
    let address = document.getElementsByName("address")[0].value;


    if (firstName === "" || lastName === "" || email === "" || birthDate === "" || address === "") {
        alert("All fields must be completed!");
        return false;
    }

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address!");
        return false;
    }

    alert("Success!");
    return true;
}
