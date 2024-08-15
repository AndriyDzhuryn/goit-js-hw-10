'use strict';

import iziToast from 'izitoast';

const formCreatePromise = document.querySelector('.form');
console.dir(formCreatePromise);

const onFormCreatePromise = evt => {
  evt.preventDefault();
  const delay = evt.target.elements.delay.value;
  const createPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (evt.target.elements.state.value === 'fulfilled') {
        infoResolvePromise.message = `Fulfilled promise in ${delay}ms`;
        resolve(iziToast.success(infoResolvePromise));
      } else {
        infoRejectPromise.message = `Rejected promise in ${delay}ms`;
        reject(iziToast.error(infoRejectPromise));
      }
    }, delay);
  });
  // evt.target.reset();
  return createPromise;
};

formCreatePromise.addEventListener('submit', onFormCreatePromise);

const infoResolvePromise = {
  messageColor: '#ffffff',
  messageSize: '16px',
  messageLineHeight: '1.5',
  backgroundColor: '#59a10d',
  theme: 'dark', // light
  iconColor: '#fafafb',
  iconUrl: '../img/bi_check2-circle.png',
  maxWidth: '383px',
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
  iconUrl: '../img/bi_x-octagon.png',
  maxWidth: '302px',
  close: true,
  closeOnEscape: true,
  closeOnClick: true,
  position: 'topRight',
};
