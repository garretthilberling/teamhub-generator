const Member = require('../lib/Member');

test('creates member object', () => {
    const member = new Member('Bob');

    expect(member.name).toBe('Bob');
    expect(member.id).toHaveLength(7);
    expect(member.getRandom()).toEqual(expect.any(Number));
});

test('email is in valid format', () => {
    const member = new Member('Bob','bob@gmail.com');

    expect(member.isValidEmail()).toBeTruthy();
});

