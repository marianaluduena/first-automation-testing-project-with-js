
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

export default NewUser;
