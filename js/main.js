import {UI_ELEMENTS} from "./view.js";
import {format} from "date-fns"
import {getCode} from "./authorization";

UI_ELEMENTS.SETTINGS.addEventListener('click', function () {
  UI_ELEMENTS.MODAL.classList.add('modal-active')
  UI_ELEMENTS.MODAL_SETTINGS.classList.add('modal-active')
})

UI_ELEMENTS.AUTHORIZATION.addEventListener('click', function () {
  UI_ELEMENTS.MODAL.classList.add('modal-active')
  UI_ELEMENTS.MODAL_AUTHORIZATION.classList.add('modal-active')
})

UI_ELEMENTS.CODE.addEventListener('click', function () {
  UI_ELEMENTS.MODAL.classList.add('modal-active')
  UI_ELEMENTS.MODAL_CODE.classList.add('modal-active')
})

UI_ELEMENTS.BUTTON_CLOSE.forEach((item) => {
  item.addEventListener('click', function () {
    UI_ELEMENTS.MODAL.classList.remove('modal-active')
    UI_ELEMENTS.MODAL_SETTINGS.classList.remove('modal-active')
    UI_ELEMENTS.MODAL_AUTHORIZATION.classList.remove('modal-active')
    UI_ELEMENTS.MODAL_CODE.classList.remove('modal-active')  })
})

UI_ELEMENTS.BUTTON_CODE.addEventListener('click', getCode)

UI_ELEMENTS.BUTTON_SEND_MESSAGE.addEventListener('click', createMessage)

function createMessage() {
  event.preventDefault()
  let message = UI_ELEMENTS.INPUT_MESSAGE.value
  if (message) {
    const element = document.createElement('div')
    element.className = 'message__wrapper'
    element.append(UI_ELEMENTS.MESSAGE.content.cloneNode(true))
    element.querySelector('.message__text').textContent = 'Я : ' + message
    element.querySelector('.message__time').textContent = format(new Date(), '	HH:mm')
    UI_ELEMENTS.CHAT.append(element)
    UI_ELEMENTS.INPUT_MESSAGE.value = ''
  }
}

