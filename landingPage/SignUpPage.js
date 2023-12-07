function submitForm(event) {
    event.preventDefault();

    // Perform form submission logic here
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Example: Display form data in console
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
}


        


