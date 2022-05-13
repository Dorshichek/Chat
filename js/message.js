import {UI_ELEMENTS} from "./uielements";
import {format} from "date-fns";
import {USER} from "./constants";
import {clearInput} from "./main";

export {
  createMessage
}

function createMessage(id, name, text, time) {
  event.preventDefault()
  const isMyMessage = !!id
  const message = UI_ELEMENTS.INPUTS.MESSAGE.value
  if (message) {
    const element = document.createElement('div')
    isMyMessage ? element.className = 'message__wrapper my-message' : element.className = 'message__wrapper'
    element.append(UI_ELEMENTS.TEMPLATE.MESSAGE.content.cloneNode(true))
    element.querySelector('.message__text').textContent = USER.name + ': ' + message
    element.querySelector('.message__time').textContent = format(new Date(), '	HH:mm')
    UI_ELEMENTS.CHAT.append(element)
    UI_ELEMENTS.INPUTS.MESSAGE.value = ''
  } else {
    const element = document.createElement('div')
    element.className = 'message__wrapper other-message'
    element.append(UI_ELEMENTS.TEMPLATE.MESSAGE.content.cloneNode(true))
    element.querySelector('.message__text').textContent = name + ': ' + text
    element.querySelector('.message__time').textContent = time.slice(11, 16)
    UI_ELEMENTS.CHAT.append(element)
  }
}

// const socket = new WebSocket(`ws://mighty-cove-31255.herokuapp.com/websockets?TOKEN`)
//
// class Message {
//
//   constructor(id = USER.id, name, text, time) {
//     this.id = id
//     this.name = name
//     this.text = text
//     this.time = time
//   }
//
//   renderMessage(id, name, text, time) {
//     event.preventDefault()
//     if (id === USER.id) {
//       const message = UI_ELEMENTS.INPUTS.MESSAGE.value
//       if (message) {
//         const element = document.createElement('div')
//         element.className = 'message__wrapper my-message' //my_message
//         element.append(UI_ELEMENTS.TEMPLATE.MESSAGE.content.cloneNode(true))
//         const myMessage = element.querySelector('.message__text').textContent = name + ': ' + message//USER.name
//         socket.send(myMessage)
//         element.querySelector('.message__time').textContent = format(new Date(), '	HH:mm')
//         UI_ELEMENTS.CHAT.append(element)
//         UI_ELEMENTS.INPUTS.MESSAGE.value = ''
//       }
//     } else {
//       const element = document.createElement('div')
//       element.className = 'message__wrapper other-message'
//       element.append(UI_ELEMENTS.TEMPLATE.MESSAGE.content.cloneNode(true))
//       element.querySelector('.message__text').textContent = name + ': ' + text
//       element.querySelector('.message__time').textContent = time
//       UI_ELEMENTS.CHAT.append(element)
//     }
//   }
// }
//
// const myMessage = new Message()