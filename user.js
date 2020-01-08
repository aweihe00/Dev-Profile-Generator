const inquirer = require('inquirer');
const axios = require('axios');


module.exports = function User() {

    this.userDetails = {};

    this.getUserDetails = async function () {
        // Get user's github profile handle and their favorite color
        const userInput =
            await inquirer
                .prompt([
                    {
                        type: "input",
                        message: "Enter your GitHub username: ",
                        name: "login"
                    },
                    {
                        type: "list",
                        name: "color",
                        choices:["green", "blue", "pink", "red"],
                        message: "Pick your favorite color from these options."
                    }
                ]);

        let userDetails = await axios.get(`https://api.github.com/users/${userInput.login}`);

        // Get user's repos' star count
        let userRepos = await axios.get(`https://api.github.com/users/${userInput.login}/repos`);

        let totalStarCount = 0;
        for (let index = 0; index < userRepos.data.length; index++) {
            const element = userRepos.data[index];
            totalStarCount += element['stargazers_count'];
        }

        this.userDetails = {
            ...userInput,
            ...userDetails.data,
            'stargazers_count': totalStarCount
        };

        return this.userDetails;
    }
}

