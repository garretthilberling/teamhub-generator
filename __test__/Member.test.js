const Member = require('../lib/Member');

test('creates member object', () => {
    const member = new Member('Bob','bob@gmail.com');

    expect(member.name).toBe('Bob');
    expect(member.isValidID).toBeTruthy(); //making sure ID is a 7 digit integer
    expect(member.isValidEmail()).toBeTruthy(); //making sure email is in valid format
});

