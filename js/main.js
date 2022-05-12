import {UI_ELEMENTS} from "./uielements";

export function clearInput(input) {
  return input.value = ''
}

export function closeModal() {
  const modals = document.querySelectorAll('.modal-active')
  modals.forEach((modal) => {
    modal.classList.remove('modal-active')
  })
}

export function showModal(modal) {
  UI_ELEMENTS.MODALS.WRAPPER.classList.add('modal-active')
  modal.classList.add('modal-active')
}

function newMessageScroll() {

}