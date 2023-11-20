'use strict';

// Dati forniti
const teamMembers = [
    { name: 'Wayne Barnett', role: 'Founder & CEO', photo: 'wayne-barnett-founder-ceo.jpg' },
    { name: 'Angela Caroll', role: 'Chief Editor', photo: 'angela-caroll-chief-editor.jpg' },
    { name: 'Walter Gordon', role: 'Office Manager', photo: 'walter-gordon-office-manager.jpg' },
    { name: 'Angela Lopez', role: 'Social Media Manager', photo: 'angela-lopez-social-media-manager.jpg' },
    { name: 'Scott Estrada', role: 'Developer', photo: 'scott-estrada-developer.jpg' },
    { name: 'Barbara Ramos', role: 'Graphic Designer', photo: 'barbara-ramos-graphic-designer.jpg' }
];

// MILESTONE 1: Stampo in console le informazioni di ogni membro
for (let i = 0; i < teamMembers.length; i++) {
    let memberString = `Membro ${i + 1}: `;
    let first = true;

    for (const key in teamMembers[i]) {
        if (!first) {
            memberString += ', ';
        } else {
            first = false;
        }
        memberString += `${key}: ${teamMembers[i][key]}`;
    }

    console.log(memberString);
}