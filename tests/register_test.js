import NewUser from "../classes/newUser.js";
import BR_Register from "../business_rules/br_register.js";

// HAPPY PATH TEST

let objUser = new NewUser("j-Watson-123", "j-Watson-123");

objUser.name = "John";
objUser.lastName ="Watson";
objUser.userName = "j-Watson";
objUser.gender = "Male";

objUser.fillRegisterForm();

if (objUser.password == "j-Watson-123"){

 // saveNewUser is a static function, that's why I call it directly by naming it's class BR

    BR_Register.saveNewUser(objUser);

console.log("Password successfully created. TEST PASSED");

} else {

    console.log("Password should have minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number. TEST FAILED");
}

/* Never do this:

objUser.password = "doctor-Watson";
objUser.confirmPassword = "doctor-Watson";

*/

// NEGATIVE TEST CASE WITH NOT MATHCING PASSWORD FORMAT

objUser = new NewUser("123", "123");

objUser.name = "Anna";
objUser.lastName = "Schwab";
objUser.userName = "a_schwab";
objUser.gender = "Female";

objUser.fillRegisterForm();

if (objUser.password == "123"){

    console.log("Password should have minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number. TEST FAILED");
   
    } else {

         // The new user will be successfully stored only if the password matches a valid format

         BR_Register.saveNewUser(objUser);
    
        console.log("Password successfully created. TEST PASSED");
 
       
    }



