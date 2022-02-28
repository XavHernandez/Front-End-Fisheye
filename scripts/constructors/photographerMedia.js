export default class PhotographerMedia {
  /**
   * @param {object} data
   */

  constructor(data) {
    this.id = data.id;
    this.photographerId = data.photographerId;
    this.title = data.title;
    this.date = data.date;
    this.likes = data.likes;
    this.price = data.price;
    this.video = data.video || null;
    this.image = data.image || null;
  }

  getMediaCardDOM() {
    let media;
    this.image !== null
      ? (media = `<img class="media_item" src="/assets/medias/${this.image}" alt="${this.title}"></img>`)
      : (media = `<video class="media_item" aria-label="${this.title}" width="350" height="350">
          <source src="/assets/medias/${this.video}#t=0.1" type="video/mp4" />
        </video>`);

    const mediaCard = `
      <article class="media_card">
        ${media}
        <div class="media_infos">
          <h2 class="media_title">${this.title}</h2>
          <div class="media_likes">
            <div class="media_count">${this.likes}</div>
            <div class="heart" aria-label="Media number of likes">&#9829</div>
          </div>
        </div>
      </article>`;
    return mediaCard;
  }
}
