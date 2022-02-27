const Member = require('./Member');

class Manager extends Member {
    constructor(name,id,email,number) {
        super(name,id,email);
        this.number = number;
    }

    isValidPhoneNumber() {
        //Accepts: ###-###-####, (###)###-####, ### ### ###, ###.###.####, +## (###)###-####
        const re = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/; //using this to test for valid regex associated with standard phone number formats
    
        return this.number.match(re);
    }
}

module.exports = Manager;