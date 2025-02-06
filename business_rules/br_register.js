import NewUser from "../classes/newUser.js";

/**
 * 
Class BR:

- There must be a function to save the new user account.

- There must be a function to show a message to the user when their account was successfully created.

- There must be a function to find any user by ID.

 */

class BR_Register {

// Save new user

/**
 * 
 * @param {NewUser} newUser 
 */

static saveNewUser(newUser){

console.log(`User ${newUser.userName} successfully registered`);

}

// Find user by ID

/**
 * @param {Number} id of a user
 * @returns the user's id
 */

static findUserById(id){

    const users = NewUser.userId;
    const userId = users.find((objUser) => objUser.id == id);

    return userId;
}

}

export default BR_Register;