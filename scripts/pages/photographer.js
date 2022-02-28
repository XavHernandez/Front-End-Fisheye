import API from "../api/api.js";
import PhotographerProfil from "../constructors/photographerProfil.js";
import PhotographerMedia from "../constructors/photographerMedia.js";
import { displayModal, closeModal } from "../utils/contactForm.js";

export default class PhotographerPage {
  static async render() {
    //connect to API and get data
    const fisheyeData = new API("../../data/photographers.json");
    const profils = await fisheyeData.getPhotographersProfils();
    const medias = await fisheyeData.getMedias();

    //get photographerID via URL
    const paramsID = new URLSearchParams(window.location.search);
    const selectedID = paramsID.get("id");

    //filter photographer data and display selected profil header
    const selectedProfilID = profils.find(
      (profil) => profil.id === +selectedID
    );
    const selectedProfil = new PhotographerProfil(selectedProfilID);
    const selectedProfilHeader = selectedProfil.getPhotographerHeader();
    const headerWrapper = document.querySelector("#main");
    headerWrapper.insertAdjacentHTML("afterbegin", selectedProfilHeader);

    //filter medias data and display selected profil medias
    const selectedMedias = medias.filter(
      (media) => media.photographerId === +selectedID
    );
    let totalLikes = 0;
    selectedMedias.forEach((media) => {
      totalLikes += media.likes;
      const formatedMedia = new PhotographerMedia(media);
      const mediaCard = formatedMedia.getMediaCardDOM();
      const mediasContainer = document.querySelector(".medias_section");
      mediasContainer.innerHTML += mediaCard;
    });
    const selectedProfilMetrics =
      selectedProfil.getPhotographerMetrics(totalLikes);
    headerWrapper.insertAdjacentHTML("beforeend", selectedProfilMetrics);

    displayModal();
    closeModal();
  }
}

//carrousel (video+image)
//filters
//contactForm
//likes

//accessibility
