'use strict';

import flatpickr from 'flatpickr';
import iziToast from 'izitoast';

import errorMessage from '../img/error.svg';

const inputEndTimer = document.querySelector('#datetime-picker');
const btnStartTimer = document.querySelector('button[data-start]');
const valueOutputDays = document.querySelector('span[data-days]');
const valueOutputHours = document.querySelector('span[data-hours]');
const valueOutputMinutes = document.querySelector('span[data-minutes]');
const valueOutputSeconds = document.querySelector('span[data-seconds]');

btnStartTimer.setAttribute('disabled', true);

btnStartTimer.addEventListener('click', onStartTimer);

let userSelectedDate = 0;

flatpickr(inputEndTimer, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const numberValueTimer = selectedDates[0] - Date.now();

    if (numberValueTimer > 0) {
      btnStartTimer.disabled = false;
      userSelectedDate = selectedDates[0];
    } else {
      iziToast.error(invalidDate);
      btnStartTimer.disabled = true;
    }
  },
});

function onStartTimer() {
  btnStartTimer.disabled = true;
  inputEndTimer.setAttribute('disabled', true);

  const intervalId = setInterval(() => {
    const numberValueTimer = userSelectedDate - Date.now();
    if (numberValueTimer <= 0) {
      clearInterval(intervalId);
      inputEndTimer.disabled = false;
      return;
    }
    const valueTimer = convertMs(numberValueTimer);
    valueOutputDays.textContent = valueTimer.days;
    valueOutputHours.textContent = valueTimer.hours;
    valueOutputMinutes.textContent = valueTimer.minutes;
    valueOutputSeconds.textContent = valueTimer.seconds;
  }, 1000);
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
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}

// ============================================СТИЛІЗАЦІЯ=========================
const invalidDate = {
  title: 'ERROR',
  titleColor: '#ffffff',
  titleSize: '16px',
  titleLineHeight: '1.5',
  message: 'Please choose a date in the future',
  messageColor: '#ffffff',
  messageSize: '16px',
  messageLineHeight: '1.5',
  backgroundColor: '#ef4040',
  theme: 'dark', // light
  color: 'red', // blue, red, green, yellow
  iconColor: '#fafafb',
  iconUrl: errorMessage,
  close: true,
  closeOnEscape: true,
  closeOnClick: true,
  position: 'topRight',
};
