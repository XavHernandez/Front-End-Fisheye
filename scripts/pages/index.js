import { getData } from "../api/api.js";
import { photographerProfilFactory } from "../factories/photographerProfil.js";

async function getPhotographers() {
  const { photographers } = await getData();
  return photographers;
}

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerProfilFactory(photographer);
    const photographerCardDOM = photographerModel.getPhotographerCardDOM();
    photographersSection.appendChild(photographerCardDOM);
  });
}

async function init() {
  const photographers = await getPhotographers();
  displayData(photographers);
}

init();
