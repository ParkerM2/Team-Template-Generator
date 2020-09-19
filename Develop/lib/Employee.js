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
    fetchName() {
        return this.name;
    };
    fetchId() {
        return this.id;
    };
    fetchEmail() {
        return this.email;
    };
    fetchSchool() {
        return this.school;
    };
    fetchGitHub() {
        return this.github;
    };
    fetchOfficeNumber() {
        return this.officeNumber;
    };
    // add in employee as role**
    fetchRole() {
        console.log("get to work yo");
        return ("Employee");
    }
};
module.exports = Employee;