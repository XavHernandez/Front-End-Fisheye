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
    this.formData = {};
  }

  toggleVisibility() {
    this.modalWrapper.classList.toggle("visible");
  }

  handleFormData() {
    const formInputs = Array.from(
      document.querySelectorAll("#contactForm input")
    );
    formInputs.push(document.querySelector("#contactForm textarea"));
    formInputs.forEach((form) => {
      if (form.value) {
        this.formData[form.name] = form.value;
      }
    });
    this.validateForm()
      ? console.log("Sending JSON data:", JSON.stringify(this.formData))
      : console.log("Please, complete the form.");
  }

  validateForm() {
    if (Object.keys(this.formData).length !== 4) {
      return false;
    }
    return true;
  }

  displayModal() {
    this.contactButton.addEventListener("click", () => {
      this.main.setAttribute("aria-hidden", true);
      this.modalWrapper.setAttribute("aria-hidden", false);
      this.photographerBadge.textContent = this.photographer.name;
      this.toggleVisibility();
      this.modalWrapper.focus();
    });
  }

  closeModal() {
    //close modal with cross button
    this.closeButton.addEventListener("click", () => {
      this.main.setAttribute("aria-hidden", false);
      this.modalWrapper.setAttribute("aria-hidden", true);
      this.toggleVisibility();
    });
    //close modal with submit button
    this.submitButton.addEventListener("click", (event) => {
      event.preventDefault();
      this.handleFormData();
      if (this.validateForm()) {
        this.main.setAttribute("aria-hidden", false);
        this.modalWrapper.setAttribute("aria-hidden", true);
        this.toggleVisibility();
      }
    });
    //close modal with keyboard
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
