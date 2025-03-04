// 1-exam
class User {
  constructor(public name: string, public email: string, public age: number) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
}

class UserAdmin extends User {
  constructor(public name: string, email: string, age: number) {
    super(name, email, age);
  }
}

class Moderator extends User {
  constructor(
    name: string,
    email: string,
    age: number,
    isActive: boolean = true
  ) {
    super(name, email, age);
  }
}
class Admin extends Moderator {
  constructor(
    name: string,
    email: string,
    age: number,
    isActive: boolean = true
  ) {
    super(name, email, age, isActive);
  }
}

class SuperAdmin extends Admin {
  constructor(
    name: string,
    email: string,
    isActive: boolean = true,
    age: number,
    adminLevel: number
  ) {
    super(name, email, age, isActive);
  }
}

const user1 = new User('John', 'John@gmail.com', 26);

console.log(user1);
