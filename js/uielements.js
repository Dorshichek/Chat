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
    SEND_NAME: document.querySelector('.modal-settings__send'),
    SEND_CODE: document.querySelector('.modal-code__send'),
  },

  INPUTS: {
    MESSAGE: document.querySelector('.form__message'),
    MAIL: document.querySelector('.modal-authorization__input'),
    CODE: document.querySelector('.modal-code__input'),
    NAME: document.querySelector('.modal-settings__input'),
  },

  MODALS: {
    WRAPPER: document.querySelector('.modal'),
    OVERFLOW: document.querySelector('.modal__overflow'),
    SETTINGS: document.querySelector('.modal-settings'),
    AUTHORIZATION: document.querySelector('.modal-authorization'),
    CODE: document.querySelector('.modal-code'),
  },

  TEMPLATE: {
    MESSAGE: document.querySelector('.message'),
  },

  CHAT: document.querySelector('.chat'),
  CHAT_WRAPPER: document.querySelector('.chat__wrapper'),
  CONTAINER: document.querySelector('.chat__container'),
}