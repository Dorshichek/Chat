import {UI_ELEMENTS} from "./view.js";

UI_ELEMENTS.SETTINGS.addEventListener('click', openModal)

UI_ELEMENTS.BUTTON_CLOSE.addEventListener('click', closeModal)

UI_ELEMENTS.BUTTON_SEND_MESSAGE.addEventListener('click', sendMessage)

function openModal() {
  UI_ELEMENTS.MODAL.classList.add('modal-active')
}

function closeModal() {
  UI_ELEMENTS.MODAL.classList.remove('modal-active')
}

function sendMessage() {
  const date = new Date
  const element = document.createElement('div')
  element.append(UI_ELEMENTS.MESSAGE.content.cloneNode(true))
  element.querySelector('.message__text').textContent = 'Я:' + UI_ELEMENTS.INPUT_MESSAGE.value
  element.querySelector('.message__time').textContent = date.getHours() + ':' + date.getMinutes()
  UI_ELEMENTS.CHAT.append(element)
}

