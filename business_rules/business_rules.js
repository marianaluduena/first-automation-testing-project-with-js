import NewUser from "../classes/newUser.js";

/**
 * 
Class NewUser:

- Must have name, last name, user name, password, confirm password and specify gender.

- Password should have minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number.

- Gender Male or Female must be specified to send the form. 

 */

class BR{

// Save new user

/**
 * 
 * @param {NewUser} newUser 
 */

static saveNewUser(newUser){

console.log(`User ${newUser.userName} successfully registered`);

}

}

export default BR;