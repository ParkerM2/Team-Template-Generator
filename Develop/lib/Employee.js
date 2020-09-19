// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email, school, github, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
        this.github = github;
        this.officeNumber = officeNumber;
    }
    getName() {
        return this.name;
    };
    getId() {
        return this.id;
    };
    getEmail() {
        return this.email;
    };
    getSchool() {
        return this.school;
    };
    getGithub() {
        return this.github;
    };
    getOfficeNumber() {
        return this.officeNumber;
    };
    // add in employee as role**
    getRole() {
        console.log("get to work yo");
        return ("Employee");
    }
};
module.exports = Employee