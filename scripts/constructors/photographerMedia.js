export default class PhotographerMedia {
  /**
   * @param {object} data
   * @param {object} observer
   */

  constructor(data, observer) {
    this.id = data.id;
    this.photographerId = data.photographerId;
    this.title = data.title;
    this.date = data.date;
    this.likes = data.likes;
    this.price = data.price;
    this.video = data.video || null;
    this.image = data.image || null;
    this.observer = observer;
  }

  handleLikesCounter() {
    const mediaLikes = document.querySelector(`[data-id="${this.id}"]`);
    const mediaCount = mediaLikes.querySelector(".media_count");
    const heart = mediaLikes.querySelector(".heart");
    mediaLikes.addEventListener("click", () => {
      if (mediaCount.classList.contains("liked_count")) {
        this.observer.fire("UNLIKE", this.id);
        mediaCount.classList.remove("liked_count");
        heart.classList.remove("liked_heart");
      } else {
        this.observer.fire("LIKE", this.id);
        mediaCount.classList.add("liked_count");
        heart.classList.add("liked_heart");
      }
    });
    this.preserveMediaCountState();
  }

  preserveMediaCountState() {
    const mediaLikes = document.querySelector(`[data-id="${this.id}"]`);
    const mediaCount = mediaLikes.querySelector(".media_count");
    const heart = mediaLikes.querySelector(".heart");
    const mediaObserver = this.observer.observers.find(
      (obs) => obs.id === this.id
    );
    if (mediaObserver.mediaCount === this.likes + 1) {
      mediaCount.textContent = mediaObserver.mediaCount;
      mediaCount.classList.add("liked_count");
      heart.classList.add("liked_heart");
    }
  }

  getMediaContent() {
    let media;
    this.image !== null
      ? (media = `<img loading="lazy" class="media_item" src="/assets/medias/${this.image}" alt="${this.title}"></img>`)
      : (media = `<video class="media_item" aria-label="${this.title}" width="350" height="350" controls>
          <source src="/assets/medias/${this.video}#t=0.1" type="video/mp4" />
        </video>`);

    return media;
  }

  getMediaCardDOM() {
    const mediaCard = `
      <article class="media_card">
        <a class="media_lightbox" aria-label="Voir ${
          this.title
        }" tabindex="0" data-media=${this.id}>
          ${this.getMediaContent()}
        </a>
        <div class="media_infos">
          <h2 class="media_title">${this.title}</h2>
          <div class="media_likes" data-id=${this.id}>
            <div class="media_count">${this.likes}</div>
            <div class="heart" aria-label="Liker cette image" tabindex="0">&#9829</div>
          </div>
        </div>
      </article>`;

    return mediaCard;
  }
}
