import { cars }  from '../objects/sport_cars_specifications.js';

const carsSection = document.getElementById('cars-section');

function displayCarInfoSport(cars) {
    carsSection.innerHTML = '';
    
    Object.keys(cars).forEach(keys => {
        const info = cars[keys];
        carsSection.innerHTML += `
            <div class="car-card">
                <div class="car-image-box">
                    <img class="car-image" src="${info.img}"></img>
                </div>
                <div class="car-info-box">
                    <h2 class="car-info-title">${info.modelo}</h2>
                        <ul class="car-info-list">
                            <li>${info.nm}</li>
                            <li>${info.cv}</li>
                            <li>${info.motor}</li>
                            <li>${info.precio}</li>
                        </ul>
                </div>
                <div class="car-description-box">
                    <p>${info.descripcion}</p>
                </div>
            </div>
        `;
    });
    
    
    console.log(cars);
    
}

function displayCarInfoElectric(electricCars) {
    carsSection.innerHTML = '';
    
    Object.keys(electricCars).forEach(keys => {
        const info = electricCars[keys];
        carsSection.innerHTML += `
            <div class="car-card">
                <div class="car-image-box">
                    <img class="car-image" src="${info.img}"></img>
                </div>
                <div class="car-info-box">
                    <h2 class="car-info-title">${info.modelo}</h2>
                        <ul class="car-info-list">
                            <li>${info.nm}</li>
                            <li>${info.cv}</li>
                            <li>${info.motor}</li>
                            <li>${info.precio}</li>
                        </ul>
                </div>
                <div class="car-description-box">
                    <p>${info.descripcion}</p>
                </div>
            </div>
        `;
    });
}



function displayCarInfoLuxury(luxuryCars) {
    carsSection.innerHTML = '';
    
    Object.keys(luxuryCars).forEach(keys => {
        const info = luxuryCars[keys];
        carsSection.innerHTML += `
            <div class="car-card">
                <div class="car-image-box">
                    <img class="car-image" src="${info.img}"></img>
                </div>
                <div class="car-info-box">
                    <h2 class="car-info-title">${info.modelo}</h2>
                        <ul class="car-info-list">
                            <li>${info.nm}</li>
                            <li>${info.cv}</li>
                            <li>${info.motor}</li>
                            <li>${info.precio}</li>
                        </ul>
                </div>
                <div class="car-description-box">
                    <p>${info.descripcion}</p>
                </div>
            </div>
        `;
    });
}



displayCarInfoSport(cars);

export { displayCarInfoSport, displayCarInfoElectric, displayCarInfoLuxury };