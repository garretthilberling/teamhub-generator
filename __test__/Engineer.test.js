const Engineer = require('../lib/Engineer');

test('creates a manager object', () => {
    const engineer = new Engineer('Rick', '1234567','rick@gmail.com','rickharris');

    expect(engineer.name).toBe('Rick');
    expect(engineer.id.length).toEqual(7);
    expect(engineer.getRandom()).toEqual(expect.any(Number));
    expect(engineer.githubName).toEqual(expect.any(String));
});