import {UI_ELEMENTS} from "./view";
import axios from "axios";
import Cookies from "js-cookie"

class Cookie {
  set 
  constructor() {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhdmx1Y2hlbmtvOTYub3JnQG1haWwucnUiLCJpYXQiOjE2NTEwOTc4MDcsImV4cCI6MTY1MTU0NDIwN30.NshFd9LoIiSic9ttmxt79m2oh - eyIw9a - EADBVpubb4'
  }

  set() {
    Cookies.set({
      'token': this.token,
    })
  }
}

async function sendName() {
  try {
    const URL = 'https://mighty-cove-31255.herokuapp.com/api/user'
    const name = UI_ELEMENTS.INPUTS.SETTINGS.value


    const response = await axios.patch(URL, {
      Authorization: `Bearer ${Cookies.get('token')}`,
      name: name
    })
    if (response.data.success) {
      console.log('Гуд')
    }
  } catch (e) {
    console.log('Не гуд')
  }
}

