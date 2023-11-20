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

// MILESTONE 1: Stampare su console le informazioni di ogni membro
// MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS: Organizzare i singoli membri in card/schede

const teamContainer = document.getElementById('ms_team_container');
const fragment = document.createDocumentFragment();

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

    const col = document.createElement('div');
    col.classList.add('col');

    const card = document.createElement('div');
    card.classList.add('card', 'ms_card', 'border-3');
    col.appendChild(card);

    const img = document.createElement('img');
    img.classList.add('card-img-top');
    img.src = `img/${teamMembers[i].photo}`;
    card.appendChild(img);

    const body = document.createElement('div');
    body.classList.add('card-body');
    card.appendChild(body);

    const title = document.createElement('h5');
    title.textContent = teamMembers[i].name;
    body.appendChild(title);

    const text = document.createElement('p');
    text.textContent = teamMembers[i].role;
    body.appendChild(text);

    fragment.appendChild(col);
}

teamContainer.appendChild(fragment);