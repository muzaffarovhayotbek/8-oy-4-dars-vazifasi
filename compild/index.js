"use strict";
// 1-exam
class User {
    name;
    email;
    age;
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.name = name;
        this.age = age;
        this.email = email;
    }
}
class UserAdmin extends User {
    name;
    constructor(name, email, age) {
        super(name, email, age);
        this.name = name;
    }
}
class Moderator extends User {
    constructor(name, email, age, isActive = true) {
        super(name, email, age);
    }
}
class Admin extends Moderator {
    constructor(name, email, age, isActive = true) {
        super(name, email, age, isActive);
    }
}
class SuperAdmin extends Admin {
    constructor(name, email, isActive = true, age, adminLevel) {
        super(name, email, age, isActive);
    }
}
const user1 = new User('John', 'John@gmail.com', 26);
console.log(user1);
