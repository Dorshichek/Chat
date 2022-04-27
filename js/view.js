export {
  UI_ELEMENTS,
}

const UI_ELEMENTS = {
  BUTTONS: {
    CLOSE: document.querySelectorAll('.modal__close'),
    SEND_MESSAGE: document.querySelector('.form__send-message'),
    GET_CODE: document.querySelector('.modal-authorization__send'),
    SETTINGS: document.querySelector('.header__settings'),
    CONFIRM: document.querySelector('.header__confirm'),
    AUTHORIZATION: document.querySelector('.header__authorization'),
  },

  CHAT: document.querySelector('.chat__wrapper'),
  CONTAINER: document.querySelector('.chat__container'),

  INPUTS: {
    MESSAGE: document.querySelector('.form__message'),
    AUTHORIZATION: document.querySelector('.modal-authorization__input'),
    CONFIRM: document.querySelector('.modal-code__input'),
  },

  MODALS: {
    WRAPPER: document.querySelector('.modal'),
    SETTINGS: document.querySelector('.modal-settings'),
    AUTHORIZATION: document.querySelector('.modal-authorization'),
    CODE: document.querySelector('.modal-code'),
  },

  TEMPLATE: {
    MESSAGE: document.querySelector('.message'),
  },
}