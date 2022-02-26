import API from "../api/api.js";
import PhotographerProfil from "../constructors/photographerProfil.js";
import { displayModal, closeModal } from "../utils/contactForm.js";

export default class PhotographerPage {
  static async render() {
    const fisheyeData = new API("../../data/photographers.json");
    const profils = await fisheyeData.getPhotographersProfils();
    const medias = await fisheyeData.getMedias();

    const paramsID = new URLSearchParams(window.location.search);
    const selectedID = paramsID.get("id");

    const selectedProfilID = profils.find(
      (profil) => profil.id === +selectedID
    );
    const selectedProfil = new PhotographerProfil(selectedProfilID);
    const selectedProfilHeader = selectedProfil.getPhotographerHeader();
    const headerWrapper = document.querySelector("#main");
    headerWrapper.innerHTML += selectedProfilHeader;

    const selectedMedias = medias.filter(
      (media) => media.photographerId === +selectedID
    );

    displayModal();
    closeModal();
  }
}

// getMediasGallery() {
//   in new Media Constructor
// }

// getPhotographerMetrics() {
//  in PhotgrapherProfil
// }

//carrousel (video+image)
//contactForm
//likes

//accessibility
