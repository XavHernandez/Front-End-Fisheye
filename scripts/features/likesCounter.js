export default class LikesCounter {
  constructor(mediaCount, id, totalLikes) {
    this.id = id;
    this.mediaCount = mediaCount;
    this.totalLikes = totalLikes;
    const mediaLikes = document.querySelector(`[data-id="${this.id}"]`);
    this.mediaCountContent = mediaLikes.querySelector(".media_count");
    this.totalLikesContent = document.querySelector(".likes");
  }

  update(action) {
    if (action === "LIKE") {
      this.mediaCount++;
      this.totalLikes++;
    } else {
      this.mediaCount--;
      this.totalLikes--;
    }
    this.mediaCountContent.textContent = this.mediaCount;
    this.totalLikesContent.textContent = this.totalLikes;
  }
}
