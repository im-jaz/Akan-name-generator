
// AKAN NAME GENERATOR

// Male akan names
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
const days = [
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
        description: "Wise, calm and deeply connected to tradition.",
        traits: ["Wisdom", "Patience", "Protection", "Mystery"]
    },

    {
        animal: "Spider",
        akan: "Anansi",
        description: "Creative, clever and an excellent storyteller.",
        traits: ["Intelligence", "Creativity", "Strategy", "Humour"]
    },

    {
        animal: "Leopard",
        akan: "Leopard",
        description: "Fearless and confident in every challenge.",
        traits: ["Courage", "Leadership", "Confidence", "Power"]
    },

    {
        animal: "Elephant",
        akan: "Elephant",
        description: "Strong, dependable and respected.",
        traits: ["Strength", "Loyalty", "Wisdom", "Stability"]
    },

    {
        animal: "Crocodile",
        akan: "Crocodile",
        description: "Patient and highly adaptable.",
        traits: ["Resilience", "Survival", "Focus", "Protection"]
    },

    {
        animal: "Eagle",
        akan: "Eagle",
        description: "Visionary and ambitious.",
        traits: ["Vision", "Freedom", "Determination", "Leadership"]
    },

    {
        animal: "Lion",
        akan: "Lion",
        description: "Bold, proud and inspiring.",
        traits: ["Bravery", "Confidence", "Honor", "Authority"]
    }

];

// FORM

const form = document.getElementById("akanForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const dob = document.getElementById("dob").value;

    const gender = document.querySelector('input[name="gender"]:checked');



    // Validation

    if(name === ""){

        alert("Please enter your first name.");

        return;

    }

    if(dob === ""){

        alert("Please select your date of birth.");

        return;

    }

    if(!gender){

        alert("Please choose your gender.");

        return;

    }



    // Get weekday

    const birthDate = new Date(dob);

    const dayIndex = birthDate.getDay();



    // Akan name

    let akanName;

    if(gender.value === "male"){

        akanName = maleNames[dayIndex];

    }

    else{

        akanName = femaleNames[dayIndex];

    }



    // Guardian

    const guardian = guardians[dayIndex];



    // Save everything

    const result = {

        firstName: name,

        gender: gender.value,

        birthDay: days[dayIndex],

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