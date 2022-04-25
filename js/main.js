import {UI_ELEMENTS} from "./view.js";

UI_ELEMENTS.SETTINGS.addEventListener('click', openModal)

UI_ELEMENTS.BUTTON_CLOSE.addEventListener('click', closeModal)

function openModal() {
  UI_ELEMENTS.MODAL.classList.add('modal-active')
}

function closeModal() {
  UI_ELEMENTS.MODAL.classList.remove('modal-active')
}

