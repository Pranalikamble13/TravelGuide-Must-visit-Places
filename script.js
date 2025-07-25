const data = {
    pune: [
        {
            name: "Shaniwar Wada",
            description: "A historical fortification in the city of Pune.",
            image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Shaniwarwada.jpg",
            contact: "020-12345678"
        },
        {
            name: "Aga Khan Palace",
            description: "A majestic building with rich history related to Gandhi.",
            image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Aga_Khan_Palace_view.jpg",
            contact: "020-87654321"
        }
    ],
    nashik: [
        {
            name: "Sula Vineyards",
            description: "India's leading vineyard and winery experience.",
            image: "https://upload.wikimedia.org/wikipedia/commons/3/39/Sula_Vineyards_Nashik.jpg",
            contact: "0253-6543210"
        },
        {
            name: "Trimbakeshwar Temple",
            description: "An ancient Shiva temple and one of the twelve Jyotirlingas.",
            image: "https://upload.wikimedia.org/wikipedia/commons/0/06/Trimbakeshwar_temple.jpg",
            contact: "0253-1234567"
        }
    ],
    nagpur: [
        {
            name: "Deekshabhoomi",
            description: "A sacred monument of Navayana Buddhism.",
            image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Deekshabhoomi_Nagpur.jpg",
            contact: "0712-9988776"
        },
        {
            name: "Futala Lake",
            description: "A scenic lake famous for its light show and hangout space.",
            image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Futala_Lake_Nagpur.jpg",
            contact: "0712-5544332"
        }
    ]
};

function showPlaces() {
    const district = document.getElementById('districtSelect').value;
    const container = document.getElementById('placesContainer');
    container.innerHTML = '';

    if (!district || !data[district]) return;

    data[district].forEach(place => {
        const card = document.createElement('div');
        card.classList.add('place-card');

        card.innerHTML = `
            <img src="${place.image}" alt="${place.name}" />
            <h3>${place.name}</h3>
            <p>${place.description}</p>
            <p><strong>Contact:</strong> ${place.contact}</p>
        `;

        container.appendChild(card);
    });
}
