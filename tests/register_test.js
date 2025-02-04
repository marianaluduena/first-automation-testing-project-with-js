import NewUser from "../classes/newUser.js";


let objUser = new NewUser("j-Watson-123", "j-Watson-123");

objUser.name = "John";
objUser.lastName ="Watson";
objUser.userName = "j-Watson";
objUser.gender = "Male";

if (objUser.password == "j-Watson-123"){

console.log("Password successfully created. TEST PASSED");

} else {

    console.log("Password should have minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number. TEST FAILED");
}

/* Never do this:

objUser.password = "doctor-Watson";
objUser.confirmPassword = "doctor-Watson";

*/


objUser.fillRegisterForm();
//objUser.saveNewUser();

objUser = new NewUser("123", "123");

if (objUser.password == "123"){

    console.log("Password should have minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number. TEST FAILED");

    
    } else {
    
        console.log("Password successfully created. TEST PASSED");
    }

objUser.name = "Anna";
objUser.lastName = "Schwab";
objUser.userName = "a_schwab";
objUser.gender = "Female";
objUser.fillRegisterForm();

