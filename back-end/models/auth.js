class Auth {
    constructor(id, fullname, email, password, gender, age, phoneNumber ) {
            this.id = id;
            this.fullname = fullname;
            this.email = email;
            this.password = password;
            this.gender = gender;
            this.age = age;
            this.phoneNumber = phoneNumber;
    }
}

module.exports = Auth;