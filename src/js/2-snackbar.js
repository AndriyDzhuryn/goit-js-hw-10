'use strict';

import iziToast from 'izitoast';

import errorMessage from '../img/error.svg';
import successMessage from '../img/success.svg';

const formCreatePromise = document.querySelector('.form');

const onFormCreatePromise = evt => {
  evt.preventDefault();
  const promise = new Promise((resolve, reject) => {
    if (evt.target.elements.state.value === 'fulfilled') {
      resolve(evt.target.elements.delay.value);
    } else {
      reject(evt.target.elements.delay.value);
    }
  });

  promise
    .then(delay => {
      setTimeout(() => {
        infoResolvePromise.message = `Fulfilled promise in ${delay}ms`;
        iziToast.success(infoResolvePromise);
      }, delay);
    })
    .catch(delay => {
      setTimeout(() => {
        infoRejectPromise.message = `Rejected promise in ${delay}ms`;
        iziToast.error(infoRejectPromise);
      }, delay);
    })
    .finally(() => {
      evt.target.reset();
    });
};

formCreatePromise.addEventListener('submit', onFormCreatePromise);
const infoResolvePromise = {
  messageColor: '#ffffff',
  messageSize: '16px',
  messageLineHeight: '1.5',
  backgroundColor: '#59a10d',
  theme: 'dark', // light
  iconColor: '#fafafb',
  iconUrl: successMessage,
  close: true,
  closeOnEscape: true,
  closeOnClick: true,
  position: 'topRight',
};

const infoRejectPromise = {
  messageColor: '#ffffff',
  messageSize: '16px',
  messageLineHeight: '1.5',
  backgroundColor: '#ef4040',
  theme: 'dark', // light
  iconColor: '#fafafb',
  iconUrl: errorMessage,
  close: true,
  closeOnEscape: true,
  closeOnClick: true,
  position: 'topRight',
};
