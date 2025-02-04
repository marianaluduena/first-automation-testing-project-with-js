import NewUser from "../classes/newUser.js";


let objUser = new NewUser();

objUser.name = "John";
objUser.lastName ="Watson";
objUser.userName = "j-Watson";
objUser.password = "doctor-Watson";
objUser.confirmPassword = "doctor-Watson";
objUser.gender = "Male";


objUser.fillRegisterForm();
//objUser.saveNewUser();