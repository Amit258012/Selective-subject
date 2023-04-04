"use strict";

// Data

const operatingSys = {
    teachers: [
        {
            tName: "H Biradar",
            attendance: 9,
            iaMarks: 8,
        },
        {
            tName: "S Patil",
            attendance: 6,
            iaMarks: 7,
        },
    ],
    sub: 7,
    notEligible: ["AIML", "CSE", "ECE", "ISE"],
    subCode: "18CS654",
};
const trafficEngg = {
    teachers: [
        {
            tName: "A Bagi",
            attendance: 4,
            iaMarks: 2,
        },
        {
            tName: "A Patil",
            attendance: 7,
            iaMarks: 8,
        },
    ],
    sub: 5,
    notEligible: ["CIVIL"],
    subCode: "18CV652",
};
const dsa = {
    teachers: [
        {
            tName: "S Chinchali",
            attendance: 9,
            iaMarks: 10,
        },
    ],
    sub: 8,
    notEligible: ["AIML", "CSE", "ECE", "ISE"],
    subCode: "18CS652",
};
const java = {
    teachers: [
        {
            tName: "R Chavan",
            attendance: 9,
            iaMarks: 8,
        },
    ],
    sub: 6,
    notEligible: ["AIML", "CSE", "ISE"],
    subCode: "18CS653",
};
const renewableEnergy = {
    teachers: [
        {
            tName: "M Bannur",
            attendance: 6,
            iaMarks: 10,
        },
        {
            tName: "V Gonal",
            attendance: 1,
            iaMarks: 7,
        },
    ],
    sub: 8,
    notEligible: ["EEE", "MECH"],
    subCode: "18EE653",
};

const vlsi = {
    teachers: [
        {
            tName: "M Patil",
            attendance: 4,
            iaMarks: 3,
        },
        {
            tName: "V Sajjanar",
            attendance: 8,
            iaMarks: 8,
        },
    ],
    sub: 4,
    notEligible: ["ECE"],
    subCode: "18EC655",
};

const conventionalEnergy = {
    teachers: [
        {
            tName: "S Biradar",
            attendance: 4,
            iaMarks: 7,
        },
    ],
    sub: 9,
    notEligible: ["EEE", "MECH"],
    subCode: "18ME651",
};

const supplyChain = {
    teachers: [
        {
            tName: "R Nyamagoudar",
            attendance: 4,
            iaMarks: 7,
        },
    ],

    sub: 8,
    notEligible: ["MECH"],
    subCode: "18ME653",
};

const materialTech = {
    teachers: [
        {
            tName: "N Mathapati",
            attendance: 7,
            iaMarks: 6,
        },
    ],
    sub: 4,
    notEligible: ["MECH"],
    subCode: "18ME654",
};
const subjects = [
    operatingSys,
    trafficEngg,
    dsa,
    java,
    renewableEnergy,
    vlsi,
    conventionalEnergy,
    supplyChain,
    materialTech,
];
const branches = ["CSE", "ECE", "CIVIL", "EEE", "ISE", "MECH", "AIML"];

const containerApp = document.querySelector(".app");
const note = document.querySelector(".note");
const containerSubjects = document.querySelector(".subjects");
const heading = document.querySelector(".primary-heading");

const btnLogin = document.querySelector(".login__btn");
const inputBranch = document.querySelector(".form__input--branch");
// const inputLoginUsername = document.querySelector(".login__input--user");
// console.log(inputBranch.value);

const btnSort = document.querySelector(".sort__btn-sub");

const displaySubjects = function (subjects, sort = false) {
    containerSubjects.innerHTML = "";
    const sortedsub = sort
        ? subjects.slice().sort((a, b) => b.sub - a.sub)
        : subjects;

    sortedsub.forEach(function (subj, i) {
        const type = subj.sub > 7 ? "easy" : subj.sub > 4 ? "medium" : "hard";
        const notElg = subj.notEligible.includes(
            inputBranch.value.toUpperCase()
        )
            ? "not_eligible"
            : "";
        for (let tech = 0; tech < subj.teachers.length; tech++) {
            const html = `
                <div class="subjects__row ${notElg}">
                    <div class="subjects__type subjects__type--${type}">${type}</div>
                    <div class="subjects__code">${subj.subCode}</div>
                    <div class="subjects__teacher">${subj.teachers[tech].tName}</div>
                </div>
                `;

            containerSubjects.insertAdjacentHTML("beforeend", html);
        }
    });
};

btnLogin.addEventListener("click", function (e) {
    e.preventDefault();
    containerApp.classList.toggle("hidden");
    note.classList.toggle("hidden");
    heading.textContent = `Best recommended subjects for ${inputBranch.value.toUpperCase()} students`;
    displaySubjects(subjects);
    containerApp.style.opacity = 100;
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
    e.preventDefault();
    displaySubjects(subjects, !sorted);
    sorted = !sorted;
});
