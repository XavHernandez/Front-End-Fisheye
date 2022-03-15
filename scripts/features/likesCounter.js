export default class LikesCounter {
  constructor(mediaCount, id) {
    this.id = id;
    this.mediaCount = mediaCount;
    const mediaLikes = document.querySelector(`[data-id="${this.id}"]`);
    this.mediaCountContent = mediaLikes.querySelector(".media_count");
    this.totalLikesContent = document.querySelector(".likes");
  }

  update(action) {
    if (action === "LIKE") {
      this.mediaCount++;
      let totalLikes = parseInt(this.totalLikesContent.textContent);
      totalLikes++;
      this.totalLikesContent.textContent = totalLikes;
    } else {
      this.mediaCount--;
      let totalLikes = parseInt(this.totalLikesContent.textContent);
      totalLikes--;
      this.totalLikesContent.textContent = totalLikes;
    }
    this.mediaCountContent.textContent = this.mediaCount;
  }
}
