import {UI_ELEMENTS} from "./view";
import {createMessage} from "./message";
import {getCode} from "./authorization";

export function init() {
  UI_ELEMENTS.BUTTONS.SETTINGS.addEventListener('click', function () {
    UI_ELEMENTS.MODALS.WRAPPER.classList.add('modal-active')
    UI_ELEMENTS.MODALS.SETTINGS.classList.add('modal-active')
  })

  UI_ELEMENTS.BUTTONS.AUTHORIZATION.addEventListener('click', function () {
    UI_ELEMENTS.MODALS.WRAPPER.classList.add('modal-active')
    UI_ELEMENTS.MODALS.AUTHORIZATION.classList.add('modal-active')
  })

  UI_ELEMENTS.BUTTONS.CONFIRM.addEventListener('click', function () {
    UI_ELEMENTS.MODALS.WRAPPER.classList.add('modal-active')
    UI_ELEMENTS.MODALS.CODE.classList.add('modal-active')
  })

  UI_ELEMENTS.BUTTONS.CLOSE.forEach((item) => {
    item.addEventListener('click', function () {
      UI_ELEMENTS.MODALS.WRAPPER.classList.remove('modal-active')
      UI_ELEMENTS.MODALS.SETTINGS.classList.remove('modal-active')
      UI_ELEMENTS.MODALS.AUTHORIZATION.classList.remove('modal-active')
      UI_ELEMENTS.MODALS.CODE.classList.remove('modal-active')  })
  })

  UI_ELEMENTS.BUTTONS.GET_CODE.addEventListener('click', getCode)

  UI_ELEMENTS.BUTTONS.SEND_MESSAGE.addEventListener('click', createMessage)
}

init()