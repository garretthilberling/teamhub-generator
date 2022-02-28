const Member = require('./Member');

class Intern extends Member {
    constructor(name,id,email,school) {
        super(name,id,email);

        this.school = school;
    }

    isValidSchool(uni) {
        const re = /^[^a-z\s]*$/; // A-Z, no spaces. only something like 'FSU' will be accepted
        const schoolInput = uni;

        if (schoolInput.match(re)) {
            return true;
        }

    }
}

module.exports = Intern;