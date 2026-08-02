
// Akan Name Generator

// Male Akan names
const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"
];

// Female Akan names
const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama"
];

// Days of the week
const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

// Guardian animals
const guardians = [

    {
        animal: "Python",
        akan: "Eke",
        image: "images/python.png",
        description: "Wise, patient and deeply connected to tradition.",
        traits: [
            "Wisdom",
            "Patience",
            "Protection",
            "Mystery"
        ]
    },

    {
        animal: "Spider",
        akan: "Anansi",
        image: "images/spider.png",
        description: "Creative and clever. A natural storyteller.",
        trait: [
            "Strategy",
        ]
    },

    {
        animal: "Leopard",
        akan: "Leopard",
        image: "images/leopard.png",
        description: "Fearless and courageous in every challenge.",
        traits: [
            "Power",
        ]
    },

    {
        animal: "Elephant",
        akan: "Elephant",
        image: "images/elephant.png",
        description: "Strong, dependable and respected.",
        traits: [
            "Strength",
        ]
    },

    {
        animal: "Crocodile",
        akan: "Crocodile",
        image: "images/crocodile.png",
        description: "Patient, resilient and highly adaptable.",
        traits: [
            "Resilience",
        ]
    },

    {
        animal: "Eagle",
        akan: "Eagle",
        image: "images/eagle.png",
        description: "Visionary and ambitious.",
        traits: [
            "Determination", 
        ]
    },

    {
        animal: "Lion",
        akan: "Lion",
        image: "images/lion.png",
        description: "Bold, noble and inspiring.",
        traits: [
            "Authority",
        ]
    }

];

// DISCOVER PAGE

const form = document.getElementById("akanForm");

if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const firstName = document.getElementById("name").value.trim();

        const dob = document.getElementById("dob").value;

        const gender = document.querySelector('input[name="gender"]:checked');

        // Validation

        if (firstName === "") {
            alert("Please enter your first name.");
            return;
        }

        if (dob === "") {
            alert("Please choose your date of birth.");
            return;
        }

        if (!gender) {
            alert("Please select your gender.");
            return;
        }

        // Split date into year, month and day

        const parts = dob.split("-");

        const year = parseInt(parts[0]);

        const month = parseInt(parts[1]);

        const day = parseInt(parts[2]);

        // Assignment validation

        if (day < 1 || day > 31) {
            alert("Day must be between 1 and 31.");
            return;
        }

        if (month < 1 || month > 12) {
            alert("Month must be between 1 and 12.");
            return;
        }

        // Century and year

        const CC = Math.floor(year / 100);

        const YY = year % 100;

        // Akan formula

        let dayIndex = (

            Math.floor(CC / 4)

            - (2 * CC)

            - 1

            + Math.floor((5 * YY) / 4)

            + Math.floor((26 * (month + 1)) / 10)

            + day

        ) % 7;

        // Ensure positive result

        if (dayIndex < 0) {
            dayIndex += 7;
        }

        // Akan name

        let akanName;

        if (gender.value === "male") {

            akanName = maleNames[dayIndex];

        } else {

            akanName = femaleNames[dayIndex];

        }

        // Guardian

        const guardian = guardians[dayIndex];

        // Save data

        const result = {

            firstName: firstName,

            gender: gender.value,

            birthDay: weekDays[dayIndex],

            akanName: akanName,

            guardianAnimal: guardian.animal,

            guardianAkan: guardian.akan,

            guardianImage: guardian.image,

            guardianDescription: guardian.description,

            traits: guardian.traits

        };

        localStorage.setItem(
            "akanResult",
            JSON.stringify(result)
        );

        // Go to results page

        window.location.href = "results.html";

    });

}


// RESULTS PAGE


const storedResult = JSON.parse(localStorage.getItem("akanResult"));

if (storedResult && document.getElementById("welcomeMessage")) {

    document.getElementById("welcomeMessage").textContent =
        `Welcome, ${storedResult.firstName}!`;

    document.getElementById("akanName").textContent =
        storedResult.akanName;

    document.getElementById("birthDay").textContent =
        storedResult.birthDay;

    document.getElementById("genderResult").textContent =
        storedResult.gender;

    document.getElementById("guardianAnimal").textContent =
        `${storedResult.guardianAkan} (${storedResult.guardianAnimal})`;

    const description = document.getElementById("guardianDescription");

    if (description) {
        description.textContent =
            storedResult.guardianDescription;
    }

    const image = document.getElementById("guardianImage");

    if (image) {

        image.src = storedResult.guardianImage;

        image.alt = storedResult.guardianAnimal;

    }

    const traitsList = document.getElementById("traitsList");

    if (traitsList) {

        traitsList.innerHTML = "";

        storedResult.traits.forEach(function (trait) {

            const li = document.createElement("li");

            li.textContent = trait;

            traitsList.appendChild(li);

        });

    }

}