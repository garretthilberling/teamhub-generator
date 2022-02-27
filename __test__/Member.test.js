const Member = require('../lib/Member');

test('creates member object', () => {
    const member = new Member('Bob','bob@gmail.com');
    const emailInput = 'bob@gmail.com';
    const idInput = 1234567;
    const idInputStr = '1234567';

    expect(member.name).toBe('Bob');
    expect(member.isValidID(idInput)).toBeTruthy(); //making sure ID is a 7 digit integer
    expect(member.isValidID(parseInt(idInputStr))).toBeTruthy(); //showing it also accepts strings
    expect(member.isValidEmail(emailInput)).toBeTruthy(); //making sure email is in valid format
});

