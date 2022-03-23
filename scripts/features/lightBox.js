export default class LightBox {
  /**
   *
   * @param {array} medias
   */

  constructor(medias) {
    this.medias = medias;
    this.lightBoxWrapper = document.querySelector(".lightbox__wrapper");
    this.lightBoxModal = document.querySelector(".lighbox__modal");
    this.lightBoxCloser = document.querySelector(".lightbox__close");
    this.mediaLinks = document.querySelectorAll(".media_lightbox");
    this.mediaWrapper = document.querySelector(".lightbox__image");
    this.main = document.getElementById("main");
    this.index = null;
  }

  toggleVisibility() {
    this.lightBoxWrapper.classList.toggle("visible");
  }

  openLightBox() {
    Array.from(this.mediaLinks).forEach((link) => {
      link.addEventListener("click", () => {
        this.main.setAttribute("aria-hidden", true);
        this.lightBoxWrapper.setAttribute("aria-hidden", false);
        const currentMedia = this.medias.find(
          (media) => media.id === +link.dataset.media
        );
        this.index = this.medias.indexOf(currentMedia);
        this.renderCarrousel(currentMedia);
        this.toggleVisibility();
        this.lightBoxWrapper.focus();
      });
      link.addEventListener("keyup", (event) => {
        if (
          event.key === "Enter" &&
          !this.lightBoxWrapper.classList.contains("visible")
        ) {
          this.main.setAttribute("aria-hidden", true);
          this.lightBoxWrapper.setAttribute("aria-hidden", false);
          const currentMedia = this.medias.find(
            (media) => media.id === +link.dataset.media
          );
          this.index = this.medias.indexOf(currentMedia);
          this.renderCarrousel(currentMedia);
          this.toggleVisibility();
          this.lightBoxWrapper.focus();
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

  renderCarrousel(media) {
    const currentMediaCloseUp = media.getMediaContent();
    this.mediaWrapper.innerHTML = "";
    this.mediaWrapper.innerHTML = currentMediaCloseUp;
  }

  handleCarrousel() {
    document
      .querySelector(".lightbox__previous")
      .addEventListener("click", () => {
        this.manageCarrouselIndex(this.index, "previous");
      });
    document.querySelector(".lightbox__next").addEventListener("click", () => {
      this.manageCarrouselIndex(this.index, "next");
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        this.manageCarrouselIndex(this.index, "previous");
      } else if (event.key === "ArrowRight") {
        this.manageCarrouselIndex(this.index, "next");
      }
    });
  }

  manageCarrouselIndex(index, action) {
    let newIndex = index;

    if (action === "next") {
      newIndex++;
    }
    if (action === "previous") {
      newIndex--;
    }

    if (newIndex === -1) {
      newIndex = this.medias.length - 1;
    } else if (newIndex === this.medias.length - 1) {
      newIndex = 0;
    }
    const newMedia = this.medias[newIndex];
    this.renderCarrousel(newMedia);
    this.index = newIndex;
  }

  handleLightBox() {
    this.openLightBox();
    this.closeLightBox();
    this.handleCarrousel();
  }
}
