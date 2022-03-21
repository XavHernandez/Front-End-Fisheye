export default class LightBox {
  constructor() {
    this.lightBoxWrapper = document.querySelector(".lightbox__wrapper");
    this.lightBoxModal = document.querySelector(".lighbox__modal");
    this.lightBoxCloser = document.querySelector(".lightbox__close");
    this.mediaWrappers = document.querySelectorAll(".media_closeup");
    this.main = document.getElementById("main");
  }

  toggleVisibility() {
    this.lightBoxWrapper.classList.toggle("visible");
  }

  openLightBox() {
    Array.from(this.mediaWrappers).forEach((wrapper) => {
      wrapper.addEventListener("click", () => {
        this.main.setAttribute("aria-hidden", true);
        this.lightBoxWrapper.setAttribute("aria-hidden", false);
        this.toggleVisibility();
      });
      wrapper.addEventListener("keyup", (event) => {
        if (
          event.key === "Enter" &&
          !this.lightBoxWrapper.classList.contains("visible")
        ) {
          this.main.setAttribute("aria-hidden", true);
          this.lightBoxWrapper.setAttribute("aria-hidden", false);
          this.toggleVisibility();
        }
      });
    });
  }

  closeLightBox() {
    this.lightBoxCloser.addEventListener("click", () => {
      this.main.setAttribute("aria-hidden", false);
      this.lightBoxWrapper.setAttribute("aria-hidden", true);
      this.toggleVisibility();
    });

    document.addEventListener("keyup", (event) => {
      if (
        event.key === "Escape" &&
        this.lightBoxWrapper.classList.contains("visible")
      ) {
        this.main.setAttribute("aria-hidden", false);
        this.lightBoxWrapper.setAttribute("aria-hidden", true);
        this.toggleVisibility();
      }
    });
  }

  handleLightBox() {
    this.openLightBox();
    this.closeLightBox();
  }
}
