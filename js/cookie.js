import Cookies from "js-cookie"
import {TOKEN} from "./constants";

export {
  Cookie,
  AUTHORIZATION_COOKIE,
}

class Cookie {
  constructor(key, value) {
    this.key = key
    this.value = value
  }

  setCookie(key, value) {
    Cookies.set(key, value)
  }

  getCookie(key) {
    Cookies.get(key)
  }

  deleteCookie(key) {
    Cookies.remove(key)
  }
}

const AUTHORIZATION_COOKIE = new Cookie('token', TOKEN)
