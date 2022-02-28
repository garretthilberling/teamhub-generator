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
                if (new Manager().isValidEmail(emailInput)) {
                    return emailInput;
                } else { 
                    return ''; //if the email is in an invalid format the answer will be cleared
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
            console.log('Manager information updated! Output:');
            setTimeout(() => {
                console.log('');
                console.log(`   Name: ${this.manager.name}`);
                console.log(`   ID#: ${this.manager.id}`);
                console.log(`   Email: ${this.manager.email}`);
                console.log(`   Phone Number: ${this.manager.number}`);
                console.log('');
            },800)

            setTimeout(() => {
            inquirer
            .prompt([
                {
                    type: 'confirm',
                    name: 'managerConfirm',
                    message: 'Is this information correct? (if "no": manager input will restart)',
                },
                {
                    type: 'list',
                    name: 'progress',
                    message: 'What would you like to do?',
                    choices:['Add engineer', 'Add intern', 'Save my team']
                    
                }
            ])
            .then(({ managerConfirm, progress }) => {
                if (managerConfirm) {
                    if (progress = 'Add engineer') {
                        this.engineerInit();
                    } else if (progress = 'Add intern') {
                        this.internInit();
                    } else {
                        this.endForm();
                    }
                } else {
                    this.managerInput();
                }
            })
        }, 1600);
        })
}

Team.prototype.engineerInit = function () {
    console.log('');
    console.log('Input the information of the engineers on your team:')
    setTimeout(() => {
        console.log('');
        this.engineerInput();
    }, 1000);
}

Team.prototype.engineerInput = function () {
    inquirer
    .prompt([
        {
            type: 'text',
            name: 'firstname',
            message: 'Dev First Name:'
        },
        {
            type: 'text',
            name: 'lastname',
            message: 'Dev Last Name:'
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
                if (new Engineer().isValidID(parseInt(idInput))) { //creates object on the fly so we can access its method to use for validation
                    return true;
                } else {
                    console.log('')
                    console.log(`Invalid ID! please try again.`);
                    return false;
                }
            },
            filter: idInput => {
                if (new Engineer().isValidID(parseInt(idInput))) { //if the answer is invalid we clear the answer
                    return idInput;
                } else { 
                    return '';
                }
            }
        },
        {
            type: 'text',
            name: 'email',
            message: 'Dev Email (ex: example@email.com):',
            validate: emailInput => {
                if (new Engineer().isValidEmail(emailInput)) {
                    return true;
                } else {
                    console.log('')
                    console.log('Invalid email! please try again.');
                    return false;
                }
            },
            filter: emailInput => {
                if (new Engineer().isValidEmail(emailInput)) {
                    return emailInput;
                } else { 
                    return ''; //if the email is in an invalid format the answer will be cleared
                } 
            }
        },
        {
            type: 'text',
            name: 'github',
            message: 'Dev Github Username:'
        }
    ])
    .then(({ firstname,lastname,id,email,github }) => {
        const firstName = firstname.trim(); //getting rid of excess spaces
        const lastName = lastname.trim();
        const engineerName = `${firstName.charAt(0).toUpperCase() + firstName.slice(1)} ${lastName.charAt(0).toUpperCase() + lastName.slice(1)}`; //ensures first and last name are capitalized

        const githubProfile = `github.com/${github}`

        this.tempArr.push(new Engineer(engineerName,id,email,githubProfile));
        
        console.log('');
        console.log('Engineer information updated! Output:');
        setTimeout(() => {
            console.log('');
            console.log(`   Name: ${this.tempArr[0].name}`);
            console.log(`   ID#: ${this.tempArr[0].id}`);
            console.log(`   Email: ${this.tempArr[0].email}`);
            console.log(`   Github Page: ${this.tempArr[0].github}`);
            console.log('');
        },800)

        setTimeout(() => {
        inquirer
        .prompt([
            {
                type: 'confirm',
                name: 'engineerConfirm',
                message: 'Is this information correct? (if "no": engineer input will restart)'
            },
            {
                type: 'confirm',
                name: 'addEngineer',
                message: 'Add another engineer?',
                when: ({ engineerConfirm }) => {
                    if (engineerConfirm) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            {
                type: 'list',
                name: 'progress',
                message: 'What would you like to do?',
                choices:['Add intern', 'Save my team'],
                when: ({ engineerConfirm, addEngineer }) => {
                    if (engineerConfirm && addEngineer === false) {
                        return true;
                    } else {
                        return false;
                    }
                }
                
            }
        ])
        .then(({ engineerConfirm, addEngineer, progress }) => {
            if (engineerConfirm) {
                this.engineer.push(this.tempArr);
                this.tempArr = []; //we need to clear this array each time.

                if (addEngineer) {
                    this.engineerInput();
                } else if (progress = 'Add intern') {
                    this.internInit();
                } else { //if 'Save my team' is chosen
                    this.endForm();
                }
            } else {
                this.tempArr = [];
                this.engineerInput();
            }
        })
    }, 1600);
    })
}

Team.prototype.internInit = function () {
    console.log('');
    console.log('Finally, input the information of the interns on your team:')
    setTimeout(() => {
        console.log('');
        this.internInput();
    }, 1000);
}

Team.prototype.internInput = function () {
    inquirer
    .prompt([
        {
            type: 'text',
            name: 'firstname',
            message: 'Intern First Name:'
        },
        {
            type: 'text',
            name: 'lastname',
            message: 'Intern Last Name:'
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
                if (new Intern().isValidID(parseInt(idInput))) { //creates object on the fly so we can access its method to use for validation
                    return true;
                } else {
                    console.log('')
                    console.log(`Invalid ID! please try again.`);
                    return false;
                }
            },
            filter: idInput => {
                if (new Intern().isValidID(parseInt(idInput))) { //if the answer is invalid we clear the answer
                    return idInput;
                } else { 
                    return '';
                }
            }
        },
        {
            type: 'text',
            name: 'email',
            message: 'Intern Email (ex: example@email.edu):',
            validate: emailInput => {
                if (new Intern().isValidEmail(emailInput)) {
                    return true;
                } else {
                    console.log('')
                    console.log('Invalid email! please try again.');
                    return false;
                }
            },
            filter: emailInput => {
                if (new Intern().isValidEmail(emailInput)) { 
                    return emailInput;
                } else { 
                    return ''; //if the email is in an invalid format the answer will be cleared
                } 
            }
        },
        {
            type: 'text',
            name: 'school',
            message: "Name of intern's University (abbreviated, ex: 'UCF'):",
            validate: schoolInput => {
                if (new Intern().isValidSchool(schoolInput)) {
                    return true;
                } else {
                    console.log('')
                    console.log('Invalid school! Please try again (must be abbreviated).')
                    return false;
                }
            } 
        }
    ])
    .then(({ firstname,lastname,id,email,school }) => {
        const firstName = firstname.trim(); //getting rid of excess spaces
        const lastName = lastname.trim();
        const engineerName = `${firstName.charAt(0).toUpperCase() + firstName.slice(1)} ${lastName.charAt(0).toUpperCase() + lastName.slice(1)}`; //ensures first and last name are capitalized

        this.tempArr.push(new Intern(engineerName,id,email,school));
        
        console.log('');
        console.log('Intern information updated! Output:');
        setTimeout(() => {
            console.log('');
            console.log(`   Name: ${this.tempArr[0].name}`);
            console.log(`   ID#: ${this.tempArr[0].id}`);
            console.log(`   Email: ${this.tempArr[0].email}`);
            console.log(`   University: ${this.tempArr[0].school}`);
            console.log('');
        },800)

        setTimeout(() => {
        inquirer
        .prompt([
            {
                type: 'confirm',
                name: 'internConfirm',
                message: 'Is this information correct? (if "no": intern input will restart)'
            },
            {
                type: 'confirm',
                name: 'addIntern',
                message: 'Add another intern?',
                when: ({ internConfirm }) => {
                    if (internConfirm) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            {
                type: 'list',
                name: 'progress',
                message: 'What would you like to do?',
                choices:['Add engineer', 'Save my team'],
                when: ({ internConfirm, addIntern }) => {
                    if (internConfirm && addIntern === false) {
                        return true;
                    } else {
                        return false;
                    }
                }
                
            }
        ])
        .then(({ internConfirm, addIntern, progress }) => {
            if (internConfirm) {
                this.intern.push(this.tempArr);
                this.tempArr = []; //we need to clear this array each time.

                if (addIntern) {
                    this.internInput();
                } else if (progress = 'Add engineer') {
                    this.engineerInit();
                } else { //if 'Save my team' is chosen
                    this.endForm();
                }
            } else {
                this.tempArr = [];
                this.internInput();
            }
        })
    }, 1600);
    })
}

Team.prototype.endForm = function () {
    console.log('');
    console.log(this);
    console.log('');
    console.log('Team has been successfully stored!');
    setTimeout(() => {
    console.log('Find the generated HTML in the "dist" folder.')
    }, 800);
    setTimeout(() => {
        console.log('Thank you for using TeamHub-Generator!')
    }, 1500);
}

Team.prototype.writeFile = function () {

}

module.exports = Team;