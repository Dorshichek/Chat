import {UI_ELEMENTS} from "./view";
import {format} from "date-fns";

export {
  createMessage
}

function createMessage() {
  event.preventDefault()
  const message = UI_ELEMENTS.INPUTS.MESSAGE.value
  if (message) {
    const element = document.createElement('div')
    element.className = 'message__wrapper'
    element.append(UI_ELEMENTS.TEMPLATE.MESSAGE.content.cloneNode(true))
    element.querySelector('.message__text').textContent = 'Я : ' + message
    element.querySelector('.message__time').textContent = format(new Date(), '	HH:mm')
    UI_ELEMENTS.CHAT.append(element)
    UI_ELEMENTS.INPUTS.MESSAGE.value = ''
  }
}
