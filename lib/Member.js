class Member {
    constructor(name,email) {
        this.name = name;
        this.id = `${this.getRandom()}`;
        this.email = email;
    }

    getRandom() {
        return Math.floor(1000000 + Math.random() * 9000000);
    }


    isValidEmail() {
        //(a-z, A-Z, 0-9, symbols) @ (a-z, A-Z) . (a-z, A-Z)
        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z-]+(?:\.[a-zA-Z-]+)*$/; //using this to test for valid regex associated with standard email format

        return this.email.match(re);
    }
}

module.exports = Member;