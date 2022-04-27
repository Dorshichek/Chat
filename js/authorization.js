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
    const response = await axios.post('https://mighty-cove-31255.herokuapp.com/api/user', {
      email: String(email),
    })
    if (response.data.success) {
      showSuccess()
    }
  } catch (error) {
    showError()
  }
}