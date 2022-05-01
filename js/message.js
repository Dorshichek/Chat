import {UI_ELEMENTS} from "./uiElements";
import {format} from "date-fns";
import {USER} from "./constants";

export {
  Message
  // , Message, mymessage, usermessage
}

// function createMessage() {
//   event.preventDefault()
//   const message = UI_ELEMENTS.INPUTS.MESSAGE.value
//   if (message) {
//     const element = document.createElement('div')
//     element.className = 'message__wrapper my_message'
//     element.append(UI_ELEMENTS.TEMPLATE.MESSAGE.content.cloneNode(true))
//     element.querySelector('.message__text').textContent = USER.name + ': ' + message
//     element.querySelector('.message__time').textContent = format(new Date(), '	HH:mm')
//     UI_ELEMENTS.CHAT.append(element)
//     UI_ELEMENTS.INPUTS.MESSAGE.value = ''
//   }
// }


class Message {

  constructor(id = USER.id, name, text, time) {
    this.id = id
    this.name = name
    this.text = text
    this.time = time
  }

  renderMessage(id, name, text, time) {
    event.preventDefault()
    if (id === USER.id) {
      const message = UI_ELEMENTS.INPUTS.MESSAGE.value
      if (message) {
        const element = document.createElement('div')
        element.className = 'message__wrapper my-message' //my_message
        element.append(UI_ELEMENTS.TEMPLATE.MESSAGE.content.cloneNode(true))
        element.querySelector('.message__text').textContent = name + ': ' + message //USER.name
        element.querySelector('.message__time').textContent = format(new Date(), '	HH:mm')
        UI_ELEMENTS.CHAT.append(element)
        UI_ELEMENTS.INPUTS.MESSAGE.value = ''
      }
    } else {
      const element = document.createElement('div')
      element.className = 'message__wrapper other-message'
      element.append(UI_ELEMENTS.TEMPLATE.MESSAGE.content.cloneNode(true))
      element.querySelector('.message__text').textContent = name + ': ' + text
      element.querySelector('.message__time').textContent = time
      UI_ELEMENTS.CHAT.append(element)
    }
  }
}