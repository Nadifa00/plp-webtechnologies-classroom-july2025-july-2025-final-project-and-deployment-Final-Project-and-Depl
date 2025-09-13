//form validation
document.getElementById("myForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let preferedDate = document.getElementById('date').value.trim();
    let department = document.getElementById('department').value.trim();
    let message = document.getElementById('message').value.trim();

    //clear previous error messages
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("dateError").innerText = "";
    document.getElementById("departmentError").innerText = "";
    document.getElementById("messageError").innerText = "";

    if(name === "") {
        document.getElementById("nameError").style.color = "red";
        document.getElementById("nameError").innerText = "Name is required.";
        isValid = false;
    } else if(name.length < 3) {
        document.getElementById("nameError").style.color = "red";
        document.getElementById("nameError").innerText = "Name must be at least 3 characters.";
        isValid = false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email === "") {  
        document.getElementById("emailError").style.color = "red";
        document.getElementById("emailError").innerText = "Email is required.";
        isValid = false;
    } else if(!email.match(emailPattern)) {
        document.getElementById("emailError").style.color = "red";
        document.getElementById("emailError").innerText = "Invalid email format.";
        isValid = false;
    }
    
    //check if all validations passed
    if(isValid) {
        //submit form or perform desired actions
        alert("Appointment booked successfully!");
        document.getElementById("myForm").reset(); //reset form fields
    }

};