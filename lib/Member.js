class Member {
    constructor(name,email) {
        this.name = name;
        this.id;
        if(this.id === undefined) {
            this.id = this.getRandom();
        }; //if the user decides not to input a user ID, one will be randomly generated
        this.email = email;
    }

    getRandom() {
        return Math.floor(1000000 + Math.random() * 9000000); //will return a random id number that is 7 digits long
    }

    isValidID(id) {
        if(id === undefined) { //if the user decides to use a random id
            if (this.id.toString().length === 7 && Number.isInteger(this.id)) { //we have to convert the id to a string to get the length
                return true;
            }
        } else {
            this.id = id;
            if (this.id.toString().length === 7 && Number.isInteger(this.id)) { //so we can use this to check the user answer
                return true;
            }
        } 
    }


    isValidEmail(email) {
        //(a-z, A-Z, 0-9, symbols) @ (a-z, A-Z) . (a-z, A-Z)
        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z-]+(?:\.[a-zA-Z-]+)*$/; //using this to test for valid regex associated with standard email format
        const emailInput = email;

        if (emailInput.match(re)) { //if it matches the regex, we return "true"
            return true;
        }
    }
}

module.exports = Member;