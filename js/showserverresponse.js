import {UI_ELEMENTS} from "./uiElements";

export function responseError() {
  UI_ELEMENTS.CONTAINER.insertAdjacentHTML('afterbegin', `
    <div class="error"> 
      Что-то пошло не так
    </div>
  `)

  setTimeout(() => {
    const error = document.querySelector('.error')
    error.remove()
  }, 3000)
}

export function responseSuccess() {
  UI_ELEMENTS.CONTAINER.insertAdjacentHTML('afterbegin', `
    <div class="success">
      Успешный запрос
    </div>
  `)

  setTimeout(() => {
    const success = document.querySelector('.success')
    success.remove()
  }, 3000)
}