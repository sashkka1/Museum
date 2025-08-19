export default map();



function map() {
    const map = L.map('map').setView([48.8606, 2.3376], 16);

    // Подключаем тайлы OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Добавляем маркер на Лувр
    L.marker([48.8606, 2.3376]).addTo(map)
        .bindPopup('<b>Лувр</b><br>Париж, Франция')
        .openPopup();
}