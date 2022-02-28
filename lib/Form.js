const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Member = require('./Member');

function Team() {
    this.tempArr = [];
    this.manager;
    this.engineer = [];
    this.intern = [];
}

Team.prototype.initializeForm = function() {
    console.log('');
    console.log(`Hello! Welcome to TeamHub-Generator.`);
    setTimeout(() => { 
        console.log('');
        console.log(`Using the information provided TH-G will produce an html page displaying your team, like so:`); 
    }, 1500);
    setTimeout(() => { 
        console.log('');
        console.log(`   Manager | name | id | email | phone #`); 
    }, 3000);
    setTimeout(() => { 
        console.log(`   Engineer(s) | name | id | email | github`); 
    }, 3500);
    setTimeout(() => { 
        console.log(`   Intern(s) | name | id | email | university`); 
    }, 4000);
    setTimeout(() => { 
        console.log('');
        console.log(`To begin, provide information for the project manager.`); 
    }, 4700);

    setTimeout(() => { this.managerInput(); }, 5600);
}

Team.prototype.managerInput = function() {
    console.log('');

    inquirer
        .prompt([
        {
            type: 'text',
            name: 'firstname',
            message: 'PM First Name:'
        },
        {
            type: 'text',
            name: 'lastname',
            message: 'PM Last Name:'
        },
        {
            type: 'confirm',
            name: 'manualID',
            message: 'Manually input employee ID? (if "no": random ID will be generated)'
        },
        {
            type: 'number',
            name: 'id',
            message: `Provide an employee ID that meets the following criteria (required: must be 7 digit number)`,
            when: ({ manualID }) => {
                if (manualID) {
                    return true;
                } else {
                    return false;
                }
            },
            validate: idInput => {
                if (new Manager().isValidID(parseInt(idInput))) { //creates object on the fly so we can access its method to use for validation
                    return true;
                } else {
                    console.log('')
                    console.log(`Invalid ID! please try again.`);
                    return false;
                }
            },
            filter: idInput => {
                if (new Member().isValidID(parseInt(idInput))) { //if the answer is invalid we clear the answer
                    return idInput;
                } else { 
                    return '';
                }
            }
        },
        {
            type: 'text',
            name: 'email',
            message: 'PM Email (ex: example@email.com):',
            validate: emailInput => {
                if (new Manager().isValidEmail(emailInput)) {
                    return true;
                } else {
                    console.log('')
                    console.log('Invalid email! please try again.');
                    return false;
                }
            },
            filter: emailInput => {
                if (new Manager().isValidEmail(emailInput)) { //if the email is in an invalid format the answer will be cleared
                    console.log(emailInput);
                    return emailInput;
                } else { 
                    return '';
                } 
            }
        },
        {
            type: 'text',
            name: 'number',
            message: 'PM Phone # (ex: 123-456-7890):',
            validate: numberInput => {
                if (new Manager().isValidPhoneNumber(numberInput)) {
                    return true;
                } else {
                    console.log('')
                    console.log('Invalid phone number format! please try again.');
                    return false;
                }
            },
            filter: numberInput => {
                if (new Manager().isValidPhoneNumber(numberInput)) {
                    return numberInput;
                } else {
                    return '';
                }
            }
        }
    ])
        .then(({ firstname,lastname,id,email,number }) => {
            const firstName = firstname.trim(); //getting rid of excess spaces
            const lastName = lastname.trim();
            const managerName = `${firstName.charAt(0).toUpperCase() + firstName.slice(1)} ${lastName.charAt(0).toUpperCase() + lastName.slice(1)}`; //ensures first and last name are capitalized

            this.manager = (new Manager(managerName,id,email,number));
            
            console.log('');
            console.log(`Manager information updated! Output:
            `);
            console.log(this.manager);
            console.log('');

            inquirer
            .prompt({
                type: 'confirm',
                name: 'managerConfirm',
                message: 'Is this information correct? (if "no": manager input will restart)',
            })
            .then(({ managerConfirm }) => {
                if (managerConfirm) {
                    this.engineerInput();
                } else {
                    this.managerInput();
                }
            })
        })
}

module.exports = Team;