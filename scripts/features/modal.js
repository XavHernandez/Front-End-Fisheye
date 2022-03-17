export default class Modal {
  /**
   *
   * @param {object} photographer
   */

  constructor(photographer) {
    this.photographer = photographer;
    this.photographerBadge = document.querySelector(".name");
    this.contactButton = document.querySelector(".contact_button");
    this.modalButton = document.querySelector(".contact_button_dialog");
    this.closeButton = document.querySelector(".modal header img");
    this.modalWrapper = document.querySelector(".contact_modal");
    this.modal = document.querySelector(".modal");
    this.main = document.getElementById("main");
  }

  toggleVisibility() {
    this.modalWrapper.classList.toggle("visible");
  }

  displayModal() {
    this.contactButton.addEventListener("click", () => {
      this.main.setAttribute("aria-hidden", true);
      this.modalWrapper.setAttribute("aria-hidden", false);
      this.photographerBadge.textContent = this.photographer.name;
      this.toggleVisibility();
    });
  }

  closeModal() {
    this.closeButton.addEventListener("click", () => {
      this.main.setAttribute("aria-hidden", false);
      this.modalWrapper.setAttribute("aria-hidden", true);
      this.toggleVisibility();
    });
  }

  handleModal() {
    this.displayModal();
    this.closeModal();
  }
}
