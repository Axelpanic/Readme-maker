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

// License function and  if/else section here 
function getLicense(value) {
    if (value === "GNU AGPLv3") {
        return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
    } else if (value === "GNU GPLv3") {
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (value === "GNU LGPLv3") {
        return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
    } else if (value === "Apache 2.0") {
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (value === "Boost Software 1.0") {
        return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    } else if (value === "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else {
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    }
}

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
