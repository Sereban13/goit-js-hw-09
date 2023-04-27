// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const inputDate = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');

const daysElem = document.querySelector('[data-days]');
const hoursElem = document.querySelector('[data-hours]');
const minutesElem = document.querySelector('[data-minutes]');
const secondsElem = document.querySelector('[data-seconds]');

startBtn.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) {
      
    const futureTime = selectedDates[0].getTime();
    const currentTime = Date.now();

    // console.log(futureTime);
    // console.log(currentTime);
    

    if(futureTime < currentTime) {
        startBtn.disabled = true;
        Notiflix.Notify.failure("Please choose a date in the future");
    } 
    else {
        startBtn.disabled = false;
    }

    startBtn.addEventListener('click', () => {
        let intervalId = null;
        intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = futureTime - currentTime;
            const { days, hours, minutes, seconds } = convertMs(deltaTime);
           
                daysElem.textContent = days;
                hoursElem.textContent = hours;
                minutesElem.textContent = minutes;
                secondsElem.textContent = seconds;
                
                
            if (deltaTime < 1000){
                clearInterval(intervalId);
                // daysElem.textContent = "00";
                // hoursElem.textContent = "00";
                // minutesElem.textContent = "00";
                // secondsElem.textContent = "00";
            }

            // console.log(`${days}:${hours}:${minutes}:${seconds}`);
        }, 1000);
    })

    }
};



// startBtn.addEventListener('click', startOn);
function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }

flatpickr(inputDate, options);