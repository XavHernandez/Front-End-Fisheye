export default class PhotographerProfil {
  /**
   * @param {object} data
   */

  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.portrait = data.portrait;
    this.country = data.country;
    this.city = data.city;
    this.price = data.price;
    this.tagline = data.tagline;
  }

  getPhotographerCardDOM() {
    const profilCard = `
      <article class="photographer_card">
        <a href="photographer.html?id=${this.id}" role="link" aria-label="Profil de ${this.name}">
          <img class="photographer_img" src="/assets/photographers/${this.portrait}" alt="Portrait de ${this.name}">
          <h2 class="photographer_name">${this.name}</h2>
        </a>
        <p class="photographer_location">${this.city}, ${this.country}</p>
        <p class="photographer_tagline">${this.tagline}</p>
        <p class="photographer_price">${this.price}€/jour</p>
      </article>`;
    return profilCard;
  }

  getPhotographerHeader() {
    const header = `
      <header class="photographer_header">
        <div class="photographer_infos">
          <h1 class="photographer_name">${this.name}</h1>
          <p class="photographer_location">${this.city}, ${this.country}</p>
          <p class="photographer_tagline">${this.tagline}</p>
        </div>
        <button class="contact_button" role="button" aria-label="Contact Me">
          Contactez-moi
        </button>
        <img class="photographer_img" src="/assets/photographers/${this.portrait}" alt="Portrait de ${this.name}">
      </header>`;
    return header;
  }
}
