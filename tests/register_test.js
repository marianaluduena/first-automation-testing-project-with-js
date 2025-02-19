import NewUser from "../classes/newUser.js";
import BR_Register from "../business_rules/br_register.js";

// HAPPY PATH TEST

/* TC-001: Successfull account created

- Verify that the user can create successfully their account with valid format data.

* PREREQUISITES: None.

* STEPS:

- Go to the Login fucntionallity, and click in the Register button. 

- Fill the form with the following data:

*/

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



/* TC-002: Not matching password format

- Verify that the user CAN NOT create their account with invalid password format data.

* PREREQUISITES: None.

* STEPS:

- Go to the Login fucntionallity, and click in the Register button. 

- Fill the form with the following data:

*/

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



/* TC-003: Numbers in Name and Last Name fields

- Verify that the user CAN NOT create their account with invalid name and last name format data by entering numbers.

* PREREQUISITES: None.

* STEPS:

- Go to the Login fucntionallity, and click in the Register button. 

- Fill the form with the following data:

*/

objUser = new NewUser("justTest1", "justTest1");

objUser.name = "123";
objUser.lastName = "123";
objUser.userName = "tester";
objUser.gender = "Male";

objUser.fillRegisterForm();