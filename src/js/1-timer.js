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
             message: "Please choose a date in the future"
            });
        //   window.alert("Please choose a date in the future");
          startBtn.disabled = true;

      } else if (userSelectedDate >= currentTime) {
          startBtn.disabled = false;
      }
      
  },
};

flatpickr('#datetime-picker', options);

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

startBtn.addEventListener('click', () => {
    setInterval(
        timer,
        1000
    );
    document.querySelector('#datetime-picker').disabled = true;
    
});
    
function timer() {
    const currentTime1 = Date.now()
    const delta = userSelectedDate - currentTime1;
    const timeRes = convertMs(delta);
    if (delta > 0) {
    console.log(timeRes);
    document.querySelector('[data-days]').innerHTML = timeRes.days.toString().padStart(2, "0");
    document.querySelector('[data-hours]').innerHTML = timeRes.hours.toString().padStart(2, "0");
    document.querySelector('[data-minutes]').innerHTML = timeRes.minutes.toString().padStart(2, "0");
    document.querySelector('[data-seconds]').innerHTML = timeRes.seconds.toString().padStart(2, "0");
    }
    
};





              
    




    
















