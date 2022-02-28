const Member = require('./Member');

class Manager extends Member {
    constructor(name,id,email,number='') {
        super(name,id,email);
        this.number = number;
    }

    isValidPhoneNumber(number) {
        //Accepts: ###-###-####, (###)###-####, ### ### ###, ###.###.####, +## (###)###-####
        const re = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/; //using this to test for valid regex associated with standard phone number formats
        const numberInput = number;
    
        if(numberInput.match(re)) {
            return true;
        }
    }
}

module.exports = Manager;