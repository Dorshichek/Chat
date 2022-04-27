import {UI_ELEMENTS} from "./view";

export function showError() {
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

export function showSuccess() {
  UI_ELEMENTS.CONTAINER.insertAdjacentHTML('afterbegin', `
    <div class="success">
      Письмо отправлено
    </div>
  `)

  setTimeout(() => {
    const success = document.querySelector('.success')
    success.remove()
  }, 3000)
}