import {UI_ELEMENTS} from "./uiElements";
import axios from "axios";
import {USER, URL, URL_USER_AUTHORIZATION, URL_MESSAGES} from "./constants";
import {AUTHORIZATION_COOKIE} from "./cookie";
import Cookies from "js-cookie";
import {responseError, responseSuccess} from "./showserverresponse";
import {createMessage} from "./message";

export {
  changeName, authorization, getCode
}

export const WEBSOCKET = new WebSocket(`wss://mighty-cove-31255.herokuapp.com/websockets?${Cookies.get('authorization_token')}`)

async function getCode() {
  event.preventDefault()
  try {
    const email = UI_ELEMENTS.INPUTS.MAIL.value
    const response = await axios.post(URL, {
      email: String(email),
    })
    if (response.status === 200) {
      responseSuccess()
    }
  } catch (error) {
    responseError()
  }
}

async function authorization() {
  event.preventDefault()
  const TOKEN = UI_ELEMENTS.INPUTS.CODE.value
  AUTHORIZATION_COOKIE.setCookie('authorization_token', TOKEN)
  const config = {
    headers: {
      'Authorization': `Bearer ${Cookies.get('authorization_token')}`
    }
  }
  try {
    const response = await axios.get(URL_USER_AUTHORIZATION, config)
    if (response.status === 200) {
      USER.name = response.data.name
      USER.id = response.data._id
      await showMessageStory()
      responseSuccess()
    }
  } catch (error) {
    responseError()
  }
}

async function changeName() {
  event.preventDefault()
  const name = UI_ELEMENTS.INPUTS.NAME.value
  const data = {
    name: name
  }
  const config = {
    headers: {
      'Authorization': `Bearer ${Cookies.get('authorization_token')}`
    }
  }
  try {
    const response = await axios.patch(URL, data, config)
    if (response.status === 200) {
      USER.name = name
      responseSuccess()
    }
  } catch
      (error) {
    responseError()
  }
}

async function showMessageStory() {
  const config = {
    headers: {
      'Authorization': `Bearer ${Cookies.get('authorization_token')}`
    }
  }
  try {
    const response = await axios.get(URL_MESSAGES, config)
    if (response.status === 200) {
      const messages = response.data.messages
      getLastMessages(messages)
    }
  } catch (error) {
    responseError()
  }
}

function getLastMessages(messages) {
  let lastMessages = messages.slice(-15)
  lastMessages.forEach((message) => {
    createMessage(message._id, message.user.name, message.text, message.createdAt)
  })
}


WEBSOCKET.onopen = () => {
  console.log('Connection')
}

WEBSOCKET.onmessage = (event) => {
  const message = JSON.parse(event.data)
  createMessage(message._id, message.user.name, message.text, message.createdAt)
}

export async function sendMessage() {
  event.preventDefault()
  let text = UI_ELEMENTS.INPUTS.MESSAGE.value
  if (!text) return;
  WEBSOCKET.send(
      JSON.stringify({
        text: text,
      })
  );
}

WEBSOCKET.onerror = (error) => {
  console.log(error)
}

WEBSOCKET.onclose = (event) => {
  if (event.wasClean) {
    console.log(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
  } else {
    console.log("[close] Соединение прервано");
    setTimeout(() => {
    }, 5000);
  }
}