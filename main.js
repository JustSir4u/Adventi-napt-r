const items = [
    { type: 'image', content: 'Merry_Xmas.0.0.jpg' },
    { type: 'image', content: 'Merry_Xmas.0.0.jpg' },
    { type: 'image', content: 'Merry_Xmas.0.0.jpg' },
    { type: 'image', content: 'Merry_Xmas.0.0.jpg' },
    { type: 'image', content: 'Merry_Xmas.0.0.jpg' },
    { type: 'image', content: 'Merry_Xmas.0.0.jpg' },
    { type: 'image', content: 'Merry_Xmas.0.0.jpg' },
    { type: 'image', content: 'Merry_Xmas.0.0.jpg' },

    { type: 'quote', content: 'A bölcsesség egy folyó, melynek forrása az alkalmazkodás.' },
    { type: 'quote', content: 'A bölcsesség egy folyó, melynek forrása az alkalmazkodás.' },
    { type: 'quote', content: 'A bölcsesség egy folyó, melynek forrása az alkalmazkodás.' },
    { type: 'quote', content: 'A bölcsesség egy folyó, melynek forrása az alkalmazkodás.' },
    { type: 'quote', content: 'A bölcsesség egy folyó, melynek forrása az alkalmazkodás.' },
    { type: 'quote', content: 'A bölcsesség egy folyó, melynek forrása az alkalmazkodás.' },
    { type: 'quote', content: 'A bölcsesség egy folyó, melynek forrása az alkalmazkodás.' },
    { type: 'quote', content: 'A bölcsesség egy folyó, melynek forrása az alkalmazkodás.' },

    { type: 'wish', content: 'Boldog ünnepeket!' },
    { type: 'wish', content: 'Boldog ünnepeket!' },
    { type: 'wish', content: 'Boldog ünnepeket!' },
    { type: 'wish', content: 'Boldog ünnepeket!' },
    { type: 'wish', content: 'Boldog ünnepeket!' },
    { type: 'wish', content: 'Boldog ünnepeket!' },
    
];

function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function populateGrid() {
    const grid = document.getElementById('grid');
    const shuffledItems = shuffle(items);
    for (let i = 0; i < 24; i++) {
        const cell = document.createElement('td');
        cell.setAttribute('data-index', i);
        cell.addEventListener('click', handleClick);
        grid.appendChild(cell);
    }
}

function handleClick(event) {
    const index = event.target.getAttribute('data-index');
    if (index <= getCurrentDay()) {
        const item = items[index];
        if (item) {
            revealContent(event.target, item);
        }
    } else {
        alert('Ezt az elemet még nem nyithatod ki!');
    }
}

function revealContent(cell, item) {
    cell.innerHTML = '';
    if (item.type === 'image') {
        const img = document.createElement('img');
        img.src = item.content;
        cell.appendChild(img);
    } else {
        cell.textContent = item.content;
    }
    cell.removeEventListener('click', handleClick);
    cell.style.backgroundColor = '#fff';
}

function getCurrentDay() {
    const currentDate = new Date();
    return currentDate.getDate();
}

document.addEventListener('DOMContentLoaded', () => {
    populateGrid();
});