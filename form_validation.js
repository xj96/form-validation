function checkData() {
    
    // Prevents reload of the page
    document.getElementById('form1').addEventListener('click', function(event){
        event.preventDefault();
    });

    // Welcome message
    alert("Welcome!");
    const userName = document.getElementById("name");
    const emailId = document.getElementById("email");
    const zipCode = document.getElementById("zipcode");

    // Check if all fields are empty
    if (userName.value == "" && emailId.value == "" && zipCode.value == ""){
        alert("Please input your information in the fields below");
        return false;
    }

    // Check if there is a name entered in the name field
    if (userName.value == "") {
        alert("Please enter a name");
        userName.focus();
        return false;
    }

    // Check if there is an email entered in the email field
    if (emailId.value == "") {
        alert("Please enter an email address");
        emailId.focus();
        return false;
    }

    // Check if zipcode is a 5-digit number
    if (zipCode.value.length != 5) {
        alert("Please enter a 5-digit number")
        zipCode.focus();
        return false;
    }

    // If all is well return true
    console.log('Form submitted successfully!');
    return true;
}