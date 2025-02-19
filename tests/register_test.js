import NewUser from "../classes/newUser.js";
import BR_Register from "../business_rules/br_register.js";

// HAPPY PATH TEST

let objUser = new NewUser("j-Watson-123", "j-Watson-123"); // pass and confirm pass are this way, because they don't have setters being sensitive data

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

/* Never do this, it won't work because password and confirm password don't have setters being sensitive data:

objUser.password = "doctor-Watson";
objUser.confirmPassword = "doctor-Watson";

*/

// NEGATIVE TEST CASE: NOT MATHCING PASSWORD FORMAT

objUser = new NewUser("123", "123");

objUser.name = "Anna";
objUser.lastName = "Schwab";
objUser.userName = "a_schwab";
objUser.gender = "Female";

objUser.fillRegisterForm();

if (objUser.name || objUser.lastName == Number){

    console.log("Character type not allowed. Just text format. TEST FAILED");
   
    } else {

         // The new user will be successfully stored only if the name and last name match a text format

         BR_Register.saveNewUser(objUser);
    
        console.log("User successfully registered. TEST PASSED");
 
       
    }


// NEGATIVE TEST CASE: Numbers in Name and Last Name fields

objUser = new NewUser("justTest1", "justTest1");

objUser.name = "123";
objUser.lastName = "123";
objUser.userName = "tester";
objUser.gender = "Male";

objUser.fillRegisterForm();