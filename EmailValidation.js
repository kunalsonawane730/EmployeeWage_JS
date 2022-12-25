console.log("***** Welcome To Email Validation *****");

const emailRegex = RegExp("[a-zA-Z]*[@]{1}[a-z0-9]+[.]{1}[.a-z]*$");

function validateEmail(email){
    if(emailRegex.test(email))
        console.log(email + " : Valid EMAIL !!");
    else
        throw email + " : EMAIL is Invalid !";
}

try{
    validateEmail("abc@bridgelabz.co.in");
    validateEmail("abc");
}
catch(e){
    console.error(e);
}