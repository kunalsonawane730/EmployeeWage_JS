console.log("***** Welcome To Email Validation *****");

const emailRegex = RegExp("^[a-zA-Z][.@a-zA-Z]*$");

function validateEmail(email){
    if(emailRegex.test(email))
        console.log(email + " : Valid EMAIL !!");
    else
        throw email + " : EMAIL is Invalid !";
}

try{
    validateEmail("abc.xyz@bridgelabz.co.in");
    validateEmail(".abc@abc.com");
}
catch(e){
    console.error(e);
}