import {UI_ELEMENTS} from "./view";
import axios from "axios";
import {AUTHORIZATION_COOKIE} from "./cookie";

export {
  sendName,
}

async function sendName() {
  try {
    const name = UI_ELEMENTS.INPUTS.SETTINGS.value
    AUTHORIZATION_COOKIE.setCookie()
    const TOKEN = AUTHORIZATION_COOKIE.getCookie('token')
    const response = await axios.patch(URL, {
      Authorization: `Bearer ${TOKEN}`,
      name: name
    })
    if (response.data.success) {
      console.log('Гуд')
    }
  } catch (e) {
    console.log('Не гуд')
  }
}

