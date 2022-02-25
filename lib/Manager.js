const Member = require('./Member');

class Manager extends Member {
    constructor(name,id,email,number) {
        super(name,id,email);

        this.officeNumber = number;
    }
}

module.exports = Manager;