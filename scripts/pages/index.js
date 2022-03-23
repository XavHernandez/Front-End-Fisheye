import API from "../api/api.js";
import PhotographerProfil from "../constructors/photographerProfil.js";

export default class IndexPage {
  static async render() {
    const fisheyeData = new API(
      "../../Front-End-Fisheye/data/photographers.json"
    );
    const profils = await fisheyeData.getPhotographersProfils();

    profils.forEach((profil) => {
      const formatedProfil = new PhotographerProfil(profil);
      const profilCard = formatedProfil.getPhotographerCardDOM();
      const profilsContainer = document.querySelector(".photographer_section");
      profilsContainer.innerHTML += profilCard;
    });
  }
}
