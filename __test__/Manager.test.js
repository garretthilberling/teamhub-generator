const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Bob', '123-456-7890');
    const numberInput = '123-456-7890';

    expect(manager.name).toBe('Bob');
    expect(manager.isValidPhoneNumber(numberInput)).toBeTruthy(); //ensures phone number is in correct format
});