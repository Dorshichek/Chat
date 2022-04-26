import {UI_ELEMENTS} from "./view";
import axios from "axios";

export {
  getCode
}

async function getCode() {
  event.preventDefault()
  try {
    const email = UI_ELEMENTS.INPUT_AUTHORIZATION.value
    const response = await axios.post('https://mighty-cove-31255.herokuapp.com/api/user', {
      email: String(email)
    })
    if (response.data.success) {
      console.log('Все ок')
    }
  } catch (error) {
    console.log('Что то пошло не так')
  }
}