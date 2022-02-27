const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Member = require('./Member');

function Team() {
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

    setTimeout(() => { clearInterval(); }, 5200);

    setTimeout(() => {
        
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
                    const checkFormat = () => {
                        return Member.isValidID(idInput);
                    }

                    if (checkFormat.value === true) {
                        return true;
                    } else {
                        console.log('')
                        console.log(`Invalid ID! please try again.`);
                        return false;
                    }
                },
                filter: idInput => {
                    const checkFormat = () => {
                        return Member.isValidID(idInput);
                    }

                    if (checkFormat.value === false) { //if the answer is invalid we clear the answer
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
                    const checkFormat = () => {
                        if(Member.isValidEmail(emailInput) === true) {
                            return true;
                        }
                    }

                    if (checkFormat.value === true) {
                        return true;
                    } else {
                        console.log('')
                        console.log('Invalid email! please try again.');
                        return false;
                    }
                },
                filter: emailInput => {
                    const checkFormat = () => {
                        return Member.isValidEmail(emailInput);
                    }

                    if (checkFormat.value === true) { //if the email is in an invalid format the answer will be cleared
                        return emailInput;
                    } else { 
                        return '';
                    } 
                }
            },
            {
                type: 'text',
                name: 'number',
                message: 'PM Phone # (ex: 123-456-7890):'
            }   
        ])
            .then(({ firstname,lastname,id,email,number }) => {
                const firstName = firstname.trim(); //getting rid of excess spaces
                const lastName = lastname.trim();
                const managerName = `${firstName.charAt(0).toUpperCase() + firstName.slice(1)} ${lastName.charAt(0).toUpperCase() + lastName.slice(1)}`; //ensures first and last name are capitalized

                this.id = id;
                this.email = email;
                this.number = number;
                this.manager = new Manager(managerName,id,email,number);
                
                console.log(this.manager);
            })
        }, 5200)
        
}

module.exports = Team;