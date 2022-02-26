const Member = require('./Member');

class Engineer extends Member {
    constructor(name,id,email,github) {
        super(name,id,email);

        this.githubName = github;
        this.githubPage = this.genGithub();
    }

    genGithub() {
        return `https://github.com/${this.githubName}`
    }
}

module.exports = Engineer;