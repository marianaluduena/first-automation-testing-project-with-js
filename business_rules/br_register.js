/*BUSINESS RULES: REGISTER 

Class NewUser:

- Must have name, last name, user name, password, confirm password and specify gender.

- Password should have minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number.

- Gender Male or Female must be specified to send the form.

*/ 

class NewUser{

    #name = "Nameless";
    #lastName = "Unknown";
    #userName = "empty";
    #password = "123";
    #confirmPassword = "123";
    #gender = "Female";

// Setters and getters to access then the variables 


set name(value){

    this.#name = value;
}


get name(){

    return this.#name;
}


set lastName(value){

    this.#lastName = value;
}

get lastName(){

    return this.#lastName;
}

set userName(value){

    this.#userName = value;
}


get userName(){

    return this.#userName;
}


// For security reasons, just the getters for password and confirm password will be here

get password(){

    return this.#password;
}


get confirmPassword(){

    return this.#confirmPassword;
}


set gender(value){

    this.#gender = value;
}


get gender(){

    return this.#gender;
}

}