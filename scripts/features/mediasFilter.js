import PhotographerMedia from "../constructors/photographerMedia.js";
import { sortByLikes, sortByDate, sortByTitle } from "../utils/filters.js";

export default class MediasFilter {
  constructor(medias) {
    this.medias = medias;
    this.filtersSection = document.querySelector(".filters_section");
    this.mediasContainer = document.querySelector(".medias_section");
  }

  clearMediasContainer() {
    this.mediasContainer.innerHTML = "";
  }

  async filterMedias(query) {
    this.clearMediasContainer();

    switch (query) {
      case "likes":
        sortByLikes(this.medias);
        break;
      case "date":
        sortByDate(this.medias);
        break;
      case "title":
        sortByTitle(this.medias);
        break;
      default:
        return this.medias;
    }

    this.medias.forEach((media) => {
      const formatedMedia = new PhotographerMedia(media);
      const mediaCard = formatedMedia.getMediaCardDOM();
      this.mediasContainer.innerHTML += mediaCard;
    });
  }

  onChangeFilter() {
    this.filtersSection
      .querySelector("form")
      .addEventListener("change", (event) => {
        const query = event.target.value;
        this.filterMedias(query);
      });
  }

  render() {
    const filterForm = `
      <form class="filter-form" action="#" method="POST">
          <label for="filter-select" id="Order_By" aria-label="Order By">Trier par: </label>
          <select name="filter-select" id="filter-select" aria-labelledby="Order_By">
              <option value="likes">Popularité</option>
              <option value="date">Date</option>
              <option value="title">Titre</option>
          </select>
      </form>`;

    this.filtersSection.innerHTML += filterForm;
    this.onChangeFilter();
  }
}
