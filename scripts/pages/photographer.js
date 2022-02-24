import API from "../api/api.js";
import { displayModal, closeModal } from "../utils/contactForm.js";

export default class PhotographerPage {
  static async render() {
    const fisheyeData = new API("../../data/photographers.json");
    const profils = await fisheyeData.getPhotographersProfils();
    const medias = await fisheyeData.getMedias();

    const queryID = window.location.search;
    const paramsID = new URLSearchParams(queryID);
    const selectedID = paramsID.get("id");

    const selectedProfil = profils.find((profil) => profil.id === +selectedID);
    const selectedMedia = medias.filter(
      (media) => media.photographerId === +selectedID
    );

    //render header
    //render medias gallery

    //carrousel (video+image)
    //contactForm
    //likes

    //accessibility

    displayModal();
    closeModal();
  }
}
