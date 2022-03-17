export default class Modal {
  /**
   *
   * @param {object} photographer
   */

  constructor(photographer) {
    this.photographer = photographer;
    this.photographerBadge = document.querySelector(".name");
    this.contactButton = document.querySelector(".contact_button");
    this.submitButton = document.querySelector(".contact_button_dialog");
    this.closeButton = document.querySelector(".close_modal");
    this.modalWrapper = document.querySelector(".contact_modal");
    this.modal = document.querySelector(".modal");
    this.main = document.getElementById("main");
  }

  toggleVisibility() {
    this.modalWrapper.classList.toggle("visible");
  }

  handleFormData() {
    const formInputs = Array.from(
      document.querySelectorAll("#contactForm input")
    );
    formInputs.push(document.querySelector("#contactForm textarea"));
    let formData = {};
    formInputs.forEach((form) => (formData[form.name] = form.value));
    console.log("Sending JSON data:", JSON.stringify(formData));
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
    this.submitButton.addEventListener("click", (event) => {
      event.preventDefault();
      this.handleFormData();
      this.main.setAttribute("aria-hidden", false);
      this.modalWrapper.setAttribute("aria-hidden", true);
      this.toggleVisibility();
    });
    document.addEventListener("keyup", (event) => {
      if (
        event.key === "Escape" &&
        this.modalWrapper.classList.contains("visible")
      ) {
        this.main.setAttribute("aria-hidden", false);
        this.modalWrapper.setAttribute("aria-hidden", true);
        this.toggleVisibility();
      }
    });
  }

  handleModal() {
    this.displayModal();
    this.closeModal();
  }
}
