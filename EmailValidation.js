console.log("***** Welcome To Email Validation *****");

const emailRegex = RegExp("[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[.a-z]*");

function validateEmail(email){
    if(emailRegex.test(email))
        console.log(email + " : Valid EMAIL !!");
    else
        throw email + " : EMAIL is Invalid !";
}

try{
    validateEmail("abc.ash@bridgelabz.co.in");
    validateEmail("abc()*@gmail.com");
}
catch(e){
    console.error(e);
}