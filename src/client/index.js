//client/js import all functions from client side to display it in html
import { handleSubmit } from './js/app.js'
import {datee} from './js/datee.js'
import {endDatee} from './js/endDatee.js'
import {weatherbit} from './js/weatherbit.js'
import {pixabay} from './js/pixabay.js'




//client/styles ....import all styles to display it in html
import './styles/style.scss'


//https://codepen.io/chriscoyier/pen/jLevON
let today = new Date().toISOString().substr(0, 10);
// set default value to date input
document.getElementById("datee").value = today
document.getElementById("endDatee").value = today





//handle form on submit
const generate = document.getElementById('generate');
generate.addEventListener('click', handleSubmit);


export {
    handleSubmit,
    datee, 
    weatherbit,
    pixabay,
    endDatee
}