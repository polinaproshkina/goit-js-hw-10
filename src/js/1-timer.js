'use strict';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const startBtn = document.querySelector('[data-start]');
startBtn.disabled = true;

let userSelectedDate;
let currentTime = Date.now();
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      userSelectedDate = selectedDates[0];
      if (userSelectedDate < currentTime) {
          iziToast.show({
             title: 'Error',
             titleColor: 'white',
             iconUrl: '../img/bi_x-octagon.svg',
             transitionIn: 'fadeInLeft',
             transitionOut: 'fadeOutRight',
            position: 'topRight',
            messageColor: 'white',
            backgroundColor: 'red',
             message: "Please choose a date in the future"
          });
          startBtn.classList.replace('isActive','disabled');
            startBtn.disabled = true;

      } else if (userSelectedDate >= currentTime) {
          startBtn.classList.replace('disabled', 'isActive');
          startBtn.disabled = false;
      }
      
  },
};

flatpickr('input#datetime-picker', options);

function convertMs(ms) {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const days = Math.floor(ms / day);
        const hours = Math.floor((ms % day) / hour);
        const minutes = Math.floor(((ms % day) % hour) / minute);
        const seconds = Math.floor((((ms % day) % hour) % minute) / second);

        return { days, hours, minutes, seconds };
    };

startBtn.addEventListener('click', timer);

    
function timer() {
    
    const interval = setInterval(() => {
        const currentTime1 = Date.now();
        const delta = userSelectedDate - currentTime1;
        const timeRes = convertMs(delta);
        if (delta > 0) {
            document.querySelector('[data-days]').innerHTML = timeRes.days.toString().padStart(2, "0");
            document.querySelector('[data-hours]').innerHTML = timeRes.hours.toString().padStart(2, "0");
            document.querySelector('[data-minutes]').innerHTML = timeRes.minutes.toString().padStart(2, "0");
            document.querySelector('[data-seconds]').innerHTML = timeRes.seconds.toString().padStart(2, "0");
            document.querySelector('input#datetime-picker').disabled = true;
            startBtn.classList.replace('isActive','disabled');
            startBtn.disabled = true;
        }
        if (delta <= 0) {
            clearInterval(interval);
            startBtn.classList.replace('disabled', 'isActive');
            startBtn.disabled = false;
            document.querySelector('input#datetime-picker').disabled = false;
        }
    }, 1000)   
    
};







    
















