// step 1. add eventListener to submit button 
document.getElementById('btn-submit').addEventListener('click', function () {
    // get the email and password 
    const emailField = document.getElementById('user-email');
    // add .value to get inputs
    const email = emailField.value;
    // get password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // IMPORTANT!! DO NOT DO THIS AND ALWAYS CHECK EMAIL AND PASSWORD AT SERVER SIDE 
    if (email === 'abc@gmail.com' && password === 'season') {
        window.location.href = 'bank.html';
    }
    else {
        alert('invalid user detected');
    }

})



// console.log('hello');