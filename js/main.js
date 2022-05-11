import {UI_ELEMENTS} from "./uielements";

export function clearInput(input) {
  input.value = ''
}

export function closeModal() {
  const modals = document.querySelectorAll('.modal-active')
  modals.forEach((modal) => {
    modal.classList.remove('modal-active')
  })
}

export function showModal(defaultValue = UI_ELEMENTS.MODALS.WRAPPER, modal) {
  defaultValue.classList.add('modal-active')
  modal.classList.add('modal-active')
}