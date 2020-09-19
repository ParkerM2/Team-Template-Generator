const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util")
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const writeFileAsync = util.promisify(fs.writeFile);
const render = require("./lib/htmlRenderer")
// Array for all of the team member objects to be pushed
teamMembers = [];
// generate questions for team
function promptMemberQuestions() {
    return inquirer.prompt([
        {
            type: "list",
            message: "Are you an Engineer, Manager, or Intern?",
            choices: 
            [
                "Engineer",
                "Manager",
                "Intern",
                "Done"
            ],
            name: "Role"
        }]).then(answers => {
            // call functions(that contain prompts) for each of the team members on done initialize the writing of the new html file with the array of team members objects
            switch (answers.Role){
                case 'Engineer':
                    getEngineerInfo();
                break;
                
                case 'Manager':
                    getManagerInfo();
                break;

                case 'Intern':
                    getInternInfo();
                break;
                default:
                // call function to build team page
                console.log("build team page")
                buildTeamPlate();
                
            };
        })
};
promptMemberQuestions();
// creating function for calling the managers questions
function getManagerInfo() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter your Name:",
            name: "name"

        },
        {   
            type: "input",
            message: "Enter your Manager ID #",
            name: "id"
        },
        {
            type: "input",
            message: "Enter your email:",
            name: "email"
        },
        {
            typle: "input",
            message: "Enter your office Number:",
            name: "officeNumber"
        }
    ]).then(answers => {
        console.log({ answers });

        const {name, id, email, officeNumber} = answers;
        const newManager = new Manager(name, id, email, officeNumber);
        teamMembers.push(newManager);
        promptMemberQuestions();
    })
}

function getEngineerInfo() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter Name:",
            name: "name"
        },
        {
            type: "input",
            message: "Enter your id:",
            name: "id"
        },
        {
            type: "input",
            message: "Enter your email address",
            name: "email"
        },
        {
            type: "input",
            message: "Enter your github username",
            name: "github"
        }
    ]).then(answers => {
        //creating answers , then add the info to the engineer constructer * .lib/Engineer *
        const {name, id, email, github} = answers;
        const newEngineer = new Engineer(name, id, email, github);
        //adding the newly created obj new engineer to the declared array teamMembers
        teamMembers.push(newEngineer);
        promptMemberQuestions();
    })
}

// Function for intern prompts
function getInternInfo() {
    inquirer.prompt([
        {
            type: "input",
            message: "whats your name?",
            name: "name",
        },
        {
            typle: "input",
            message: "Intern Id:",
            name: "id"
        },
        {
            input:"input",
            message: "whats your email",
            name: "email"
        },
        {
            type: "input",
            message: "What school intern",
            name: "school"
        }
    ]).then(answers => {
        const {name,id,email,school} = answers;
        const newIntern = new Intern(name,id,email,school);
        teamMembers.push(newIntern);
        promptMemberQuestions();
    })
}
// function to build the HTML with fs.writefilesynce
function buildTeamPlate() {
    console.log(teamMembers)
    fs.writeFileSync(outputPath, render(teamMembers), 'utf-8')
}
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
