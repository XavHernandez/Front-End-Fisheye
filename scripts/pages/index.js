import API from "../api/api.js";
import PhotographerProfil from "../constructors/photographerProfil.js";

export default class IndexPage {
  static async render() {
    const fisheyeData = new API("../../data/photographers.json");
    const profils = await fisheyeData.getPhotographersProfils();

    profils.forEach((profil) => {
      const formatedProfil = new PhotographerProfil(profil);
      const profilCard = formatedProfil.getPhotographerCardDOM();
      const profilContainer = document.querySelector(".photographer_section");
      profilContainer.innerHTML += profilCard;
    });
  }
}
