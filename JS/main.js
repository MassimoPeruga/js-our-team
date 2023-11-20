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

// Functions
function createMemberString(member, index) {
    let memberString = `Membro ${index + 1}: `;
    let first = true;

    for (const key in member) {
        if (!first) {
            memberString += ', ';
        } else {
            first = false;
        }
        memberString += `${key}: ${member[key]}`;
    }

    return memberString;
}

function createCard(member) {
    const col = document.createElement('div');
    col.classList.add('col');

    const card = document.createElement('div');
    card.classList.add('card', 'ms_card', 'border-3');
    col.appendChild(card);

    const img = document.createElement('img');
    img.classList.add('card-img-top');
    img.src = `img/${member.photo}`;
    card.appendChild(img);

    const body = document.createElement('div');
    body.classList.add('card-body');
    card.appendChild(body);

    const title = document.createElement('h5');
    title.textContent = member.name;
    body.appendChild(title);

    const text = document.createElement('p');
    text.textContent = member.role;
    body.appendChild(text);

    return col;
}

// Funzione principale
function renderTeamMembers(members) {
    const teamContainer = document.getElementById('ms_team_container');
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < members.length; i++) {
        const member = members[i];
        const memberString = createMemberString(member, i);
        console.log(memberString);

        const col = createCard(member);
        fragment.appendChild(col);
    }

    teamContainer.appendChild(fragment);
}

// Richiama la funzione principale
renderTeamMembers(teamMembers);