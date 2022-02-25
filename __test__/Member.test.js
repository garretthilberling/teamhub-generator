const { expect } = require('@jest/globals');
const Member = require('../lib/Member');

test('email is in valid format', () => {
    const member = new Member('Rick');
    const email = 'garretthilberling@gmail.com'

    expect(email).toBe(isValidEmail(email));

})