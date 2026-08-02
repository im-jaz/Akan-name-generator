# Akan Origins

## Project Description

Akan Origins is a web application that allows users to discover their traditional Akan name based on their date of birth and gender. The application uses the Akan naming formula to determine the day of the week a user was born, then assigns the corresponding Akan name. It also reveals a guardian animal and personality traits.

The website introduces users to the history of Akan names before allowing them to generate and reveal their Akan identity.

## Author

**Jazmine**

## Setup Instructions

1. Clone the repository.

```bash
git clone <repository-url>
```

2. Navigate into the project folder.

```bash
cd akan-origins
```

3. Open the project using Visual Studio Code.

4. Open `index.html` in your browser using Live Server or your preferred browser.

No additional installations are required.

## BDD (Behavior-Driven Development)

| Behavior | Input | Output |
|----------|-------|--------|
| User enters a valid name, birth date and gender | Name, Date of Birth, Gender | Akan name is generated |
| User leaves the name empty | Empty name | Alert asking the user to enter a name |
| User leaves the date empty | No date selected | Alert asking the user to select a date |
| User does not select a gender | No gender selected | Alert asking the user to select a gender |
| User enters an invalid year | Year outside valid range | Alert informing the user to enter a valid year |
| User enters an invalid day for a month | Invalid date | Alert informing the user that the date is invalid |
| User submits valid information | Valid inputs | Results page displays Akan name, guardian animal and personality traits |

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Google Fonts
- Font Awesome

## Contact Information

**Name:** Jazmine

**Email:** amungajazmine@gmail.com

**GitHub:** https://github.com/your-github-username

---

## License

MIT License

Copyright (c) 2026 Jazmine

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software.
