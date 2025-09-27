import { cars }  from "../objects/sport_cars_specifications.js";
import { electricCars } from "../objects/electrics_cars_specifications.js";
import { luxuryCars } from '../objects/luxury_cars_specifications.js';


import { displayCarInfoSport, displayCarInfoElectric, displayCarInfoLuxury } from "./specification_text.js";

const carTypeButtons = document.querySelectorAll('.cartype');

carTypeButtons.forEach(button => {
    let counter = 0;
    
    button.addEventListener('click', () => {
        
        let buttonText = button.querySelector('h2').innerText;
            if(buttonText === "Deportivos"){
                counter = 0;
                displayCarInfoSport(cars);
            } else if(buttonText === "Eléctricos"){
                counter = 1;
                displayCarInfoElectric(electricCars);    
            } else if(buttonText === "Lujosos"){
                counter = 2;
                displayCarInfoLuxury(luxuryCars);            
            }
    });
});
