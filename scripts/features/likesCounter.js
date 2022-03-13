export default class LikesCounter {
  constructor(mediaCount, id) {
    this.id = id;
    this.mediaCount = mediaCount;
    const mediaLikes = document.querySelector(`[data-id="${this.id}"]`);
    this.mediaCountContent = mediaLikes.querySelector(".media_count");
  }

  update(action) {
    console.log("test counter");
    if (action === "LIKE") {
      this.mediaCount++;
    } else {
      this.mediaCount--;
    }
    this.mediaCountContent.textContent = this.mediaCount;
  }
}
