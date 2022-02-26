const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Bob', '123-456-7890');

    expect(manager.name).toBe('Bob');
    expect(manager.id.length).toEqual(7);
    expect(manager.getRandom()).toEqual(expect.any(Number));
});

test('ensure phone number is in correct format', () => {
    const manager = new Manager('Bob', '1234567', 'bob@gmail.com', '123-456-7890');

    expect(manager.isValidPhoneNumber()).toBeTruthy();
});


