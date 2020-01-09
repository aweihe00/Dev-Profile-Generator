# Dev-Profile-Generator

## Business Context
When preparing a report for stakeholders, it is important to have up-to-date information about members of the development team. Rather than navigating to each team member's GitHub profile, a command-line application will allow for quick and easy generation of profiles in PDF format.

## Minimum Requirements:

Functional, deployed application.

GitHub repository with a unique name and a README describing project.

The application generates a PDF resume from the user provided GitHub profile.

The generated resume includes a bio image from the user's GitHub profile.

The generated resume includes the user's location and a link to their GitHub profile.

The generated resume includes the number of: public repositories, followers, GitHub stars and following count.

The background color of the generated PDF matches the color that the user provides.

GIVEN the developer has a GitHub profile

WHEN prompted for the developer's GitHub username and favorite color

THEN a PDF profile is generated

![Capture](https://user-images.githubusercontent.com/56567819/72025907-49296700-323f-11ea-9e0b-5f94bd11999c.PNG)

## Demo

https://drive.google.com/file/d/1faqlo5EyQY3M-hn77Fgf_KECub7A_18d/view

Create a command-line application that dynamically generates a PDF profile from a GitHub username. The application will be invoked with the following command:
node index.js
The user will be prompted for a favorite color, which will be used as the background color for cards.
The PDF will be populated with the following:

Profile image
User name
Links to the following:

User location via Google Maps
User GitHub profile
User blog

User bio
Number of public repositories
Number of followers
Number of GitHub stars
Number of users following

## Following the common templates for user stories, we can frame this challenge as follows:

AS A product manager
I WANT a developer profile generator
SO THAT I can easily prepare reports for stakeholders
Refer to the design mockup.