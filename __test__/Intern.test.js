const Intern = require('../lib/Intern');

test('creates a intern object', () => {
    const intern = new Intern('Billie', '1234567','billie@knights.ucf.edu','UCF');
    const school = 'UCF';

    expect(intern.name).toBe('Billie');
    expect(intern.id.length).toEqual(7);
    expect(intern.school).toEqual(expect.any(String));
    expect(intern.isValidSchool(school)).toBeTruthy();
});