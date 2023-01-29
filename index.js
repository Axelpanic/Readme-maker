const inquirer = require('inquirer');
const fs = require('fs');

async function init() {
    try {
        const userInputs = await inquirer.promt;

        const readIt = generateReadMe(inputs);

        await writeFileAsync('Readme.md', readIt);

    } catch (error) {
        console.log(error);
    }
};

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the name of the project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'What is the description of the project',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Info for installation?',
            name: 'install',
        },
        {
            type: 'input',
            message: 'Usage Information?',
            name: 'use',
        },
        {
            type: 'input',
            message: 'Test instructions?',
            name: 'test',
        },
        {
            type: 'input',
            message: 'License information?',
            name: 'license',
        },
        {
            type: 'input',
            message: 'What is your github user name?',
            name: 'gitname',
        },
        {
            type: 'input',
            message: 'where is your project deployed',
            name: 'deploy',
        }
    ])

    .then((response) => {
        const prompt = {
            name: response.username,
            location: response.location,
            bio: response.bio,
            linkUserName: response.linkUserName,
            gitUserName: response.gitUserName,
        }
        console.log(prompt);
    });

init();