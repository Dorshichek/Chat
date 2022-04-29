import {UI_ELEMENTS} from "./view";
import axios from "axios";
import {showError, showSuccess} from "./showserverresponse";

export {
  getCode
}

async function getCode() {
  event.preventDefault()
  try {
    const email = UI_ELEMENTS.INPUTS.AUTHORIZATION.value
    const URL = 'https://mighty-cove-31255.herokuapp.com/api/user'
    const response = await axios.post(URL, {
      email: String(email),
    })
    if (response.data.success) {
      showSuccess()
    }
  } catch (error) {
    showError()
  }
}