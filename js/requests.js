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


async function getCode() {
  event.preventDefault()
  try {
    const email = UI_ELEMENTS.INPUTS.MAIL.value
    const URL = 'https://mighty-cove-31255.herokuapp.com/api/user'
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
      console.log(USER)
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
      console.log(messages)
      // const usersMessage = new Message({
      //   id: response.data.id,
      //   text: response.data.text,
      // })
    }
  } catch (error) {
    responseError()
  }
}

function getLastMessages(messages) {
  messages.splice(10)
  messages.forEach((message) => {
    console.log(message.createdAt)
    createMessage(message._id, message.user.name, message.text, message.createdAt)
  })
}
