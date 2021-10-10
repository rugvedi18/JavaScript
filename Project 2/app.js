let data = [{
        name: 'Rugvedi',
        age: '21'
    },
    {
        name: 'Neha',
        age: '27'
    },
    {
        name: 'Radha',
        age: '25'
    },
    {
        name: 'Mira',
        age: '25'
    }
];

const info = document.querySelector('#info');

let details = data.map(function (item) {
    return '<div>' + item.name + ' is ' + item.age + ' years old' + '</div>';
});

info.innerHTML = details.join('\n');