const form = document.getElementById('form');
const emailId = document.getElementById('email-Id');
const password_input = document.getElementById('password-input');
const confirm_password = document.getElementById('confirm-password');

const email_error = document.getElementById('email_error');
const password_error = document.getElementById('password_error');
const confirmPass_error = document.getElementById('confirmPass_error');

emailId.addEventListener('textInput', email_verify);
password_input.addEventListener('textInput', password_verify);
confirm_password.addEventListener('textInput', confirmPass_verify);

function validation(){
    if(emailId.value.length < 9){
        emailId.style.boxShadow = "0px 0px 2px 2px red";
        email_error.style.display = "block";
        emailId.focus();
        return false;
    }
    if(password_input.value.length < 8){
        password_input.style.boxShadow = "0px 0px 2px 2px red";
        password_error.style.display = "block";
        password_input.focus();
        return false;
    }
    if(confirm_password.value.length < 8){
        confirm_password.style.boxShadow = "0px 0px 2px 2px red";
        confirmPass_error.style.display = "block";
        confirm_password.focus();
        return false;
    }
}

function email_verify(){
    if(emailId.value.length >= 8){
        emailId.style.boxShadow = "0px 0px 2px 2px silver";
        email_error.style.display = "none";
        return true;
    }
}

 function password_verify(){
    if(password_input.value.length >= 8 ){
        password_input.style.boxShadow = "0px 0px 2px 2px silver";
        password_error.style.display = "none";
        return true;
    }
}

function confirmPass_verify(){
    if(confirm_password.value.length >= 8){
        confirm_password.style.boxShadow = "0px 0px 2px 2px silver";
        confirmPass_error.style.display = "none";
        return true;
}
}
