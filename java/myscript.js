/* Basit AI tahmini: Seçilen etkinliğe göre dövüşçü ve kazanma olasılığı */
function makePrediction() {
    // Etkinlik seçimi
    const eventSelect = document.getElementById('eventSelect');
    const selectedEvent = eventSelect.value;
    const resultDiv = document.getElementById('predictionResult');

    // Etkinlik seçilmediyse uyarı
    if (!selectedEvent) {
        resultDiv.innerHTML = '<p>Lütfen bir etkinlik seçin!</p>';
        return;
    }

    // Etkinliklere göre dövüşçü listeleri
    const eventFighters = {
        'UFC 310': [
            { name: 'Jon Jones', probability: 70 },
            { name: 'Stipe Miocic', probability: 30 }
        ],
        'UFC Fight Night': [
            { name: 'Alex Pereira', probability: 60 },
            { name: 'Jamahal Hill', probability: 40 }
        ],
        'UFC 311': [
            { name: 'Alexander Volkanovski', probability: 55 },
            { name: 'Ilia Topuria', probability: 45 }
        ]
    };

    // Seçilen etkinliğin dövüşçülerini al
    const fighters = eventFighters[selectedEvent];

    // Rastgele dövüşçü seçimi
    const randomFighter = fighters[Math.floor(Math.random() * fighters.length)];

    // Tahmin sonucu
    resultDiv.innerHTML = `
        <p><strong>${selectedEvent} için AI Tahmini:</strong></p>
        <p>${randomFighter.name} kazanma olasılığı: %${randomFighter.probability}</p>
    `;
}
/* Hamburger menü aç/kapa */
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}